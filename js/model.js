export default class Model{
    constructor(){
        this.getData('dogs');
    }

    gallery = document.querySelectorAll('.gallery__item img')

    async getData(value, gallery){
        if (value) {
            const call = await fetch (`https://api.unsplash.com/search/photos?client_id=tb5TNV1Mvr9vZ38H9yMUeGSdT99veRViEHBwOuBScrI&query=${value}&per_page=12&orientation=portrait`)
            let answer = await call.json();
            let result = answer.results;
            // return result;
            for(let i = 0; i < result.length; i++){
                // console.log(result[i].urls.regular);
                // console.log(this.gallery);
                for(let k = 0; k < this.gallery.length; k++){
                    // this.gallery[k].src = result[i];
                    console.log(this.gallery[k]);
                }
            }
        }
    }

}