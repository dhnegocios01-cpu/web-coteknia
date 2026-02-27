# Configuración del Backend de Emails con Zoho Mail

## Pasos para configurar el envío de emails

### 1. Instalar dependencias de Python

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### 2. Configurar credenciales de Zoho Mail

1. Ve a tu cuenta de Zoho: https://accounts.zoho.com/home#security/app-passwords
2. En la sección "Seguridad", busca "Contraseñas de aplicación" o "App Passwords"
3. Genera una nueva contraseña de aplicación para "SMTP"
4. Copia esa contraseña generada

5. Edita el archivo `.env` en la raíz del proyecto:
   ```
   ZOHO_EMAIL=coteknia@grupodempha.com.do
   ZOHO_PASSWORD=aqui_pega_tu_contraseña_de_aplicacion
   ```

⚠️ **IMPORTANTE**: NO uses tu contraseña normal de Zoho, usa la contraseña de aplicación generada.

### 3. Iniciar el servidor backend

En PowerShell con el entorno virtual activado:

```powershell
python server.py
```

Deberías ver algo como:
```
 * Running on http://127.0.0.1:5000
```

### 4. Abrir el sitio web

Abre `index.html` en tu navegador, navega a la página de contacto y prueba los formularios.

Los emails llegarán a: **coteknia@grupodempha.com.do**

## Estructura de archivos creados

- `server.py` - Servidor Flask con endpoints para enviar emails vía SMTP de Zoho
- `.env` - Archivo de configuración con credenciales (NO subir a Git)
- `requirements.txt` - Dependencias de Python necesarias
- `contacto.html` - Actualizado para enviar datos al backend

## Endpoints API

- `POST /api/quote` - Recibe solicitudes de cotización
- `POST /api/contact` - Recibe mensajes del formulario de contacto
- `GET /health` - Verifica que el servidor esté funcionando

## Notas adicionales

- El servidor debe estar corriendo para que los formularios funcionen
- Si cambias el puerto del servidor, actualiza `API_URL` en `contacto.html`
- Agrega `.env` al `.gitignore` para no subir credenciales a GitHub
