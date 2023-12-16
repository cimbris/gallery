export default class View{
    constructor(){

    }
    elements = {
        searchInput : document.querySelector('.form__search'),
        galleryList: document.querySelector('.gallery__row'),
        form: document.querySelector('.form'),
        galleryItem: document.querySelectorAll('.gallery__item'),
    }
    // получает массив из модели, пробегается по нему циклом и каждую итерацию создает карточку
    // render(arrData){
    //     console.log(arrData);
    // }
}