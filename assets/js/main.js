console.log('Funziona');


//ho inserito un array per le img
const imgSlide = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]



const imgActive = 0

const slideElement = document.querySelector('.container-img')

console.log(imgSlide, imgActive, slideElement);



//inserisco un ciclo for per scorrere nelle img

for(let i = 0 ; i < imgSlide.leght ; i++) {
    const slide = imgSlide[i];
    console.log('slide');


//inserisco un markup per selezionare le img dopo 
    const slideMarkup = `<img class="${i === imgActive ? 'active' : ''}" src="./assets/img/${slide}" alt="">`

    console.log('slideMarkup');

}