export default class Model{
    constructor(){

    }

    gallery = document.querySelectorAll('.gallery__item img')

    // запрос к серверу
    // добавлена обработка ошибок
    // ничего сверхнового, по сути тот же иф елс - но для ассинхронки
    // https://learn.javascript.ru/try-catch - почитай

    async getData(value){

        try {
            
            if (value) {
                const call = await fetch (`https://api.unsplash.com/search/photos?client_id=tb5TNV1Mvr9vZ38H9yMUeGSdT99veRViEHBwOuBScrI&query=${value}&per_page=12&orientation=portrait`)
                let answer = await call.json();
    
                if (call.ok) {
                    let result = answer.results;
                    return result;
                } else {
                    throw new Error(`Error: ${call.status}`);
                }
            }

        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    }

}