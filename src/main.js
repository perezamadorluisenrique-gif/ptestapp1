document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     UTILIDADES
     ===================================================== */

  function generarId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function hoy() {
    // Devuelve la fecha de hoy en formato YYYY-MM-DD para los inputs tipo date
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  function formatearFecha(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  function formatearMonto(n) {
    return '$' + parseFloat(n || 0).toFixed(2);
  }

  /* =====================================================
     DB — Capa de acceso a localStorage
     ===================================================== */
  const DB = {
    obtener(clave) {
      try { return JSON.parse(localStorage.getItem(clave)) || []; }
      catch { return []; }
    },
    guardar(clave, datos) {
      localStorage.setItem(clave, JSON.stringify(datos));
    },
    obtenerConfig() {
      try {
        const cfg = JSON.parse(localStorage.getItem('config'));
        return cfg || { precio: 0, tema: 'claro', colores: {} };
      } catch {
        return { precio: 0, tema: 'claro', colores: {} };
      }
    },
    guardarConfig(cfg) {
      localStorage.setItem('config', JSON.stringify(cfg));
    }
  };

  /* =====================================================
     TEMAS — Aplica variables CSS al elemento <html>
     ===================================================== */
  const Temas = {
    aplicar(tema, colores) {
      document.documentElement.setAttribute('data-tema', tema);

      if (tema === 'personalizado' && colores && colores.primario) {
        // Para el tema personalizado inyectamos variables inline en <html>
        const lum = this.luminancia(colores.fondo || '#F9F7F4');
        const textoClr  = lum > 0.5 ? '#2C2C2C' : '#E4EAF0';
        const cardClr   = lum > 0.5 ? '#FFFFFF'  : '#182230';

        document.documentElement.style.setProperty('--bg',       colores.fondo    || '#F9F7F4');
        document.documentElement.style.setProperty('--primario', colores.primario || '#1B4F72');
        document.documentElement.style.setProperty('--acento',   colores.acento   || '#E69B2F');
        document.documentElement.style.setProperty('--texto',    textoClr);
        document.documentElement.style.setProperty('--bg-card',  cardClr);
        document.documentElement.style.setProperty('--bg-nav',   cardClr);
      } else {
        // Limpiamos inline para que el CSS tome el control del tema claro/oscuro
        ['--bg','--primario','--acento','--texto','--bg-card','--bg-nav'].forEach(v => {
          document.documentElement.style.removeProperty(v);
        });
      }

      // Si el dashboard está visible lo redibujamos para que tome los nuevos colores
      if (!document.getElementById('vistaDashboard').classList.contains('oculta')) {
        Dashboard.renderizarGraficos();
      }
    },

    // Fórmula de luminancia perceptual para calcular si el fondo es claro u oscuro
    luminancia(hex) {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }
  };

  /* =====================================================
     CONFIG — Inicializa y actualiza la configuración
     ===================================================== */
  const Config = {
    init() {
      const cfg = DB.obtenerConfig();
      Temas.aplicar(cfg.tema || 'claro', cfg.colores);
      this.actualizarTextoPrecio();

      // Marcar el botón de tema que está activo
      document.querySelectorAll('[data-tema-btn]').forEach(btn => {
        btn.classList.toggle('activo', btn.dataset.temaBtn === (cfg.tema || 'claro'));
      });

      // Si el tema guardado es personalizado, mostrar panel con los colores guardados
      if (cfg.tema === 'personalizado' && cfg.colores) {
        document.getElementById('panelColores').classList.remove('oculta');
        if (cfg.colores.primario) document.getElementById('colorPrimario').value = cfg.colores.primario;
        if (cfg.colores.fondo)    document.getElementById('colorFondo').value    = cfg.colores.fondo;
        if (cfg.colores.acento)   document.getElementById('colorAcento').value   = cfg.colores.acento;
      }
    },
    actualizarTextoPrecio() {
      const cfg = DB.obtenerConfig();
      document.getElementById('precioActualTexto').textContent =
        cfg.precio ? `Precio actual: ${formatearMonto(cfg.precio)}` : 'Sin precio configurado';
      document.getElementById('configPrecio').value = cfg.precio || '';
    }
  };

  /* =====================================================
     DASHBOARD
     ===================================================== */
  const Dashboard = {
    periodoActivo: 'semana',

    init() { this.renderizar(); },

    renderizar() {
      const periodo = this.periodoActivo;
      const ahora   = new Date();

      // Función de filtro reutilizable según período activo
      const filtrar = (arr) => arr.filter(item => {
        const f = new Date(item.fecha + 'T00:00:00');
        if (periodo === 'semana') {
          const hace6 = new Date(ahora);
          hace6.setDate(ahora.getDate() - 6);
          hace6.setHours(0, 0, 0, 0);
          return f >= hace6;
        }
        if (periodo === 'mes') {
          return f.getFullYear() === ahora.getFullYear() && f.getMonth() === ahora.getMonth();
        }
        return true; // 'todo'
      });

      const gastosFiltrados    = filtrar(DB.obtener('gastos'));
      const ventasFiltradas    = filtrar(DB.obtener('ventas'));
      const pedidosCobrados    = filtrar(DB.obtener('pedidos')).filter(p => p.estado === 'cobrado');
      const produccionFiltrada = filtrar(DB.obtener('produccion'));

      const totalIngresos = ventasFiltradas.reduce((s, v) => s + parseFloat(v.ingreso || 0), 0)
                          + pedidosCobrados.reduce((s, p) => s + parseFloat(p.monto  || 0), 0);
      const totalGastos   = gastosFiltrados.reduce((s, g) => s + parseFloat(g.monto  || 0), 0);
      const balance       = totalIngresos - totalGastos;

      // Balance card
      const elBalance = document.getElementById('balanceMonto');
      elBalance.textContent  = formatearMonto(balance);
      elBalance.style.color  = balance < 0 ? '#FFB3B3' : '#fff';

      // Métricas
      document.getElementById('metricaProducidas').textContent =
        produccionFiltrada.reduce((s, p) => s + parseInt(p.unidades || 0), 0);
      document.getElementById('metricaVendidas').textContent =
        ventasFiltradas.reduce((s, v) => s + parseInt(v.unidades || 0), 0);
      document.getElementById('metricaGastado').textContent =
        '$' + totalGastos.toFixed(0);

      this.renderizarGraficos();
    },

    renderizarGraficos() {
      this.dibujarBarras();
      this.dibujarPastel();
    },

    // Lee el valor actual de una variable CSS para usarlo en Canvas
    cssVar(nombre) {
      return getComputedStyle(document.documentElement).getPropertyValue(nombre).trim();
    },

    dibujarBarras() {
      const canvas = document.getElementById('canvasBarras');
      // Ajustamos el ancho real del canvas al ancho del contenedor antes de dibujar
      canvas.width  = canvas.offsetWidth || 320;
      canvas.height = 210;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gastos  = DB.obtener('gastos');
      const ventas  = DB.obtener('ventas');
      const pedidos = DB.obtener('pedidos');
      const periodo = this.periodoActivo;
      const ahora   = new Date();

      const labels = [], datosIng = [], datosGas = [];

      if (periodo === 'semana') {
        const dias = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
        for (let i = 6; i >= 0; i--) {
          const d = new Date(ahora);
          d.setDate(ahora.getDate() - i);
          const iso = d.toISOString().split('T')[0];
          labels.push(dias[d.getDay()]);
          datosIng.push(
            ventas.filter(v => v.fecha === iso).reduce((s, v) => s + parseFloat(v.ingreso || 0), 0) +
            pedidos.filter(p => p.fecha === iso && p.estado === 'cobrado').reduce((s, p) => s + parseFloat(p.monto || 0), 0)
          );
          datosGas.push(gastos.filter(g => g.fecha === iso).reduce((s, g) => s + parseFloat(g.monto || 0), 0));
        }
      } else if (periodo === 'mes') {
        const diasEnMes = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0).getDate();
        for (let sem = 0; sem < 4; sem++) {
          labels.push('Sem ' + (sem + 1));
          const ini = new Date(ahora.getFullYear(), ahora.getMonth(), 1 + sem * 7);
          const fin = new Date(ahora.getFullYear(), ahora.getMonth(), Math.min((sem + 1) * 7, diasEnMes));
          const enRango = arr => arr.filter(x => {
            const f = new Date(x.fecha + 'T00:00:00');
            return f >= ini && f <= fin;
          });
          datosIng.push(
            enRango(ventas).reduce((s, v) => s + parseFloat(v.ingreso || 0), 0) +
            enRango(pedidos).filter(p => p.estado === 'cobrado').reduce((s, p) => s + parseFloat(p.monto || 0), 0)
          );
          datosGas.push(enRango(gastos).reduce((s, g) => s + parseFloat(g.monto || 0), 0));
        }
      } else {
        const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
        for (let i = 5; i >= 0; i--) {
          const d = new Date(ahora.getFullYear(), ahora.getMonth() - i, 1);
          labels.push(meses[d.getMonth()]);
          const enMes = arr => arr.filter(x => {
            const f = new Date(x.fecha + 'T00:00:00');
            return f.getFullYear() === d.getFullYear() && f.getMonth() === d.getMonth();
          });
          datosIng.push(
            enMes(ventas).reduce((s, v) => s + parseFloat(v.ingreso || 0), 0) +
            enMes(pedidos).filter(p => p.estado === 'cobrado').reduce((s, p) => s + parseFloat(p.monto || 0), 0)
          );
          datosGas.push(enMes(gastos).reduce((s, g) => s + parseFloat(g.monto || 0), 0));
        }
      }

      // ---- Dibujar ----
      const W = canvas.width, H = canvas.height;
      const padL = 42, padR = 10, padT = 12, padB = 28;
      const areaW = W - padL - padR;
      const areaH = H - padT - padB;
      const n = labels.length;
      const grupoW = areaW / n;
      const barW   = grupoW * 0.33;
      const maxVal = Math.max(...datosIng, ...datosGas, 1);

      const cTextoSuave = this.cssVar('--texto-suave');
      const cBorde      = this.cssVar('--borde');

      // Líneas horizontales de referencia
      ctx.lineWidth   = 0.5;
      ctx.strokeStyle = cBorde;
      ctx.font        = '9px sans-serif';
      ctx.fillStyle   = cTextoSuave;
      for (let i = 0; i <= 4; i++) {
        const y   = padT + (areaH / 4) * i;
        const val = maxVal - (maxVal / 4) * i;
        ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
        ctx.textAlign = 'right';
        ctx.fillText(val > 999 ? (val / 1000).toFixed(1) + 'k' : val.toFixed(0), padL - 4, y + 3);
      }

      // Barras
      for (let i = 0; i < n; i++) {
        const cx = padL + grupoW * i + grupoW / 2;

        // Barra ingresos (verde, izquierda del centro)
        const ingH = Math.max((datosIng[i] / maxVal) * areaH, 1);
        ctx.fillStyle = '#27AE60';
        this.rectRedondeado(ctx, cx - barW - 2, padT + areaH - ingH, barW, ingH, 3);

        // Barra gastos (roja, derecha del centro)
        const gasH = Math.max((datosGas[i] / maxVal) * areaH, 1);
        ctx.fillStyle = '#E74C3C';
        this.rectRedondeado(ctx, cx + 2, padT + areaH - gasH, barW, gasH, 3);

        // Etiqueta eje X
        ctx.fillStyle   = cTextoSuave;
        ctx.font        = '9px sans-serif';
        ctx.textAlign   = 'center';
        ctx.fillText(labels[i], cx, H - padB + 14);
      }
    },

    // Helper para barras con esquinas redondeadas en la parte superior
    // Compatible con WebViews que no tienen roundRect nativo
    rectRedondeado(ctx, x, y, w, h, r) {
      if (h < r) r = h;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
    },

    dibujarPastel() {
      const canvas = document.getElementById('canvasPastel');
      canvas.width  = canvas.offsetWidth || 320;
      canvas.height = 200;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ventas    = DB.obtener('ventas');
      const pedidos   = DB.obtener('pedidos');
      const mensajeria = DB.obtener('mensajeria');
      const periodo   = this.periodoActivo;
      const ahora     = new Date();

      const filtrar = arr => arr.filter(item => {
        const f = new Date(item.fecha + 'T00:00:00');
        if (periodo === 'semana') {
          const hace6 = new Date(ahora); hace6.setDate(ahora.getDate() - 6); hace6.setHours(0,0,0,0);
          return f >= hace6;
        }
        if (periodo === 'mes') {
          return f.getFullYear() === ahora.getFullYear() && f.getMonth() === ahora.getMonth();
        }
        return true;
      });

      const totalVentas    = filtrar(ventas).reduce((s, v) => s + parseFloat(v.ingreso || 0), 0);
      // Mensajería no tiene monto — usamos unidades como medida comparativa
      const totalMensajeria = filtrar(mensajeria).reduce((s, m) => s + parseInt(m.unidades || 0), 0);
      const totalPedidos   = filtrar(pedidos).filter(p => p.estado === 'cobrado').reduce((s, p) => s + parseFloat(p.monto || 0), 0);

      const secciones = [
        { label: 'Ventas',    valor: totalVentas,     color: '#27AE60' },
        { label: 'Mensajería', valor: totalMensajeria, color: '#4A9EDB' },
        { label: 'Pedidos',   valor: totalPedidos,    color: '#E69B2F' },
      ].filter(s => s.valor > 0);

      const leyenda = document.getElementById('leyendaPastel');
      leyenda.innerHTML = '';

      if (secciones.length === 0) {
        ctx.fillStyle = this.cssVar('--texto-suave');
        ctx.font = '13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Sin datos en este período', canvas.width / 2, canvas.height / 2);
        return;
      }

      const total = secciones.reduce((s, sec) => s + sec.valor, 0);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r  = Math.min(cx, cy) - 14;
      const cardColor = this.cssVar('--bg-card');

      let angulo = -Math.PI / 2;
      secciones.forEach(sec => {
        const delta = (sec.valor / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, angulo, angulo + delta);
        ctx.closePath();
        ctx.fillStyle   = sec.color;
        ctx.fill();
        // Separador entre secciones
        ctx.strokeStyle = cardColor;
        ctx.lineWidth   = 2;
        ctx.stroke();
        angulo += delta;

        // Leyenda debajo del canvas
        const item = document.createElement('div');
        item.className = 'leyenda-pastel__item';
        item.innerHTML = `<span class="leyenda-pastel__color" style="background:${sec.color}"></span>
          ${sec.label} (${((sec.valor / total) * 100).toFixed(0)}%)`;
        leyenda.appendChild(item);
      });
    }
  };

  /* =====================================================
     GASTOS
     ===================================================== */
  const Gastos = {
    init() {
      document.getElementById('gastoFecha').value = hoy();
      this.renderizarLista();
    },
    guardar() {
      const desc  = document.getElementById('gastoDesc').value.trim();
      const monto = parseFloat(document.getElementById('gastoMonto').value);
      const fecha = document.getElementById('gastoFecha').value;
      if (!desc || isNaN(monto) || monto <= 0 || !fecha) {
        return alert('Completa descripción, monto y fecha');
      }
      const lista = DB.obtener('gastos');
      lista.push({ id: generarId(), fecha, descripcion: desc, monto });
      DB.guardar('gastos', lista);
      document.getElementById('gastoDesc').value  = '';
      document.getElementById('gastoMonto').value = '';
      this.renderizarLista();
    },
    eliminar(id) {
      DB.guardar('gastos', DB.obtener('gastos').filter(g => g.id !== id));
      this.renderizarLista();
    },
    renderizarLista() {
      const lista  = document.getElementById('listaGastos');
      const gastos = DB.obtener('gastos').slice().reverse();
      if (!gastos.length) { lista.innerHTML = '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin gastos registrados</p>'; return; }
      lista.innerHTML = gastos.map(g => `
        <div class="item-lista">
          <div class="item-lista__info">
            <span class="item-lista__desc">${g.descripcion}</span>
            <span class="item-lista__fecha">${formatearFecha(g.fecha)}</span>
          </div>
          <div class="item-lista__acciones">
            <button class="item-lista__eliminar" data-tipo="gasto" data-id="${g.id}">✕</button>
            <span class="item-lista__monto item-lista__monto--neg">${formatearMonto(g.monto)}</span>
          </div>
        </div>
      `).join('');
    }
  };

  /* =====================================================
     PRODUCCIÓN
     ===================================================== */
  const Produccion = {
    init() {
      document.getElementById('prodFecha').value = hoy();
      this.renderizarLista();
    },
    guardar() {
      const unidades = parseInt(document.getElementById('prodUnidades').value);
      const fecha    = document.getElementById('prodFecha').value;
      if (!unidades || unidades <= 0 || !fecha) return alert('Ingresa unidades y fecha');
      const lista = DB.obtener('produccion');
      lista.push({ id: generarId(), fecha, unidades });
      DB.guardar('produccion', lista);
      document.getElementById('prodUnidades').value = '';
      this.renderizarLista();
    },
    eliminar(id) {
      DB.guardar('produccion', DB.obtener('produccion').filter(p => p.id !== id));
      this.renderizarLista();
    },
    renderizarLista() {
      const lista = document.getElementById('listaProduccion');
      const prod  = DB.obtener('produccion').slice().reverse();
      if (!prod.length) { lista.innerHTML = '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin tandas registradas</p>'; return; }
      lista.innerHTML = prod.map(p => `
        <div class="item-lista">
          <div class="item-lista__info">
            <span class="item-lista__desc">Tanda de producción</span>
            <span class="item-lista__fecha">${formatearFecha(p.fecha)}</span>
          </div>
          <div class="item-lista__acciones">
            <button class="item-lista__eliminar" data-tipo="produccion" data-id="${p.id}">✕</button>
            <span class="item-lista__monto item-lista__monto--prim">${p.unidades} u.</span>
          </div>
        </div>
      `).join('');
    }
  };

  /* =====================================================
     VENTAS
     ===================================================== */
  const Ventas = {
    init() {
      document.getElementById('ventaFecha').value = hoy();
      this.renderizarLista();
    },
    actualizarSugerencia() {
      const cfg      = DB.obtenerConfig();
      const unidades = parseInt(document.getElementById('ventaUnidades').value) || 0;
      const el       = document.getElementById('sugerenciaPrecio');
      el.textContent = (cfg.precio && unidades > 0)
        ? `Precio sugerido: ${formatearMonto(cfg.precio * unidades)}`
        : '';
    },
    guardar() {
      const unidades = parseInt(document.getElementById('ventaUnidades').value);
      const ingreso  = parseFloat(document.getElementById('ventaIngreso').value);
      const fecha    = document.getElementById('ventaFecha').value;
      if (!unidades || unidades <= 0 || isNaN(ingreso) || ingreso < 0 || !fecha) {
        return alert('Completa unidades, ingreso y fecha');
      }
      const lista = DB.obtener('ventas');
      lista.push({ id: generarId(), fecha, unidades, ingreso });
      DB.guardar('ventas', lista);
      document.getElementById('ventaUnidades').value = '';
      document.getElementById('ventaIngreso').value  = '';
      document.getElementById('sugerenciaPrecio').textContent = '';
      this.renderizarLista();
    },
    eliminar(id) {
      DB.guardar('ventas', DB.obtener('ventas').filter(v => v.id !== id));
      this.renderizarLista();
    },
    renderizarLista() {
      const lista  = document.getElementById('listaVentas');
      const ventas = DB.obtener('ventas').slice().reverse();
      if (!ventas.length) { lista.innerHTML = '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin ventas registradas</p>'; return; }
      lista.innerHTML = ventas.map(v => `
        <div class="item-lista">
          <div class="item-lista__info">
            <span class="item-lista__desc">${v.unidades} unidades</span>
            <span class="item-lista__fecha">${formatearFecha(v.fecha)}</span>
          </div>
          <div class="item-lista__acciones">
            <button class="item-lista__eliminar" data-tipo="venta" data-id="${v.id}">✕</button>
            <span class="item-lista__monto item-lista__monto--pos">${formatearMonto(v.ingreso)}</span>
          </div>
        </div>
      `).join('');
    }
  };

  /* =====================================================
     MENSAJERÍA
     ===================================================== */
  const Mensajeria = {
    init() {
      document.getElementById('mensFecha').value = hoy();
      this.renderizarLista();
    },
    guardar() {
      const desc      = document.getElementById('mensDesc').value.trim();
      const unidades  = parseInt(document.getElementById('mensUnidades').value);
      const nombre    = document.getElementById('mensNombre').value.trim();
      const telefono  = document.getElementById('mensTelefono').value.trim();
      const fecha     = document.getElementById('mensFecha').value;
      if (!desc || !unidades || unidades <= 0 || !fecha) {
        return alert('Completa descripción, unidades y fecha');
      }
      const lista = DB.obtener('mensajeria');
      lista.push({ id: generarId(), fecha, descripcion: desc, unidades, nombre, telefono, estado: 'pendiente' });
      DB.guardar('mensajeria', lista);
      document.getElementById('mensDesc').value     = '';
      document.getElementById('mensUnidades').value = '';
      document.getElementById('mensNombre').value   = '';
      document.getElementById('mensTelefono').value = '';
      this.renderizarLista();
    },
    completar(id) {
      const lista = DB.obtener('mensajeria');
      const idx   = lista.findIndex(m => m.id === id);
      if (idx >= 0) { lista[idx].estado = 'completado'; DB.guardar('mensajeria', lista); }
      this.renderizarLista();
    },
    eliminar(id) {
      DB.guardar('mensajeria', DB.obtener('mensajeria').filter(m => m.id !== id));
      this.renderizarLista();
    },
    renderizarLista() {
      const lista      = document.getElementById('listaMensajeria');
      const mens       = DB.obtener('mensajeria');
      const pendientes = mens.filter(m => m.estado === 'pendiente').reverse();
      const completados = mens.filter(m => m.estado === 'completado').reverse();

      // Recordamos si la sección completados estaba abierta antes de rerenderizar
      const elComp    = document.getElementById('colMensCompletados');
      const compAbierto = elComp ? !elComp.classList.contains('oculta') : false;

      const itemHTML = (m, mostrarCompletar) => `
        <div class="item-lista">
          <div class="item-lista__info">
            <span class="item-lista__desc">${m.descripcion}</span>
            ${m.nombre ? `<span class="item-lista__fecha">${m.nombre}${m.telefono ? ' · ' + m.telefono : ''}</span>` : ''}
            <span class="item-lista__fecha">${m.unidades} u. · ${formatearFecha(m.fecha)}</span>
          </div>
          <div class="item-lista__acciones">
            <button class="item-lista__eliminar" data-tipo="mensajeria" data-id="${m.id}">✕</button>
            ${mostrarCompletar
              ? `<button class="btn-estado" data-accion="completarMens" data-id="${m.id}">Completar</button>`
              : ''}
          </div>
        </div>
      `;

      lista.innerHTML = `
        <p class="seccion-pendientes__titulo">Pendientes</p>
        ${pendientes.length
          ? pendientes.map(m => itemHTML(m, true)).join('')
          : '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin pendientes</p>'}
        <div class="seccion-colapsable">
          <div class="seccion-colapsable__header${compAbierto ? ' abierto' : ''}" data-colapsar="colMensCompletados">
            <span class="seccion-colapsable__titulo">Completados (${completados.length})</span>
            <span class="seccion-colapsable__chevron">▼</span>
          </div>
          <div id="colMensCompletados" class="${compAbierto ? '' : 'oculta'}">
            ${completados.length
              ? completados.map(m => itemHTML(m, false)).join('')
              : '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin completados</p>'}
          </div>
        </div>
      `;
    }
  };

  /* =====================================================
     PEDIDOS ESPECIALES
     ===================================================== */
  const Pedidos = {
    init() {
      document.getElementById('pedFecha').value = hoy();
      this.renderizarLista();
    },
    guardar() {
      const desc     = document.getElementById('pedDesc').value.trim();
      const unidades = parseInt(document.getElementById('pedUnidades').value);
      const monto    = parseFloat(document.getElementById('pedMonto').value);
      const nombre   = document.getElementById('pedNombre').value.trim();
      const telefono = document.getElementById('pedTelefono').value.trim();
      const fecha    = document.getElementById('pedFecha').value;
      if (!desc || !unidades || unidades <= 0 || isNaN(monto) || monto < 0 || !fecha) {
        return alert('Completa descripción, unidades, monto y fecha');
      }
      const lista = DB.obtener('pedidos');
      lista.push({ id: generarId(), fecha, descripcion: desc, unidades, monto, nombre, telefono, estado: 'pendiente' });
      DB.guardar('pedidos', lista);
      ['pedDesc','pedUnidades','pedMonto','pedNombre','pedTelefono'].forEach(id => {
        document.getElementById(id).value = '';
      });
      this.renderizarLista();
    },
    avanzarEstado(id) {
      const lista = DB.obtener('pedidos');
      const idx   = lista.findIndex(p => p.id === id);
      if (idx < 0) return;
      // pendiente → completado → cobrado
      if (lista[idx].estado === 'pendiente')   lista[idx].estado = 'completado';
      else if (lista[idx].estado === 'completado') lista[idx].estado = 'cobrado';
      DB.guardar('pedidos', lista);
      this.renderizarLista();
      // Actualizamos el dashboard si está visible porque los cobrados suman al balance
      if (!document.getElementById('vistaDashboard').classList.contains('oculta')) {
        Dashboard.renderizar();
      }
    },
    eliminar(id) {
      DB.guardar('pedidos', DB.obtener('pedidos').filter(p => p.id !== id));
      this.renderizarLista();
    },
    renderizarLista() {
      const lista      = document.getElementById('listaPedidos');
      const peds       = DB.obtener('pedidos');
      const pendientes = peds.filter(p => p.estado === 'pendiente').reverse();
      const completados = peds.filter(p => p.estado === 'completado').reverse();
      const cobrados   = peds.filter(p => p.estado === 'cobrado').reverse();

      const elComp = document.getElementById('colPedCompletados');
      const elCobr = document.getElementById('colPedCobrados');
      const compAbierto = elComp ? !elComp.classList.contains('oculta') : false;
      const cobrAbierto = elCobr ? !elCobr.classList.contains('oculta') : false;

      const itemHTML = (p) => `
        <div class="item-lista">
          <div class="item-lista__info">
            <span class="item-lista__desc">${p.descripcion}</span>
            ${p.nombre ? `<span class="item-lista__fecha">${p.nombre}${p.telefono ? ' · ' + p.telefono : ''}</span>` : ''}
            <span class="item-lista__fecha">${p.unidades} u. · ${formatearFecha(p.fecha)}</span>
            <span class="item-lista__monto item-lista__monto--acento">${formatearMonto(p.monto)}</span>
          </div>
          <div class="item-lista__acciones">
            <button class="item-lista__eliminar" data-tipo="pedido" data-id="${p.id}">✕</button>
            ${p.estado === 'pendiente'
              ? `<button class="btn-estado" data-accion="avanzarPed" data-id="${p.id}">Marcar completado</button>`
              : ''}
            ${p.estado === 'completado'
              ? `<button class="btn-estado btn-estado--acento" data-accion="avanzarPed" data-id="${p.id}">Marcar cobrado</button>`
              : ''}
          </div>
        </div>
      `;

      lista.innerHTML = `
        <p class="seccion-pendientes__titulo">Pendientes</p>
        ${pendientes.length
          ? pendientes.map(itemHTML).join('')
          : '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin pendientes</p>'}
        <div class="seccion-colapsable">
          <div class="seccion-colapsable__header${compAbierto ? ' abierto' : ''}" data-colapsar="colPedCompletados">
            <span class="seccion-colapsable__titulo">Completados (${completados.length})</span>
            <span class="seccion-colapsable__chevron">▼</span>
          </div>
          <div id="colPedCompletados" class="${compAbierto ? '' : 'oculta'}">
            ${completados.length
              ? completados.map(itemHTML).join('')
              : '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin completados</p>'}
          </div>
        </div>
        <div class="seccion-colapsable">
          <div class="seccion-colapsable__header${cobrAbierto ? ' abierto' : ''}" data-colapsar="colPedCobrados">
            <span class="seccion-colapsable__titulo">Cobrados (${cobrados.length})</span>
            <span class="seccion-colapsable__chevron">▼</span>
          </div>
          <div id="colPedCobrados" class="${cobrAbierto ? '' : 'oculta'}">
            ${cobrados.length
              ? cobrados.map(itemHTML).join('')
              : '<p style="color:var(--texto-suave);font-size:0.82rem;padding:8px 0">Sin cobrados</p>'}
          </div>
        </div>
      `;
    }
  };

  /* =====================================================
     NAVEGACIÓN
     ===================================================== */
  function navegarA(vista) {
    document.querySelectorAll('.vista').forEach(v => v.classList.add('oculta'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('activo'));

    const mapa = {
      dashboard: 'vistaDashboard',
      gastos:    'vistaGastos',
      produccion:'vistaProduccion',
      ventas:    'vistaVentas',
      encargos:  'vistaEncargos',
    };

    document.getElementById(mapa[vista]).classList.remove('oculta');
    document.querySelector(`.nav-btn[data-vista="${vista}"]`).classList.add('activo');

    // Inicializar/refrescar según la vista
    const acciones = {
      dashboard:  () => Dashboard.init(),
      gastos:     () => Gastos.init(),
      produccion: () => Produccion.init(),
      ventas:     () => Ventas.init(),
      encargos:   () => Mensajeria.init(),
    };
    if (acciones[vista]) acciones[vista]();
    document.getElementById('main').scrollTop = 0;
  }

  /* =====================================================
     EXPORTAR COPIA DE SEGURIDAD (CSV)
     ===================================================== */
  function exportarCSV() {
    const fechaHoy = hoy().replace(/-/g, '');
    let csv = 'CroquetApp — Copia de seguridad ' + fechaHoy + '\n';

    const seccion = (nombre, campos, datos) => {
      csv += `\n### ${nombre} ###\n`;
      csv += campos.join(',') + '\n';
      datos.forEach(d => {
        csv += campos.map(c => `"${d[c] !== undefined ? d[c] : ''}"`).join(',') + '\n';
      });
    };

    seccion('GASTOS',    ['fecha','descripcion','monto'],                           DB.obtener('gastos'));
    seccion('PRODUCCION',['fecha','unidades'],                                      DB.obtener('produccion'));
    seccion('VENTAS',    ['fecha','unidades','ingreso'],                             DB.obtener('ventas'));
    seccion('MENSAJERIA',['fecha','descripcion','unidades','nombre','telefono','estado'], DB.obtener('mensajeria'));
    seccion('PEDIDOS',   ['fecha','descripcion','unidades','monto','nombre','telefono','estado'], DB.obtener('pedidos'));

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `croquetapp-backup-${fechaHoy}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /* =====================================================
     EVENT LISTENERS
     ===================================================== */

  // --- Navegación inferior ---
  document.getElementById('navBar').addEventListener('click', e => {
    const btn = e.target.closest('.nav-btn');
    if (btn) navegarA(btn.dataset.vista);
  });

  // --- Filtros período dashboard ---
  document.getElementById('filtrosDashboard').addEventListener('click', e => {
    const btn = e.target.closest('.filtro-btn');
    if (!btn) return;
    document.querySelectorAll('#filtrosDashboard .filtro-btn').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');
    Dashboard.periodoActivo = btn.dataset.periodo;
    Dashboard.renderizar();
  });

  // --- Pestañas encargos ---
  document.querySelector('.pestanas-encargos').addEventListener('click', e => {
    const btn = e.target.closest('.filtro-btn');
    if (!btn) return;
    document.querySelectorAll('.pestanas-encargos .filtro-btn').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');
    const esMensajeria = btn.dataset.pestana === 'mensajeria';
    document.getElementById('subvistaMensajeria').classList.toggle('oculta', !esMensajeria);
    document.getElementById('subvistaPedidos').classList.toggle('oculta', esMensajeria);
    if (esMensajeria) Mensajeria.init(); else Pedidos.init();
  });

  // --- Formularios ---
  document.getElementById('btnGuardarGasto').addEventListener('click', () => Gastos.guardar());
  document.getElementById('btnGuardarProd').addEventListener('click',  () => Produccion.guardar());
  document.getElementById('btnGuardarVenta').addEventListener('click', () => Ventas.guardar());
  document.getElementById('btnGuardarMens').addEventListener('click',  () => Mensajeria.guardar());
  document.getElementById('btnGuardarPed').addEventListener('click',   () => Pedidos.guardar());

  // Sugerencia de precio en ventas — listener único aquí para no duplicarlo en cada init()
  document.getElementById('ventaUnidades').addEventListener('input', () => Ventas.actualizarSugerencia());

  // --- Delegación de eventos: eliminar, completar, avanzar estado, colapsar ---
  document.body.addEventListener('click', e => {

    // Eliminar ítem
    const btnElim = e.target.closest('.item-lista__eliminar');
    if (btnElim) {
      if (!confirm('¿Eliminar este registro?')) return;
      const { tipo, id } = btnElim.dataset;
      const destino = { gasto: Gastos, produccion: Produccion, venta: Ventas, mensajeria: Mensajeria, pedido: Pedidos };
      if (destino[tipo]) destino[tipo].eliminar(id);
      return;
    }

    // Completar encargo de mensajería
    const btnCompMens = e.target.closest('[data-accion="completarMens"]');
    if (btnCompMens) { Mensajeria.completar(btnCompMens.dataset.id); return; }

    // Avanzar estado de pedido especial
    const btnAvPed = e.target.closest('[data-accion="avanzarPed"]');
    if (btnAvPed) { Pedidos.avanzarEstado(btnAvPed.dataset.id); return; }

    // Colapsar / expandir secciones
    const headerColapsar = e.target.closest('[data-colapsar]');
    if (headerColapsar) {
      const targetId = headerColapsar.dataset.colapsar;
      const target   = document.getElementById(targetId);
      if (!target) return;
      const estaOculto = target.classList.contains('oculta');
      target.classList.toggle('oculta', !estaOculto);
      headerColapsar.classList.toggle('abierto', estaOculto);
    }
  });

  // --- Modal configuración ---
  document.getElementById('btnConfig').addEventListener('click', () => {
    Config.actualizarTextoPrecio();
    document.getElementById('modalOverlay').classList.remove('oculta');
  });
  document.getElementById('btnCerrarModal').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.add('oculta');
  });
  // Cerrar al tocar el fondo oscuro
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) {
      document.getElementById('modalOverlay').classList.add('oculta');
    }
  });

  // --- Guardar precio ---
  document.getElementById('btnGuardarPrecio').addEventListener('click', () => {
    const precio = parseFloat(document.getElementById('configPrecio').value);
    if (isNaN(precio) || precio < 0) return alert('Ingresa un precio válido');
    const cfg = DB.obtenerConfig();
    cfg.precio = precio;
    DB.guardarConfig(cfg);
    Config.actualizarTextoPrecio();
    Ventas.actualizarSugerencia();
  });

  // --- Selector de tema ---
  document.querySelectorAll('[data-tema-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tema = btn.dataset.temaBtn;
      document.querySelectorAll('[data-tema-btn]').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      document.getElementById('panelColores').classList.toggle('oculta', tema !== 'personalizado');
      const cfg = DB.obtenerConfig();
      cfg.tema  = tema;
      DB.guardarConfig(cfg);
      Temas.aplicar(tema, cfg.colores);
    });
  });

  // --- Aplicar colores personalizados ---
  document.getElementById('btnAplicarColores').addEventListener('click', () => {
    const colores = {
      primario: document.getElementById('colorPrimario').value,
      fondo:    document.getElementById('colorFondo').value,
      acento:   document.getElementById('colorAcento').value,
    };
    const cfg = DB.obtenerConfig();
    cfg.tema   = 'personalizado';
    cfg.colores = colores;
    DB.guardarConfig(cfg);
    document.querySelectorAll('[data-tema-btn]').forEach(b =>
      b.classList.toggle('activo', b.dataset.temaBtn === 'personalizado')
    );
    Temas.aplicar('personalizado', colores);
  });

  // --- Exportar copia de seguridad ---
  document.getElementById('btnExportar').addEventListener('click', exportarCSV);

  /* =====================================================
     INICIO DE LA APP
     ===================================================== */
  Config.init();      // Restaura tema y configuración guardada
  Dashboard.init();   // Carga el dashboard como pantalla inicial

});
