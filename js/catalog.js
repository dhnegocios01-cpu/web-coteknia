const buildStorageKey = (categoryKey) => `coteknia_catalog_${categoryKey}`;

const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('No se pudo leer la imagen.'));
    reader.readAsDataURL(file);
});

const sanitizeText = (value) => value.trim();

const createProductCard = (item, index, onRemove) => {
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

    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = item.price;

    info.appendChild(title);
    info.appendChild(price);

    if (item.description) {
        const description = document.createElement('p');
        description.className = 'product-description';
        description.textContent = item.description;
        info.appendChild(description);
    }

    const actions = document.createElement('div');
    actions.className = 'product-actions';

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'product-remove';
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => onRemove(index));

    actions.appendChild(removeButton);
    info.appendChild(actions);

    card.appendChild(image);
    card.appendChild(info);

    return card;
};

export const initCatalog = (categoryKey) => {
    const form = document.getElementById('catalogForm');
    const grid = document.getElementById('catalogGrid');
    const error = document.getElementById('catalogError');

    if (!form || !grid || !error) {
        return;
    }

    const storageKey = buildStorageKey(categoryKey);
    let items = [];

    const loadItems = () => {
        const raw = localStorage.getItem(storageKey);
        if (!raw) {
            items = [];
            return;
        }

        try {
            items = JSON.parse(raw) || [];
        } catch (err) {
            items = [];
        }
    };

    const saveItems = () => {
        localStorage.setItem(storageKey, JSON.stringify(items));
    };

    const renderItems = () => {
        grid.innerHTML = '';
        if (!items.length) {
            const empty = document.createElement('p');
            empty.className = 'product-description';
            empty.textContent = 'No hay productos cargados aun.';
            grid.appendChild(empty);
            return;
        }

        items.forEach((item, index) => {
            const card = createProductCard(item, index, handleRemove);
            grid.appendChild(card);
        });
    };

    const handleRemove = (index) => {
        items.splice(index, 1);
        saveItems();
        renderItems();
    };

    loadItems();
    renderItems();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        error.textContent = '';

        const name = sanitizeText(form.querySelector('#productName').value);
        const price = sanitizeText(form.querySelector('#productPrice').value);
        const description = sanitizeText(form.querySelector('#productDescription').value);
        const imageUrl = sanitizeText(form.querySelector('#productImageUrl').value);
        const imageFile = form.querySelector('#productImageFile').files[0];

        if (!name || !price) {
            error.textContent = 'Completa el nombre y el precio.';
            return;
        }

        if (!imageUrl && !imageFile) {
            error.textContent = 'Agrega una foto por URL o desde tu equipo.';
            return;
        }

        let image = imageUrl;
        if (!image && imageFile) {
            try {
                image = await readFileAsDataUrl(imageFile);
            } catch (err) {
                error.textContent = 'No se pudo cargar la imagen.';
                return;
            }
        }

        items.unshift({
            name,
            price,
            description,
            image
        });

        saveItems();
        renderItems();
        form.reset();
    });
};
