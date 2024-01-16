export default class View{
    constructor(){

        // this.render(arrData);

    }
    elements = {
        searchInput: document.querySelector('.form__search'),
        galleryList: document.querySelector('.gallery__row'),
        form: document.querySelector('.form'),
        galleryItem: document.querySelectorAll('.gallery__item'),
        presetBtn: document.querySelectorAll('.preset-btn'),
        burger: document.querySelector('.burger'),
        mobileMenu: document.querySelector('.header__menu'),
    }

    render(arrData){
        
        // вывод массива помле загрузки страницы
        this.clearRender(this.elements.galleryItem)   
        console.log(this.elements.galleryItem);
        for(let i = 0; i < arrData.length; i++){
        
            const newPic = `
            <div class="gallery__item"><img src="${arrData[i].urls.regular}" alt=""></div>

            `
            this.elements.galleryList.insertAdjacentHTML('afterbegin', newPic)
        }
        
    }

    clearRender(cards){        
        
        for(let i = 0; i < cards.length; i++){
            cards[i].remove()
        }
    }

    burgerActive(){
        this.elements.burger.classList.toggle('active');
    }
    mobileMenuActive(){
        this.elements.mobileMenu.classList.toggle('active');
    }
}

