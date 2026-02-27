const nodemailer = require('nodemailer');

// Transporter para cotizaciones
const transporterQuote = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
        user: 'cotizaciones@grupodempha.com.do',
        pass: 'SUUnSKZHSCBS'
    }
});

// Transporter para contacto
const transporterContact = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
        user: 'coteknia@grupodempha.com.do',
        pass: 'hXAv5zR2Cnzs'
    }
});

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { type, rnc, company, email, phone, message, name, comment } = req.body;

        let mailOptions;
        let transporter;

        if (type === 'quote') {
            // Formulario de cotizaciones
            transporter = transporterQuote;
            mailOptions = {
                from: 'cotizaciones@grupodempha.com.do',
                to: 'cotizaciones@grupodempha.com.do',
                subject: `Nueva Solicitud de Cotización - ${company}`,
                html: `
                    <h2 style="color: #2563eb;">Nueva Solicitud de Cotización</h2>
                    <p><strong>RNC:</strong> ${rnc}</p>
                    <p><strong>Empresa:</strong> ${company}</p>
                    <p><strong>Email del cliente:</strong> ${email}</p>
                    <p><strong>Teléfono del cliente:</strong> ${phone}</p>
                    <p><strong>Detalle de productos:</strong></p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                    <p style="margin-top: 20px; font-size: 12px; color: #666;">
                        Este mensaje fue enviado desde el formulario de cotizaciones de Coteknia.
                    </p>
                `,
                replyTo: email
            };
        } else if (type === 'contact') {
            // Formulario de contacto
            transporter = transporterContact;
            mailOptions = {
                from: 'coteknia@grupodempha.com.do',
                to: 'coteknia@grupodempha.com.do',
                subject: `Nuevo Mensaje de Contacto - ${name}`,
                html: `
                    <h2 style="color: #10b981;">Nuevo Mensaje de Contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                    <p><strong>Mensaje:</strong></p>
                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px;">
                        ${comment.replace(/\n/g, '<br>')}
                    </div>
                    <p style="margin-top: 20px; font-size: 12px; color: #666;">
                        Este mensaje fue enviado desde el formulario de contacto de Coteknia.
                    </p>
                `,
                replyTo: email
            };
        }

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ 
            success: true, 
            message: 'Email enviado correctamente' 
        });

    } catch (error) {
        console.error('Error enviando email:', error);
        return res.status(500).json({ 
            success: false, 
            error: error.message || 'Error al enviar el email' 
        });
    }
};
