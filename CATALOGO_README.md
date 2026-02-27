# Sistema de Catálogo por Departamento - Coteknia

## 📋 Descripción

Este sistema organiza los productos de Coteknia en 4 departamentos principales:
- **Escolar** (14 productos)
- **Arte y Dibujo** (16 productos)
- **Escritura** (9 productos)
- **Oficina** (20 productos)

## 🚀 Cómo funciona

Al visitar cualquier página de departamento por primera vez, el sistema carga automáticamente todos los productos predefinidos con:
- Nombre del producto
- Precio en RD$
- Descripción breve
- Imagen placeholder (temporal)

Los productos se guardan en el navegador (localStorage), por lo que permanecen incluso después de cerrar la página.

## 📸 Cómo subir las fotos reales

### Opción 1: Subir fotos individuales

1. Ve a la página del departamento correspondiente
2. Encuentra el producto en la cuadrícula
3. Haz clic en el botón "Eliminar" del producto
4. Usa el formulario "Nuevo producto" para agregar el mismo producto con la foto real:
   - Llena el nombre y precio igual que antes
   - En "Foto (archivo)", selecciona la imagen desde tu computadora
   - Haz clic en "Agregar producto"

### Opción 2: Preparar fotos con nombres específicos

Para facilitar la carga, puedes preparar las fotos con nombres específicos en la carpeta `images/productos/`:

#### Departamento Escolar:
```
cuaderno-academie-blanco.jpg
cuaderno-academie-cuadriculado.jpg
cuaderno-colores-solidos.jpg
cuaderno-grapado.jpg
cuaderno-lisos-rayados.jpg
composition-144.jpg
folder-pendaflex.jpg
caja-junior-box.jpg
calculadora-240f.jpg
calculadora-escritorio.jpg
etiquetas.jpg
clips-33mm.jpg
clips-colores.jpg
clips-jumbo.jpg
```

#### Departamento Arte y Dibujo:
```
lapiz-2h.jpg, lapiz-4b.jpg, lapiz-5b.jpg, lapiz-6b.jpg, lapiz-7b.jpg, lapiz-8b.jpg, lapiz-hb.jpg
goma-grande.jpg, goma-pequena.jpg
escalimetro.jpg
regla-20cm.jpg, regla-30cm.jpg
tijera-5.jpg, tijera-naranjita.jpg, tijera-rebote.jpg, tijera-preescolar.jpg
```

#### Departamento Escritura:
```
marcador-azul.jpg, marcador-negro.jpg, marcador-verde.jpg, marcador-rojo.jpg
juego-geometrico-20cm.jpg, juego-geometrico-30cm.jpg
lapices-12-largo.jpg, lapices-18-largo.jpg, lapices-24-largo.jpg
```

#### Departamento Oficina:
```
papel-a4-discovery.jpg, papel-bond-eco.jpg
papel-plotter-36.jpg, papel-plotter-24.jpg
perforadora-2h.jpg, perforadora-3h.jpg
tabla-5x8.jpg, tabla-carta-mdf.jpg, tabla-oficio-mdf.jpg
tabla-mini-azul.jpg, tabla-mini-negra.jpg, tabla-plastica-a4.jpg
sobre-10x15.jpg, sobre-55x8.jpg, sobre-65x95.jpg, sobre-9x12.jpg
sobre-pago-5.jpg, sobre-pago-7.jpg
sacapuntas-igloo.jpg, sacapuntas-metal.jpg
```

### Opción 3: Editar el archivo de productos predefinidos

Si deseas actualizar todas las fotos a la vez, edita el archivo `js/productos-predefinidos.js` y cambia las rutas de `image` de cada producto.

## 🔄 Reiniciar el catálogo

Si necesitas reiniciar un departamento completo:

1. Abre las Herramientas de Desarrollador (F12 en el navegador)
2. Ve a la pestaña "Consola"
3. Escribe: `localStorage.removeItem('coteknia_catalog_escolar')` (cambia 'escolar' por el departamento deseado)
4. Presiona Enter
5. Recarga la página

## 📂 Estructura de archivos

```
images/productos/          - Carpeta para fotos de productos
  placeholder.svg          - Imagen temporal para productos sin foto
  
js/
  productos-predefinidos.js - Listado de todos los productos
  catalog.js               - Lógica del catálogo
  
departamento-escolar.html  - Página catálogo escolar
departamento-arte-dibujo.html - Página catálogo arte
departamento-escritura.html   - Página catálogo escritura
departamento-oficina.html     - Página catálogo oficina
```

## 💡 Notas importantes

- Los productos se guardan localmente en el navegador del cliente
- Si el cliente borra los datos del navegador, tendrá que recargar la página para ver los productos nuevamente
- Puedes agregar, editar o eliminar productos directamente desde cada página de departamento
- Las fotos se pueden subir como archivo o mediante URL externa
