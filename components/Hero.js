export class Hero {
    constructor() {
        this.heroElement = document.getElementById('hero');
        this.render();
    }

    render() {
        this.heroElement.innerHTML = `
            <div class="container">
                <div class="hero-content">
                    <div class="hero-badge">✨ Tu espacio de innovación</div>
                    <h1>
                        <span class="hero-welcome">Bienvenido a</span>
                        <span class="hero-brand"><span class="brand-blue">C</span><span class="brand-green">o</span><span class="brand-blue">tekn</span><span class="brand-green">i</span><span class="brand-blue">a</span></span>
                    </h1>
                    <p class="hero-subtitle">
                        Tecnología y papelería en un solo lugar. 
                        <br>Todo lo que necesitas para trabajar, crear y crecer.
                    </p>
                    <div class="hero-buttons">
                        <button class="btn btn-light">Explorar Servicios</button>
                        <button class="btn btn-outline">Conocer Más</button>
                    </div>
                </div>
            </div>
        `;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const buttons = this.heroElement.querySelectorAll('.btn');
        buttons[0].addEventListener('click', () => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        });
    }
}
