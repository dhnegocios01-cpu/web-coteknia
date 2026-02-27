export class Services {
    constructor() {
        this.servicesElement = document.getElementById('services');
        if (!this.servicesElement) return;
        
        this.servicesData = [
            {
                title: 'Papelería y material de oficina',
                icon: '📝',
                items: [
                    'Útiles escolares',
                    'Material administrativo',
                    'Insumos creativos',
                    'Material gastable para negocios'
                ]
            },
            {
                title: 'Servicios de impresión y acabado',
                icon: '🖨️',
                items: [
                    'Copias e impresiones B/N y a color',
                    'Encuadernación',
                    'Plastificación',
                    'Escaneo y digitalización',
                    'Impresión fotográfica'
                ]
            },
            {
                title: 'Soluciones digitales y tecnología',
                icon: '💻',
                items: [
                    'Envío e impresión de documentos por WhatsApp o correo',
                    'Digitalización de documentos',
                    'Soporte básico en trámites digitales',
                    'Instalación de Software',
                    'Mantenimiento y reparación de computadoras'
                ]
            },
            {
                title: 'Suministro de material gastable',
                icon: '📦',
                items: [
                    'Reposición programada',
                    'Entregas en la zona'
                ]
            }
        ];
        this.render();
    }

    render() {
        const servicesHTML = this.servicesData.map((service, index) => `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <ul class="service-list">
                    ${service.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');

        this.servicesElement.innerHTML = `
            <div class="container" style="padding-top: 120px;">
                <div class="services-header">
                    <h2>SERVICIOS QUE OFRECEMOS</h2>
                    <p>Soluciones prácticas y accesibles para estudiantes, profesionales, emprendedores y negocios</p>
                </div>
                <div class="services-grid">
                    ${servicesHTML}
                </div>
            </div>
        `;
    }
}
