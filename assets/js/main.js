//ho inserito un array per le img

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let imgActive = 0;

const slidesElement = document.querySelector('.container-img');

console.log(slides, imgActive, slidesElement);

//inserisco un ciclo for per scorrere nelle img
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

//inserisco un markup per selezionare le img e dargli la class active 
    let slideMarkup = `<img class="${i === imgActive ? 'active' : ''}" src="./assets/img/${slide}" alt="">`;
    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup);
}