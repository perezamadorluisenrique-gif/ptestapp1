// ─── ESTADO ───
let productos = JSON.parse(localStorage.getItem('productos') || '[]');
let ventas = JSON.parse(localStorage.getItem('ventas') || '[]');
let categoriaActiva = 'todas';
let periodoActivo = 'dia';
let editandoId = null;
let vendiendo = null;
 
// ─── ICONOS POR CATEGORÍA ───
const iconosCat = {
  ropa: '👕', electronica: '📱', calzado: '👟', alimentos: '🍎',
  bebidas: '🥤', hogar: '🏠', belleza: '💄', juguetes: '🧸',
  deportes: '⚽', libros: '📚', tecnologia: '💻', joyeria: '💎',
  otros: '📦', default: '📦'
};
 
function getIcono(cat) {
  if (!cat) return iconosCat.default;
  const key = cat.toLowerCase().trim();
  return iconosCat[key] || iconosCat.default;
}
 
// ─── GUARDAR ───
function guardarProductos() { localStorage.setItem('productos', JSON.stringify(productos)); }
function guardarVentas() { localStorage.setItem('ventas', JSON.stringify(ventas)); }
 
// ─── TOAST ───
function toast(msg, tipo = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${tipo} show`;
  setTimeout(() => { t.className = 'toast'; }, 2800);
}
 
// ─── TEMA ───
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
 
function setTema(tema) {
  html.setAttribute('data-theme', tema);
  themeToggle.querySelector('.theme-icon').textContent = tema === 'dark' ? '☀' : '☾';
  localStorage.setItem('tema', tema);
}
 
const temaGuardado = localStorage.getItem('tema') || 'dark';
setTema(temaGuardado);
 
themeToggle.addEventListener('click', () => {
  const actual = html.getAttribute('data-theme');
  setTema(actual === 'dark' ? 'light' : 'dark');
});
 
// ─── TABS ───
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    if (tab.dataset.tab === 'finanzas') renderFinanzas();
  });
});
 
// ─── CATEGORÍAS ───
function getCategorias() {
  const cats = [...new Set(productos.map(p => p.categoria).filter(Boolean))];
  return cats;
}
 
function renderCategorias() {
  const bar = document.getElementById('categoriasBar');
  const cats = getCategorias();
  bar.innerHTML = `<button class="cat-pill ${categoriaActiva === 'todas' ? 'active' : ''}" data-cat="todas">Todas</button>`;
  cats.forEach(cat => {
    bar.innerHTML += `<button class="cat-pill ${categoriaActiva === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>`;
  });
  bar.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      categoriaActiva = btn.dataset.cat;
      renderCategorias();
      renderProductos();
    });
  });
}
 
// ─── PRODUCTOS ───
function renderProductos(filtro = '') {
  const grid = document.getElementById('productosGrid');
  const empty = document.getElementById('emptyState');
  const busqueda = filtro || document.getElementById('searchInput').value.toLowerCase();
 
  let lista = productos.filter(p => {
    const matchCat = categoriaActiva === 'todas' || p.categoria === categoriaActiva;
    const matchBusq = !busqueda || p.nombre.toLowerCase().includes(busqueda) || (p.categoria || '').toLowerCase().includes(busqueda);
    return matchCat && matchBusq;
  });
 
  if (lista.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
 
  empty.style.display = 'none';
  grid.innerHTML = lista.map(p => {
    const stockClass = p.stock === 0 ? 'out' : p.stock <= 3 ? 'low' : '';
    const stockText = p.stock === 0 ? '⚠ Sin stock' : `${p.stock} en stock`;
    return `
    <div class="producto-card" data-id="${p.id}">
      <div class="producto-cat-badge">${getIcono(p.categoria)}</div>
      <div class="producto-info">
        <div class="producto-nombre">${p.nombre}</div>
        <div class="producto-meta">
          ${p.categoria ? `<span class="producto-cat">${p.categoria}</span>` : ''}
          <span class="producto-stock ${stockClass}">${stockText}</span>
        </div>
      </div>
      <div>
        <div class="producto-precio">$${parseFloat(p.precio).toFixed(2)}</div>
        ${p.costo ? `<div class="producto-costo">Costo: $${parseFloat(p.costo).toFixed(2)}</div>` : ''}
      </div>
      <div class="producto-acciones">
        <button class="btn-accion vender" title="Registrar venta" data-id="${p.id}">$</button>
        <button class="btn-accion editar" title="Editar" data-id="${p.id}">✎</button>
        <button class="btn-accion eliminar" title="Eliminar" data-id="${p.id}">✕</button>
      </div>
    </div>`;
  }).join('');
 
  grid.querySelectorAll('.btn-accion.vender').forEach(btn => {
    btn.addEventListener('click', () => abrirModalVender(btn.dataset.id));
  });
  grid.querySelectorAll('.btn-accion.editar').forEach(btn => {
    btn.addEventListener('click', () => abrirModalEditar(btn.dataset.id));
  });
  grid.querySelectorAll('.btn-accion.eliminar').forEach(btn => {
    btn.addEventListener('click', () => eliminarProducto(btn.dataset.id));
  });
}
 
document.getElementById('searchInput').addEventListener('input', () => renderProductos());
 
// ─── MODAL AGREGAR/EDITAR ───
function abrirModal(titulo = 'Agregar producto') {
  document.getElementById('modalTitle').textContent = titulo;
  document.getElementById('modalOverlay').classList.add('active');
}
 
function cerrarModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  limpiarModal();
  editandoId = null;
}
 
function limpiarModal() {
  ['productoId', 'inputNombre', 'inputCosto', 'inputPrecio', 'inputStock', 'inputCategoria', 'inputDescripcion']
    .forEach(id => document.getElementById(id).value = '');
}
 
function abrirModalEditar(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;
  editandoId = id;
  document.getElementById('productoId').value = p.id;
  document.getElementById('inputNombre').value = p.nombre;
  document.getElementById('inputCosto').value = p.costo || '';
  document.getElementById('inputPrecio').value = p.precio;
  document.getElementById('inputStock').value = p.stock;
  document.getElementById('inputCategoria').value = p.categoria || '';
  document.getElementById('inputDescripcion').value = p.descripcion || '';
  abrirModal('Editar producto');
}
 
document.getElementById('btnAgregar').addEventListener('click', () => {
  editandoId = null;
  limpiarModal();
  abrirModal('Agregar producto');
});
 
document.getElementById('modalClose').addEventListener('click', cerrarModal);
document.getElementById('btnCancelar').addEventListener('click', cerrarModal);
 
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) cerrarModal();
});
 
document.getElementById('btnGuardar').addEventListener('click', () => {
  const nombre = document.getElementById('inputNombre').value.trim();
  const precio = parseFloat(document.getElementById('inputPrecio').value);
  const stock = parseInt(document.getElementById('inputStock').value);
 
  if (!nombre) { toast('El nombre es obligatorio', 'error'); return; }
  if (isNaN(precio) || precio < 0) { toast('Precio inválido', 'error'); return; }
  if (isNaN(stock) || stock < 0) { toast('Stock inválido', 'error'); return; }
 
  const datos = {
    nombre,
    costo: parseFloat(document.getElementById('inputCosto').value) || 0,
    precio,
    stock,
    categoria: document.getElementById('inputCategoria').value.trim(),
    descripcion: document.getElementById('inputDescripcion').value.trim(),
  };
 
  if (editandoId) {
    const idx = productos.findIndex(x => x.id === editandoId);
    productos[idx] = { ...productos[idx], ...datos };
    toast('Producto actualizado ✓', 'success');
  } else {
    productos.push({ id: Date.now().toString(), creadoEn: new Date().toISOString(), ...datos });
    toast('Producto agregado ✓', 'success');
  }
 
  guardarProductos();
  cerrarModal();
  renderCategorias();
  renderProductos();
});
 
// ─── ELIMINAR ───
function eliminarProducto(id) {
  if (!confirm('¿Eliminar este producto?')) return;
  productos = productos.filter(p => p.id !== id);
  guardarProductos();
  renderCategorias();
  renderProductos();
  toast('Producto eliminado');
}
 
// ─── MODAL VENDER ───
function abrirModalVender(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;
  if (p.stock === 0) { toast('Sin stock disponible', 'error'); return; }
  vendiendo = p;
  document.getElementById('venderNombre').textContent = p.nombre;
  document.getElementById('venderPrecio').textContent = `$${parseFloat(p.precio).toFixed(2)} por unidad`;
  document.getElementById('inputVenderCantidad').value = 1;
  document.getElementById('modalVenderOverlay').classList.add('active');
}
 
function cerrarModalVender() {
  document.getElementById('modalVenderOverlay').classList.remove('active');
  vendiendo = null;
}
 
document.getElementById('modalVenderClose').addEventListener('click', cerrarModalVender);
document.getElementById('btnVenderCancelar').addEventListener('click', cerrarModalVender);
 
document.getElementById('modalVenderOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalVenderOverlay')) cerrarModalVender();
});
 
document.getElementById('btnVenderConfirmar').addEventListener('click', () => {
  if (!vendiendo) return;
  const cant = parseInt(document.getElementById('inputVenderCantidad').value);
  if (isNaN(cant) || cant <= 0) { toast('Cantidad inválida', 'error'); return; }
  if (cant > vendiendo.stock) { toast(`Solo hay ${vendiendo.stock} en stock`, 'error'); return; }
 
  const idx = productos.findIndex(x => x.id === vendiendo.id);
  productos[idx].stock -= cant;
  guardarProductos();
 
  ventas.push({
    id: Date.now().toString(),
    productoId: vendiendo.id,
    productoNombre: vendiendo.nombre,
    cantidad: cant,
    precioUnitario: vendiendo.precio,
    total: cant * vendiendo.precio,
    fecha: new Date().toISOString()
  });
  guardarVentas();
 
  toast(`✓ Venta registrada — $${(cant * vendiendo.precio).toFixed(2)}`, 'success');
  cerrarModalVender();
  renderProductos();
});
 
// ─── FINANZAS ───
document.querySelectorAll('.periodo-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.periodo-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    periodoActivo = btn.dataset.periodo;
    renderFinanzas();
  });
});
 
function filtrarVentasPorPeriodo(periodo) {
  const ahora = new Date();
  return ventas.filter(v => {
    const fecha = new Date(v.fecha);
    if (periodo === 'dia') {
      return fecha.toDateString() === ahora.toDateString();
    } else if (periodo === 'semana') {
      const diff = (ahora - fecha) / (1000 * 60 * 60 * 24);
      return diff < 7;
    } else {
      return fecha.getMonth() === ahora.getMonth() && fecha.getFullYear() === ahora.getFullYear();
    }
  });
}
 
function renderFinanzas() {
  const ventasFiltradas = filtrarVentasPorPeriodo(periodoActivo);
  const labels = { dia: 'Hoy', semana: 'Esta semana', mes: 'Este mes' };
 
  const ingresos = ventasFiltradas.reduce((acc, v) => acc + (v.total || 0), 0);
  const unidades = ventasFiltradas.reduce((acc, v) => acc + v.cantidad, 0);
  const stockTotal = productos.reduce((acc, p) => acc + p.stock, 0);
  const valorInventario = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
 
  document.getElementById('statIngresos').textContent = `$${ingresos.toFixed(2)}`;
  document.getElementById('statVentas').textContent = unidades;
  document.getElementById('statStock').textContent = stockTotal;
  document.getElementById('statValor').textContent = `$${valorInventario.toFixed(2)}`;
  document.getElementById('statPeriodo').textContent = labels[periodoActivo];
 
  // Top productos
  const topMap = {};
  ventasFiltradas.forEach(v => {
    if (!topMap[v.productoNombre]) topMap[v.productoNombre] = { cantidad: 0, total: 0 };
    topMap[v.productoNombre].cantidad += v.cantidad;
    topMap[v.productoNombre].total += v.total;
  });
 
  const topEl = document.getElementById('topProductos');
  const topArr = Object.entries(topMap).sort((a, b) => b[1].cantidad - a[1].cantidad).slice(0, 5);
 
  if (topArr.length === 0) {
    topEl.innerHTML = '<div class="empty-finance">Sin ventas en este período</div>';
  } else {
    topEl.innerHTML = topArr.map(([nombre, data], i) => `
      <div class="top-item">
        <div class="top-item-left">
          <span class="top-item-name">${i + 1}. ${nombre}</span>
          <span class="top-item-units">${data.cantidad} unidades</span>
        </div>
        <span class="top-item-total">$${data.total.toFixed(2)}</span>
      </div>`).join('');
  }
 
  // Historial
  const histEl = document.getElementById('historialVentas');
  const histOrdenado = [...ventasFiltradas].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
 
  if (histOrdenado.length === 0) {
    histEl.innerHTML = '<div class="empty-finance">Sin ventas registradas</div>';
  } else {
    histEl.innerHTML = histOrdenado.map(v => {
      const fecha = new Date(v.fecha);
      const fechaStr = fecha.toLocaleDateString('es', { day: '2-digit', month: 'short' });
      const horaStr = fecha.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
      return `
      <div class="historial-item">
        <div class="historial-left">
          <span class="historial-nombre">${v.productoNombre}</span>
          <span class="historial-fecha">${fechaStr} · ${horaStr}</span>
        </div>
        <div class="historial-right">
          <span class="historial-monto">$${v.total.toFixed(2)}</span>
          <span class="historial-cant">${v.cantidad} ud.</span>
        </div>
      </div>`;
    }).join('');
  }
}
 
// ─── INIT ───
renderCategorias();
renderProductos();