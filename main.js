const scrollBlock = document.querySelector('.feedback__comments')
const scrollLeftButton = document.querySelector('.feedback__button_back')
const scrollRightButton = document.querySelector('.feedback__button_next')
const menuBurger = document.querySelector('.header')
const menuButton = document.querySelector('.menu__button')

function scrollLeft(){
    scrollBlock.scrollLeft -= 100;
}

function scrollRight() {
    scrollBlock.scrollLeft += 100;
}

scrollLeftButton.addEventListener('click', scrollLeft)
scrollRightButton.addEventListener('click', scrollRight)

//Scroll block
document.querySelector('#menu').addEventListener('change', function(e){
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
})
