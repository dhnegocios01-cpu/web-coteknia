export class Header {
    constructor() {
        this.headerElement = document.getElementById('header');
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isActive = (page) => currentPage === page || (currentPage === '' && page === 'index.html') ? 'active' : '';

        this.headerElement.innerHTML = `
            <div class="header-wrapper">
                <div class="container header-container">
                    <div class="logo">
                        <img src="assets/logo.png" alt="Coteknia Logo" class="logo-img">
                    </div>
                    <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
                    <nav id="navigation">
                        <ul>
                            <li><a href="index.html" class="${isActive('index.html')}">Inicio</a></li>
                            <li class="has-dropdown">
                                <button class="dropdown-toggle" type="button" aria-expanded="false">
                                    Departamentos
                                    <span class="dropdown-icon" aria-hidden="true">▾</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a href="departamento-arte-dibujo.html">Arte/Dibujo</a></li>
                                    <li><a href="departamento-escolar.html">Escolar</a></li>
                                    <li><a href="departamento-manualidades.html">Manualidades</a></li>
                                    <li><a href="departamento-mobiliario.html">Mobiliario</a></li>
                                    <li><a href="departamento-oficina.html">Oficina</a></li>
                                    <li><a href="departamento-tecnologia.html">Tecnologia</a></li>
                                </ul>
                            </li>
                            <li><a href="servicios.html" class="${isActive('servicios.html')}">Servicios</a></li>
                            <li><a href="sobre-nosotros.html" class="${isActive('sobre-nosotros.html')}">Sobre Nosotros</a></li>
                            <li><a href="contacto.html" class="${isActive('contacto.html')}">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navigation = document.getElementById('navigation');

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                navigation.classList.toggle('active');
            });

            // Cerrar menú al hacer click en un enlace
            const navLinks = navigation.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navigation.classList.remove('active');
                    this.closeDropdowns();
                });
            });
        }

        const dropdownToggles = navigation.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (event) => {
                event.preventDefault();
                const parent = toggle.closest('.has-dropdown');
                const isOpen = parent.classList.contains('open');

                this.closeDropdowns();
                parent.classList.toggle('open', !isOpen);
                toggle.setAttribute('aria-expanded', String(!isOpen));
            });
        });

        // Cerrar menú al hacer scroll
        window.addEventListener('scroll', () => {
            navigation.classList.remove('active');
            this.closeDropdowns();
        });
    }

    closeDropdowns() {
        const openDropdowns = this.headerElement.querySelectorAll('.has-dropdown.open');
        openDropdowns.forEach(dropdown => {
            dropdown.classList.remove('open');
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}
