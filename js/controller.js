import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View();

// в переменную сразу сохраняю значение инпута после загрузки страницы
// само значение установлено в html через value
const basicValue = view.elements.searchInput.value;


// немного видоизменённая функция
// изучи, вникни
const startGallery = async (e) => {

    e.preventDefault();

    const searchValue = view.elements.searchInput.value.trim();

    if (searchValue.length > 0) {

        const arrData = await model.getData(searchValue);

        view.render(arrData);

    }
}

// вызываю рендер с данными из модели сразу после загрузки страницы
view.render(await model.getData(basicValue));

// слушаю отправку формы 
view.elements.form.addEventListener('submit',startGallery);

view.elements.presetBtn.forEach((button)=>{
    button.addEventListener('click', () => {
        view.elements.searchInput.value = button.dataset.value;
        view.render(await model.getData(basicValue));
    })
})