from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuración de Zoho Mail SMTP
ZOHO_SMTP_SERVER = "smtp.zoho.com"
ZOHO_SMTP_PORT = 587
ZOHO_EMAIL = os.getenv('ZOHO_EMAIL', 'coteknia@grupodempha.com.do')
ZOHO_PASSWORD = os.getenv('ZOHO_PASSWORD', '')  # Contraseña de aplicación de Zoho
RECIPIENT_EMAIL_CONTACT = 'coteknia@grupodempha.com.do'
RECIPIENT_EMAIL_QUOTE = 'cotizaciones@grupodempha.com.do'

def send_email(subject, body, recipient_email, reply_to=None):
    """Envía un email usando Zoho Mail SMTP"""
    try:
        msg = MIMEMultipart('alternative')
        msg['From'] = ZOHO_EMAIL
        msg['To'] = recipient_email
        msg['Subject'] = subject
        
        if reply_to:
            msg['Reply-To'] = reply_to
        
        html_body = MIMEText(body, 'html')
        msg.attach(html_body)
        
        with smtplib.SMTP(ZOHO_SMTP_SERVER, ZOHO_SMTP_PORT) as server:
            server.starttls()
            server.login(ZOHO_EMAIL, ZOHO_PASSWORD)
            server.send_message(msg)
        
        return True
    except Exception as e:
        print(f"Error enviando email: {str(e)}")
        return False

@app.route('/api/quote', methods=['POST'])
def handle_quote():
    """Maneja solicitudes de cotización"""
    try:
        data = request.json
        rnc = data.get('rnc', '')
        company = data.get('company', '')
        message = data.get('message', '')
        
        subject = f"Nueva Solicitud de Cotización - {company}"
        body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #2563eb;">Nueva Solicitud de Cotización</h2>
                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>RNC:</strong> {rnc}</p>
                    <p><strong>Empresa:</strong> {company}</p>
                    <p><strong>Detalle de productos:</strong></p>
                    <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                        {message.replace('\n', '<br>')}
                    </div>
                </div>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                <p style="font-size: 12px; color: #6b7280;">
                    Este mensaje fue enviado desde el formulario de cotizaciones de Coteknia.
                </p>
            </body>
        </html>
        """
        
        if send_email(subject, body, RECIPIENT_EMAIL_QUOTE):
            return jsonify({'success': True, 'message': 'Cotización enviada correctamente'})
        else:
            return jsonify({'success': False, 'message': 'Error al enviar la cotización'}), 500
            
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 400

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    """Maneja mensajes del formulario de contacto"""
    try:
        data = request.json
        name = data.get('name', '')
        email = data.get('email', '')
        phone = data.get('phone', '')
        comment = data.get('comment', '')
        
        subject = f"Nuevo Mensaje de Contacto - {name}"
        body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #10b981;">Nuevo Mensaje de Contacto</h2>
                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Nombre:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Teléfono:</strong> {phone if phone else 'No proporcionado'}</p>
                    <p><strong>Mensaje:</strong></p>
                    <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                        {comment.replace('\n', '<br>')}
                    </div>
                </div>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                <p style="font-size: 12px; color: #6b7280;">
                    Este mensaje fue enviado desde el formulario de contacto de Coteknia.
                </p>
            </body>
        </html>
        """
        
        if send_email(subject, body, RECIPIENT_EMAIL_CONTACT, reply_to=email):
            return jsonify({'success': True, 'message': 'Mensaje enviado correctamente'})
        else:
            return jsonify({'success': False, 'message': 'Error al enviar el mensaje'}), 500
            
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 400

@app.route('/health', methods=['GET'])
def health_check():
    """Endpoint para verificar que el servidor está funcionando"""
    return jsonify({'status': 'ok', 'message': 'Servidor funcionando correctamente'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
