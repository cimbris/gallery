export default class View{
    constructor(){

        // this.render(arrData);

    }
    elements = {
        searchInput: document.querySelector('.form__search'),
        galleryList: document.querySelector('.gallery__row'),
        form: document.querySelector('.form'),
        galleryItem: document.querySelectorAll('.gallery__item'),
    }

    render(arrData){
        // вывод массива помле загрузки страницы
        console.log(arrData);
    }
}