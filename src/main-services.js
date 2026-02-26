// Importar componentes modulares ES6
import { Header } from '../components/Header.js';
import { Services } from '../components/Services.js';
import { Footer } from '../components/Footer.js';

// Inicializar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Header();
    new Services();
    new Footer();
    console.log('✅ Página Servicios cargada correctamente');
});
