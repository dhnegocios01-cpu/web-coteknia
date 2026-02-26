export class Header {
    constructor() {
        this.headerElement = document.getElementById('header');
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.headerElement.innerHTML = `
            <div class="header-wrapper">
                <div class="container header-container">
                    <div class="logo">
                        <img src="assets/logo.png" alt="Coteknia Logo" class="logo-img">
                    </div>
                    <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
                    <nav id="navigation">
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="servicios.html">Servicios</a></li>
                            <li><a href="sobre-nosotros.html">Sobre Nosotros</a></li>
                            <li><a href="#contacto">Contacto</a></li>
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
                });
            });
        }

        // Cerrar menú al hacer scroll
        window.addEventListener('scroll', () => {
            navigation.classList.remove('active');
        });
    }
}
