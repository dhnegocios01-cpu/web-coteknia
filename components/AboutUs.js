export class AboutUs {
    constructor() {
        this.aboutElement = document.getElementById('about-us');
        this.render();
    }

    render() {
        this.aboutElement.innerHTML = `
            <div class="container">
                <div class="about-header">
                    <div class="about-badge">🚀 Nuestra Historia</div>
                    <h2>Somos Coteknia</h2>
                    <p class="about-lead">Tu aliado en la transformación digital y el espacio para crear sin límites</p>
                </div>

                <div class="about-content">
                    <div class="about-text-block">
                        <h3>Nace una Visión</h3>
                        <p>En un mundo donde la tecnología avanza a la velocidad de la luz, decidimos crear un espacio diferente. No solo ofrecemos herramientas; ofrecemos un <strong>ecosistema completo</strong> donde tu creatividad y profesionalismo convergen.</p>
                        <p>Coteknia nace de la necesidad de unir tres mundos: la <strong>tecnología de punta</strong>, los <strong>recursos que necesitas cada día</strong> y un <strong>ambiente colaborativo</strong> donde las ideas fluyen naturalmente.</p>
                    </div>

                    <div class="about-values">
                        <div class="value-card">
                            <span class="value-icon">💡</span>
                            <h4>Innovación</h4>
                            <p>Buscamos estar siempre a la vanguardia, anticipando lo que necesitarás mañana.</p>
                        </div>
                        <div class="value-card">
                            <span class="value-icon">🤝</span>
                            <h4>Comunidad</h4>
                            <p>Creemos en la fuerza de trabajar juntos, compartiendo conocimiento y experiencias.</p>
                        </div>
                        <div class="value-card">
                            <span class="value-icon">✨</span>
                            <h4>Excelencia</h4>
                            <p>Cada detalle, cada servicio, cada interacción refleja nuestro compromiso con la calidad.</p>
                        </div>
                        <div class="value-card">
                            <span class="value-icon">🎯</span>
                            <h4>Accesibilidad</h4>
                            <p>Creemos que el éxito debe estar al alcance de todos, sin importar tu presupuesto.</p>
                        </div>
                    </div>

                    <div class="about-text-block">
                        <h3>¿Por Qué Coteknia?</h3>
                        <p>Porque no queremos que busques en diez lugares diferentes lo que nosotros te ofrecemos en uno. Aquí encontrarás:</p>
                        <ul class="about-list">
                            <li>✅ Equipamiento tecnológico de última generación</li>
                            <li>✅ Papelería y suministros de calidad premium</li>
                            <li>✅ Espacios diseñados para la productividad</li>
                            <li>✅ Comunidad de emprendedores y profesionales</li>
                            <li>✅ Soporte y asesoramiento personalizado</li>
                        </ul>
                    </div>

                    <div class="about-cta">
                        <h3>Eres Parte de Esto</h3>
                        <p>Cada cliente, cada coworker, cada visitante es parte de la historia de Coteknia. Nos impulsan tus ideas, tus sueños y tu determinación de crecer.</p>
                        <p>Si buscas un lugar donde tu potencial se multiplique, donde tu creatividad encuentre las herramientas que necesita y donde la colaboración es más que una palabra... <strong>bienvenido a casa.</strong></p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary">Visítanos Hoy</button>
                            <button class="btn btn-secondary">Saber Más</button>
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
