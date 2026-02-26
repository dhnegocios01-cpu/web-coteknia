// Importar componentes modulares ES6
import { Header } from '../components/Header.js';
import { AboutUs } from '../components/AboutUs.js';
import { Footer } from '../components/Footer.js';

// Inicializar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Crear instancias de los componentes
    new Header();
    new AboutUs();
    new Footer();

    console.log('✅ Página Sobre Nosotros cargada correctamente');
});
