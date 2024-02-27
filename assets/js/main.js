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

//aggiungo delle variabili per i pulsanti next e prev
const nextElement = document.querySelector('#next');
const prevElement = document.querySelector('#prev');


/* console.log(slides, imgActive, slidesElement);
 */


//inserisco un ciclo for per scorrere nelle img
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

//inserisco un markup per selezionare le img e dargli la class active 
    let slideMarkup = `<img class="${i === imgActive ? 'active' : ''}" src="./assets/img/${slide}" alt="">`;
    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup);
}


/* console.log(nextElement, prevElement); */


//aggiungo un funzione ai pulsanti next e prev tramite un click
nextElement.addEventListener('click', function() {
    console.log('vai avanti');

    // dico al programma di passare la class active alla prossima img    
    imgActive++

    const imgCurrent = document.querySelector('img.active');


    //rimuovo la class active all img
    imgCurrent.classList.remove('active')

    // Aggiungi la classe 'active' all'immagine successiva
    const allImg = document.querySelectorAll('.container-img img');
    allImg[imgActive].classList.add('active');
    

})

prevElement.addEventListener('click', function() {
    console.log('vai indietro');

    
})