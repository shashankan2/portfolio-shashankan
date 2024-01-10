let typed = new Typed('.autoinput',{
    strings: ['Basic Front-end Developer',' PHP Developer', 'C Programmer','Python Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});

let navLinks = document.querySelectorAll('nav ul li a');

let sections = document.querySelectorAll('section');

window.addEventListener('scroll' , function(){
    const scrollPos = window.scrollY + 100
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});


let sliderContainer = document.querySelector('.fileupload');
let slider = document.querySelector('.cardslider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 3;
if (document.body.clientWidth < 500) {
    elementsToShow = 1;
}else if(document.body.clientWidth < 900){
    elementsToShow = 2;
}

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = cards.length*cardWidth+'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '2s';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';
    
}
function prev(){
    console.log(Math.round((+slider.style.marginLeft.slice(0,-2))))
    if(Math.round((+slider.style.marginLeft.slice(0,-2)))!=0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';
}


function next(){
    console.log(Math.round(+slider.style.marginLeft.slice(0,-2)) )
    console.log(Math.round(cardWidth*(cards.length-elementsToShow)))
    if(Math.round(+slider.style.marginLeft.slice(0,-2)) != -Math.round(cardWidth*(cards.length-elementsToShow)))
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}