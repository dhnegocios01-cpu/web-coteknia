const buildStorageKey = (categoryKey) => `coteknia_catalog_${categoryKey}`;

const createProductCard = (item) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    image.loading = 'lazy';

    const info = document.createElement('div');
    info.className = 'product-info';

    const title = document.createElement('h4');
    title.textContent = item.name;

    info.appendChild(title);

    if (item.description) {
        const description = document.createElement('p');
        description.className = 'product-description';
        description.textContent = item.description;
        info.appendChild(description);
    }

    card.appendChild(image);
    card.appendChild(info);

    return card;
};

export const initCatalog = (categoryKey) => {
    const grid = document.getElementById('catalogGrid');
    const searchInput = document.getElementById('searchInput');

    if (!grid) {
        return;
    }

    const storageKey = buildStorageKey(categoryKey);
    let items = [];
    let filteredItems = [];

    const loadItems = () => {
        const raw = localStorage.getItem(storageKey);
        if (!raw) {
            items = [];
            filteredItems = [];
            return;
        }

        try {
            items = JSON.parse(raw) || [];
            filteredItems = [...items];
        } catch (err) {
            items = [];
            filteredItems = [];
        }
    };

    const filterItems = (searchTerm) => {
        if (!searchTerm.trim()) {
            filteredItems = [...items];
        } else {
            const term = searchTerm.toLowerCase();
            filteredItems = items.filter(item => 
                item.name.toLowerCase().includes(term)
            );
        }
        renderItems();
    };

    const renderItems = () => {
        grid.innerHTML = '';
        if (!filteredItems.length) {
            const empty = document.createElement('p');
            empty.className = 'product-description';
            empty.textContent = items.length === 0 
                ? 'No hay productos en este departamento.' 
                : 'No se encontraron productos con ese nombre.';
            grid.appendChild(empty);
            return;
        }

        filteredItems.forEach((item) => {
            const card = createProductCard(item);
            grid.appendChild(card);
        });
    };

    loadItems();
    renderItems();

    // Agregar evento de búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterItems(e.target.value);
        });
    }
};
