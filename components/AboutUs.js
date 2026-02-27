export class AboutUs {
    constructor() {
        this.aboutElement = document.getElementById('about-us');
        this.render();
    }

    render() {
        this.aboutElement.innerHTML = `
            <div class="container">
                <div class="about-header">
                    <div class="about-badge">🏢 Quiénes Somos</div>
                    <h2>QUIÉNES SOMOS</h2>
                    <p class="about-lead">Un espacio de soluciones prácticas, rápidas y accesibles</p>
                </div>

                <div class="about-content">
                    <div class="about-text-block">
                        <p>Coteknia es un espacio de papelería, tecnología y soluciones digitales creado para ofrecer respuestas prácticas, rápidas y accesibles en un solo lugar.</p>
                        
                        <p>Nacemos con la visión de convertirnos en el punto de apoyo para estudiantes, profesionales, emprendedores y negocios de la zona, facilitando el acceso a material gastable, impresión y servicios digitales sin necesidad de desplazarse largas distancias.</p>
                        
                        <p><strong>Más que una tienda, somos un centro de soluciones.</strong></p>
                    </div>

                    <div class="mission-vision-values">
                        <div class="mvv-card">
                            <h3>MISIÓN</h3>
                            <p>Brindar soluciones integrales en papelería, impresión y tecnología, ofreciendo productos y servicios de calidad con atención cercana, rápida y confiable para nuestra comunidad.</p>
                        </div>
                        <div class="mvv-card">
                            <h3>VISIÓN</h3>
                            <p>Convertirnos en el centro de referencia en la zona para servicios de papelería y soluciones digitales, destacándonos por eficiencia, innovación y compromiso con nuestros clientes.</p>
                        </div>
                        <div class="mvv-card mvv-card-wide">
                            <h3>VALORES</h3>
                            <ul class="values-list">
                                <li><strong>Servicio:</strong> Atención cercana y resolutiva.</li>
                                <li><strong>Responsabilidad:</strong> Cumplimos lo que prometemos.</li>
                                <li><strong>Eficiencia:</strong> Respuestas rápidas y procesos ágiles.</li>
                                <li><strong>Calidad:</strong> Productos y servicios confiables.</li>
                                <li><strong>Compromiso local:</strong> Apoyo a profesionales y emprendedores de la zona.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="about-values">
                        <div class="value-card">
                            <span class="value-icon">📄</span>
                            <h4>Papelería</h4>
                            <p>Material gastable y suministros de calidad para todas tus necesidades.</p>
                        </div>
                        <div class="value-card">
                            <span class="value-icon">💻</span>
                            <h4>Tecnología</h4>
                            <p>Equipos, accesorios y soluciones tecnológicas al alcance de tu mano.</p>
                        </div>
                        <div class="value-card">
                            <span class="value-icon">🖨️</span>
                            <h4>Impresión</h4>
                            <p>Servicios de impresión rápidos y de calidad para tus documentos y proyectos.</p>
                        </div>
                        <div class="value-card">
                            <span class="value-icon">🌐</span>
                            <h4>Soluciones Digitales</h4>
                            <p>Servicios digitales modernos sin necesidad de largos desplazamientos.</p>
                        </div>
                    </div>

                    <div class="about-text-block">
                        <h3>¿A Quién Servimos?</h3>
                        <ul class="about-list">
                            <li>✅ Estudiantes que necesitan material y recursos para sus estudios</li>
                            <li>✅ Profesionales que buscan eficiencia en su día a día</li>
                            <li>✅ Emprendedores que requieren respuestas rápidas</li>
                            <li>✅ Negocios de la zona que necesitan un proveedor confiable</li>
                            <li>✅ Cualquier persona que valore la accesibilidad y la practicidad</li>
                        </ul>
                    </div>

                    <div class="about-text-block">
                        <h3>NUESTRO EQUIPO</h3>
                        <p>En Coteknia creemos en la atención cercana y eficiente. Nuestro equipo está comprometido con brindar un servicio ágil, orientado a soluciones y con trato respetuoso y profesional.</p>
                        <p>Cada cliente es atendido con la intención de resolver su necesidad en el menor tiempo posible y con la mejor orientación.</p>
                    </div>

                    <div class="about-cta">
                        <h3>Tu Centro de Soluciones</h3>
                        <p>En Coteknia encontrarás todo lo que necesitas sin complicaciones. Estamos aquí para facilitarte el acceso a los recursos que te hacen avanzar.</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary">Visítanos Hoy</button>
                            <button class="btn btn-secondary">Ver Servicios</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const buttons = this.aboutElement.querySelectorAll('.btn');
        buttons[0].addEventListener('click', () => {
            alert('¡Agenda tu visita a Coteknia! Pronto disponible.');
        });
        buttons[1].addEventListener('click', () => {
            window.location.href = 'servicios.html';
        });
    }
}
