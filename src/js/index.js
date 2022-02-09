import "../scss/main.scss";

const catImageUrl = 'https://cataas.com/cat';
const insultUrl = 'https://evilinsult.com/generate_insult.php?lang=es&type=json';

//Objeto que determine el estado de todas mis condiciones para agregar datos a la URL
//Actualizar el objeto cada que se cambie el valor de mis input

const metaDataCat = {
    insult : 'Huevos',
    textSize: 20,
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
const randomInsultOption = document.querySelector('#textOption');
const textSizeInput = document.querySelector('.tickmarksRange');
const colorTextInput = document.querySelector('#colors');
const imageMediaInput = document.querySelector('#image-card__imagen');
const gifMediaInput = document.querySelector('#image-card__gif');
const filterMediaInput = document.querySelector('#filters');

//Primero: leer los elementos correspondientes a la URl del insulto y llamarla
function inputValuesListeners(){
    mediaBtnRequest.addEventListener('click', generateMediaCat);

    insultInputText.addEventListener('change', () => {
        const textInsult = insultInputText.value;
        updateDataCat('insult', textInsult);
    });

    randomInsultOption.addEventListener('change', () => {
        //Llamar a la API para extraer el insulto
        const randomInsult = getRandomInsult(insultUrl);
        updateDataCat('insult', randomInsult);   
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

    //CrearFunciones que se llaman en los listeners
    //Construir la URL de cataas y llamarla para reconstruir el HTML y actualizar la imagen
}