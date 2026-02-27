# 🚀 Instrucciones para Desplegar en Vercel

## Paso 1: Preparar GitHub

Si aún no tienes GitHub:
1. Ve a https://github.com (crea una cuenta si no la tienes)
2. Crea un repositorio nuevo llamado "web-coteknia"

## Paso 2: Subir tu código a GitHub

En PowerShell (en la carpeta del proyecto):

```powershell
# Agregar el repositorio remoto (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/web-coteknia.git

# Cambiar rama a main (si es necesario)
git branch -M main

# Subir los cambios
git push -u origin main
```

## Paso 3: Conectar a Vercel

1. Ve a https://vercel.com (crea una cuenta si no la tienes)
2. Haz click en "New Project"
3. Selecciona "Import Git Repository"
4. Busca "web-coteknia" y selecciona tu repositorio
5. No necesitas configurar variables de entorno (ya no usamos backend Python)
6. Haz click en "Deploy"

## ✅ ¡Listo!

Tu sitio estará disponible en una URL como:
```
https://web-coteknia.vercel.app
```

## 📝 Cambios realizados

- ❌ Removido servidor Python (`server.py`)
- ✅ Formularios ahora usan **Formspree** (funciona en Vercel automáticamente)
- ✅ Los emails llegarán correctamente a:
  - **Cotizaciones:** cotizaciones@grupodempha.com.do
  - **Contacto:** gerencia@grupodempha.com.do

## 🔧 Nota sobre Formspree

Los formularios usan IDs internos de Formspree. Si necesitas cambiar los emails destino en el futuro:

1. Ve a https://formspree.io
2. Actualiza los IDs en los atributos `action` de los formularios en `contacto.html`
