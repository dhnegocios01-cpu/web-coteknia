export class Footer {
    constructor() {
        this.footerElement = document.querySelector('footer');
        this.render();
    }

    render() {
        this.footerElement.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <div class="footer-logo">
                            <span class="gradient-text">Coteknia</span>
                        </div>
                        <p>Tu espacio integral de tecnología, papelería y coworking.</p>
                        <div class="social-links">
                            <a href="#" title="Facebook">f</a>
                            <a href="#" title="Instagram">📷</a>
                            <a href="#" title="Twitter">𝕏</a>
                            <a href="#" title="LinkedIn">in</a>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="tecnologia.html">Tecnología</a></li>
                            <li><a href="papeleria.html">Papelería</a></li>
                            <li><a href="coworking.html">Coworking</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="sobre-nosotros.html">Sobre Nosotros</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#carreras">Carreras</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4>Contacto</h4>
                        <p>📍 Tu Ciudad, País</p>
                        <p>📧 <a href="mailto:info@coteknia.com">info@coteknia.com</a></p>
                        <p>📞 <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2025 Coteknia. Todos los derechos reservados. | <a href="#privacidad">Privacidad</a> | <a href="#terminos">Términos de Servicio</a></p>
                </div>
            </div>
        `;
    }
}
