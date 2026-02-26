// Importar componentes modulares ES6
import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero.js';
import { Services } from '../components/Services.js';
import { Footer } from '../components/Footer.js';

// Inicializar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Crear instancias de los componentes
    new Header();
    new Hero();
    new Services();
    new Footer();

    console.log('✅ Coteknia cargado correctamente');
});
