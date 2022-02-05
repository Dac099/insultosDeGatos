import "../scss/main.scss";

const catImageUrl = 'https://cataas.com/cat';
const insulrUrl = 'https://evilinsult.com/generate_insult.php?lang=es&type=json';

//Objeto que determine el estado de todas mis condiciones para agregar datos a la URL
//Actualizar el objeto cada que se cambie el valor de mis input

const metaCat = {
    insult : 'Hola',
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
const insultInputtext = document.querySelector('.insult-text');
const randomInsultOption = document.querySelector('#textOption');
const textSizeInput = document.querySelector('.tickmarksRange');
const colorTextInput = document.querySelector('.text-card__color-select');
const imageMediaInput = document.querySelector('.image-card__imagen');
const gifMediaInput = document.querySelector('.image-card__gif');
const filterMediaInput = document.querySelector('.filters-input');

