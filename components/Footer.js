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
                        <p>Tu espacio integral de tecnología y papelería.</p>
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
                        <p>📍 <a href="https://www.google.com/maps/place/Coteknia/@18.5920676,-68.4002754,1476m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8ea8937f37eb398f:0x747e7070d205e275!8m2!3d18.5920625!4d-68.3977005!16s%2Fg%2F11yvbmxf8c" target="_blank">Punta Cana, RD</a></p>
                        <p>📧 <a href="mailto:coteknia@grupodempha.com.do">coteknia@grupodempha.com.do</a></p>
                        <p>📱 <a href="https://wa.me/18097260270" target="_blank">(809) 726-0270</a></p>
                        <p>🕐 Lun-Vie: 9:00 AM - 6:00 PM<br>Sáb: 9:00 AM - 1:00 PM</p>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2025 Coteknia. Todos los derechos reservados. | <a href="#privacidad">Privacidad</a> | <a href="#terminos">Términos de Servicio</a></p>
                </div>
            </div>
        `;
    }
}
