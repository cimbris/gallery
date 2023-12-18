export default class View{
    constructor(){

        // this.render(arrData);

    }
    elements = {
        searchInput: document.querySelector('.form__search'),
        galleryList: document.querySelector('.gallery__row'),
        form: document.querySelector('.form'),
        galleryItem: document.querySelectorAll('.gallery__item'),
        presetBtn: document.querySelectorAll('.preset-btn')
    }

    render(arrData){
        // вывод массива помле загрузки страницы
        
        for(let i = 0; i < arrData.length; i++){
            console.log(arrData[i].urls.regular);
        
            const newPic = `
            <div class="gallery__item"><img src="${arrData[i].urls.regular}" alt=""></div>

            `
            this.elements.galleryList.insertAdjacentHTML('afterbegin', newPic)
        }
        
    }

    
}

