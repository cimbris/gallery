import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();

view.elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (view.elements.searchInput.value.trim().length > 0) {
        const arrData = model.getData(view.elements.searchInput.value,view.elements.galleryItem);
        // view.render(arrData);
    }
})
