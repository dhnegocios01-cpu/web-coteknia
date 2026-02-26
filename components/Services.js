export class Services {
    constructor() {
        this.servicesElement = document.getElementById('services');
        if (!this.servicesElement) return;
        
        this.servicesData = [
            {
                title: '💻 Tecnología',
                description: 'Equipos de última generación, internet de alta velocidad y software especializado para potenciar tu productividad.',
                icon: '💻',
                page: 'tecnologia.html'
            },
            {
                title: '📄 Papelería',
                description: 'Amplio catálogo de artículos de papelería, suministros de oficina y materiales de calidad para tus necesidades.',
                icon: '📄',
                page: 'papeleria.html'
            },
            {
                title: '🏢 Coworking',
                description: 'Espacios modernos y cómodos para trabajar, colaborar y conectar con profesionales de diferentes áreas.',
                icon: '🏢',
                page: 'coworking.html'
            }
        ];
        this.render();
    }

    render() {
        const servicesHTML = this.servicesData.map((service, index) => `
            <a href="${service.page}" class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </a>
        `).join('');

        this.servicesElement.innerHTML = `
            <div class="container">
                <div class="services-header">
                    <h2>Nuestros Servicios</h2>
                    <p>En Coteknia encontrarás todo lo que necesitas para desarrollar tu negocio o proyecto personal</p>
                </div>
                <div class="services-grid">
                    ${servicesHTML}
                </div>
            </div>
        `;
    }
}
