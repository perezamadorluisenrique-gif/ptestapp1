const DB_NAME = 'flowread-db';
const DB_VERSION = 1;
const DOCUMENTS_STORE = 'documents';
const FOLDERS_STORE = 'folders';
const SETTINGS_KEY = 'flowread-settings';

export const defaultSettings = {
  defaultWpm: 320,
  theme: 'dark',
  fontSize: 72,
  orpColor: '#f97316'
};

let dbPromise;

function openDatabase() {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(FOLDERS_STORE)) {
        const folders = db.createObjectStore(FOLDERS_STORE, { keyPath: 'id' });
        folders.createIndex('order', 'order');
      }

      if (!db.objectStoreNames.contains(DOCUMENTS_STORE)) {
        const documents = db.createObjectStore(DOCUMENTS_STORE, { keyPath: 'id' });
        documents.createIndex('folderId', 'folderId');
        documents.createIndex('order', 'order');
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return dbPromise;
}

function transactionDone(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

function getAll(storeName) {
  return openDatabase().then((db) => new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result ?? []);
    request.onerror = () => reject(request.error);
  }));
}

function getOne(storeName, id) {
  return openDatabase().then((db) => new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readonly').objectStore(storeName).get(id);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error);
  }));
}

function normalizeOrder(items) {
  return [...items]
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.createdAt ?? '').localeCompare(b.createdAt ?? ''))
    .map((item, index) => ({ ...item, order: index }));
}

function sortFolders(folders) {
  return [...folders].sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
}

function sortDocuments(documents) {
  return [...documents].sort((a, b) => {
    const folderCompare = String(a.folderId ?? '').localeCompare(String(b.folderId ?? ''));
    if (folderCompare !== 0) {
      return folderCompare;
    }
    return (a.order ?? 0) - (b.order ?? 0) || (a.createdAt ?? '').localeCompare(b.createdAt ?? '');
  });
}

export const storage = {
  async getFolders() {
    const folders = await getAll(FOLDERS_STORE);
    return sortFolders(folders);
  },

  async getDocuments() {
    const documents = await getAll(DOCUMENTS_STORE);
    return sortDocuments(documents);
  },

  async getDocument(id) {
    return getOne(DOCUMENTS_STORE, id);
  },

  async createFolder(name) {
    const folders = await this.getFolders();
    const folder = {
      id: crypto.randomUUID(),
      name: name.trim(),
      order: folders.length,
      createdAt: new Date().toISOString()
    };
    const db = await openDatabase();
    const tx = db.transaction(FOLDERS_STORE, 'readwrite');
    tx.objectStore(FOLDERS_STORE).put(folder);
    await transactionDone(tx);
    return folder;
  },

  async renameFolder(id, name) {
    const folder = await getOne(FOLDERS_STORE, id);
    if (!folder) {
      return null;
    }
    folder.name = name.trim();
    const db = await openDatabase();
    const tx = db.transaction(FOLDERS_STORE, 'readwrite');
    tx.objectStore(FOLDERS_STORE).put(folder);
    await transactionDone(tx);
    return folder;
  },

  async deleteFolder(id) {
    const [folders, documents, db] = await Promise.all([
      this.getFolders(),
      this.getDocuments(),
      openDatabase()
    ]);

    const tx = db.transaction([FOLDERS_STORE, DOCUMENTS_STORE], 'readwrite');
    tx.objectStore(FOLDERS_STORE).delete(id);

    const moved = normalizeOrder(documents.filter((doc) => doc.folderId == null));
    for (const doc of documents.filter((item) => item.folderId === id)) {
      moved.push({
        ...doc,
        folderId: null,
        order: moved.length
      });
    }

    for (const doc of moved) {
      tx.objectStore(DOCUMENTS_STORE).put(doc);
    }

    for (const folder of normalizeOrder(folders.filter((item) => item.id !== id))) {
      tx.objectStore(FOLDERS_STORE).put(folder);
    }

    await transactionDone(tx);
  },

  async createDocument(input) {
    const documents = await this.getDocuments();
    const siblings = documents.filter((doc) => doc.folderId === (input.folderId ?? null));
    const now = new Date().toISOString();
    const documentRecord = {
      id: crypto.randomUUID(),
      title: input.title.trim(),
      format: input.format,
      folderId: input.folderId ?? null,
      order: siblings.length,
      content: input.content,
      tokenCount: input.tokenCount,
      currentIndex: 0,
      progressPercent: 0,
      sourceName: input.sourceName ?? input.title.trim(),
      createdAt: now,
      updatedAt: now,
      lastOpenedAt: now
    };

    const db = await openDatabase();
    const tx = db.transaction(DOCUMENTS_STORE, 'readwrite');
    tx.objectStore(DOCUMENTS_STORE).put(documentRecord);
    await transactionDone(tx);
    return documentRecord;
  },

  async updateDocument(id, patch) {
    const documentRecord = await getOne(DOCUMENTS_STORE, id);
    if (!documentRecord) {
      return null;
    }

    const updated = {
      ...documentRecord,
      ...patch,
      updatedAt: new Date().toISOString()
    };

    const db = await openDatabase();
    const tx = db.transaction(DOCUMENTS_STORE, 'readwrite');
    tx.objectStore(DOCUMENTS_STORE).put(updated);
    await transactionDone(tx);
    return updated;
  },

  async renameDocument(id, title) {
    return this.updateDocument(id, { title: title.trim() });
  },

  async deleteDocument(id) {
    const documents = await this.getDocuments();
    const target = documents.find((doc) => doc.id === id);
    if (!target) {
      return;
    }

    const db = await openDatabase();
    const tx = db.transaction(DOCUMENTS_STORE, 'readwrite');
    tx.objectStore(DOCUMENTS_STORE).delete(id);

    for (const doc of normalizeOrder(
      documents.filter((item) => item.id !== id && item.folderId === target.folderId)
    )) {
      tx.objectStore(DOCUMENTS_STORE).put(doc);
    }

    await transactionDone(tx);
  },

  async moveDocument(id, folderId) {
    const documents = await this.getDocuments();
    const target = documents.find((doc) => doc.id === id);
    if (!target) {
      return null;
    }

    const sourceFolderId = target.folderId ?? null;
    const nextFolderId = folderId ?? null;
    const destinationSiblings = documents.filter((doc) => doc.id !== id && doc.folderId === nextFolderId);

    const db = await openDatabase();
    const tx = db.transaction(DOCUMENTS_STORE, 'readwrite');

    const updatedTarget = {
      ...target,
      folderId: nextFolderId,
      order: destinationSiblings.length,
      updatedAt: new Date().toISOString()
    };
    tx.objectStore(DOCUMENTS_STORE).put(updatedTarget);

    for (const doc of normalizeOrder(
      documents.filter((item) => item.id !== id && item.folderId === sourceFolderId)
    )) {
      tx.objectStore(DOCUMENTS_STORE).put(doc);
    }

    await transactionDone(tx);
    return updatedTarget;
  },

  async reorderDocument(id, direction) {
    const documents = await this.getDocuments();
    const target = documents.find((doc) => doc.id === id);
    if (!target) {
      return;
    }

    const siblings = normalizeOrder(documents.filter((doc) => doc.folderId === target.folderId));
    const currentIndex = siblings.findIndex((doc) => doc.id === id);
    const nextIndex = currentIndex + direction;
    if (currentIndex < 0 || nextIndex < 0 || nextIndex >= siblings.length) {
      return;
    }

    const reordered = [...siblings];
    [reordered[currentIndex], reordered[nextIndex]] = [reordered[nextIndex], reordered[currentIndex]];

    const db = await openDatabase();
    const tx = db.transaction(DOCUMENTS_STORE, 'readwrite');
    for (const doc of reordered.map((item, index) => ({ ...item, order: index }))) {
      tx.objectStore(DOCUMENTS_STORE).put(doc);
    }
    await transactionDone(tx);
  }
};

export const settingsStore = {
  load() {
    try {
      return {
        ...defaultSettings,
        ...JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? '{}')
      };
    } catch {
      return { ...defaultSettings };
    }
  },

  save(nextSettings) {
    const merged = {
      ...defaultSettings,
      ...nextSettings
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
    return merged;
  }
};
