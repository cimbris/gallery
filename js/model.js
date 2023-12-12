export default class Model{
    constructor(){
        // this.getData(value);
    }

    async getData(value){
        if (value) {
            const call = await fetch (`https://api.unsplash.com/search/photos?client_id=tb5TNV1Mvr9vZ38H9yMUeGSdT99veRViEHBwOuBScrI&query=${value}&per_page=12&orientation=portrait`)
            let answer = await call.json();
            let result = answer.results;
            console.log(result);
        }
    }

}