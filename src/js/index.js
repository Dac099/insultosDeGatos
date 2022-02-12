import "../scss/main.scss";

//Objeto que determine el estado de todas mis condiciones para agregar datos a la URL
//Actualizar el objeto cada que se cambie el valor de mis input

const metaDataCat = {
    insult : 'Huevos',
    textSize: '20',
    textColor: 'white',
    gifOrImage: 'gif',
    filterType: ''
};

/**
 * Leer el valor de mis input
 * Para valores que apliquen en la imagen, agregarlos a la URL
 * Para valores que apliquen al insulto, agregarlos a la URL
 * 
 * Llamar la URL de insulto en caso de que se active la opcion de insulto aleatorio
 */

const catMediaContainer = document.querySelector('.hero__media-cat');
const mediaBtnRequest = document.querySelector('.hero__btn-cat');
const insultInputText = document.querySelector('.insult-text');
const textSizeInput = document.querySelector('.tickmarksRange');
const colorTextInput = document.querySelector('#text-card__color-select');
const imageMediaInput = document.querySelector('#image-card__imagen');
const gifMediaInput = document.querySelector('#image-card__gif');
const filterMediaInput = document.querySelector('.filters-input');

inputValuesListeners();

//Primero: leer los elementos correspondientes a la URl del insulto y llamarla
function inputValuesListeners(){
    mediaBtnRequest.addEventListener('click', () => {
        if(catMediaContainer.firstChild != null){
            const imgCat = catMediaContainer.firstChild;
            catMediaContainer.removeChild(imgCat);
            generateMediaCat();
        }else{
            generateMediaCat();
        }
    });

    insultInputText.addEventListener('change', () => {
        let textInsult = insultInputText.value;
        let wordsInsult = textInsult.split(' ');
        
        if(wordsInsult.lenght > 1){
            textInsult = wordsInsult.join('%20');
        }

        updateDataCat('insult', textInsult);
    });

    textSizeInput.addEventListener('change', () => {
        const textSize = textSizeInput.value;
        updateDataCat('textSize', textSize);
    });

    colorTextInput.addEventListener('change', () => {
        const textColor = colorTextInput.value;
        updateDataCat('textColor', textColor);
    });

    imageMediaInput.addEventListener('change', () => {
        updateDataCat('gifOrImage', 'img');
    });

    gifMediaInput.addEventListener('change', () => {
        updateDataCat('gifOrImage', 'gif');
    });

    filterMediaInput.addEventListener('change', () => {
        const filterType = filterMediaInput.value;
        updateDataCat('filterType', filterType);
    });

}
//Construir la URL de cataas y llamarla para reconstruir el HTML y actualizar la imagen

//CrearFunciones que se llaman en los listeners
function updateDataCat(propertieName, propertieValue){
    //Modificar objeto metaDataCat
    metaDataCat[propertieName] = propertieValue;
}

function generateMediaCat(){
    //generate URL
    const catImageUrl = filterDataCat();
    console.log(catImageUrl);
    const imgElement = document.createElement('img');
    imgElement.src = catImageUrl;
    imgElement.classList.add('hero__img-cat');
    catMediaContainer.append(imgElement);   
}

//https://cataas.com/cat/gif/says/Hello?filter=sepia&color=orange&size=40&type=or
function filterDataCat(){

    //Cosas que hacer despues para mejorar la APP
        //Ofrecer la opcion de editar el mismo gato o buscar uno nuevo
        //Hacer la peticion en JSON para extraer el id del gato
        //Si eligen el mismo gato:
            //Despues construir la URL con los parametros de metaDataCat y la URL
        //Si no, regresar al primer paso

    const {insult, textSize, textColor, gifOrImage, filterType} = metaDataCat;
    let baseUrl;

    if(gifOrImage === 'gif'){
        if(filterType != ''){
            baseUrl = `https://cataas.com/cat/gif/says/${insult}?color=${textColor}&size=${textSize}&type=or&filter=${filterType}`;
        }else{
            baseUrl = `https://cataas.com/cat/gif/says/${insult}?color=${textColor}&size=${textSize}&type=or`;
        }
    }else{
        if(filterType != ''){
            baseUrl = `https://cataas.com/cat/says/${insult}?color=${textColor}&size=${textSize}&type=or&filter=${filterType}`;
        }else{
            baseUrl = `https://cataas.com/cat/says/${insult}?color=${textColor}&size=${textSize}&type=or`;
        }
    }
    
    return baseUrl;
}