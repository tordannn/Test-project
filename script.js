// ЗАПУСКАЕМ ЭКРАН ЗАГРУЗКИ

let reloadPage = document.querySelector(".reload-page");
setTimeout(() =>{reloadPage.style.display = "none";}, 400);

//ОПРЕДЕЛЯЕМ ШИРИНУ И ВЫСОТУ БРАУЗЕРА. ВЫСОТУ УСТАНАВЛИВАЕМ СЕЙЧАС ШИРИНА ПРИГОДИТСЯ НИЖЕ

let userDeviceHeight;
let userDeviceWidth;

function measureSize() {
    userDeviceHeight = window.innerHeight;
    userDeviceWidth = window.innerWidth;
}

measureSize();

let mainImage = document.querySelector(".block__intro-container");
mainImage.style.height = userDeviceHeight +"px";

let blocks = document.querySelectorAll(".block");
blocks = blocks.forEach(function(elem) {
    elem.style.height = userDeviceHeight + "px";
});

// СЛАЙДЕР

let slides = document.getElementsByClassName("slide");
slides = Array.prototype.slice.call(slides);

let previous = 6;
let current = 0;
let next = 1;
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");

let itemNames = document.getElementsByClassName("title__item-name");
let itemNumbers = document.getElementsByClassName("text__item-number");
itemNames = Array.prototype.slice.call(itemNames);
itemNumbers = Array.prototype.slice.call(itemNumbers);
itemNames[0].style.display = "block";
itemNumbers[0].style.display = "block";

arrowRight.onclick = function() {
    slides.forEach((elem)=>{
        elem.style.display = "none";
    })
    itemNames.forEach((elem)=>{
        elem.style.display = "none";
    })
    itemNumbers.forEach((elem)=>{
        elem.style.display = "none";
    })
    slides[next].style.display = "block";
    itemNames[next].style.display = "block";
    itemNumbers[next].style.display = "block";
    next++;
    previous++;
    if(next == slides.length) next = 0;
    if(previous == slides.length) previous = 0;
};

arrowLeft.onclick = function() {
    slides.forEach((elem)=>{
        elem.style.display = "none";
    })
    itemNames.forEach((elem)=>{
        elem.style.display = "none";
    })
    itemNumbers.forEach((elem)=>{
        elem.style.display = "none";
    })

    slides[previous].style.display = "block";
    itemNames[previous].style.display = "block";
    itemNumbers[previous].style.display = "block";
    next--;
    previous--;
    if(next == -1) next = slides.length-1;
    if(previous == -1) previous = slides.length-1;
};

//АККОРДЕОНЫ ДЛЯ ДЕВАЙСОВ МАЛОЙ ШИРИНЫ

if (userDeviceWidth < 500) {
    let featuresBoxes = document.getElementsByClassName("feature-box");
    for (let i = 0; i < featuresBoxes.length; i++) {
        featuresBoxes[i].addEventListener("click", function() {
            for (let j = 0; j < featuresBoxes.length; j++){
                if(featuresBoxes[j] !== this){
                    featuresBoxes[j].classList.remove("feature-box_active");
                    featuresBoxes[j].lastElementChild.classList.remove("feature-box__text_active");
                    featuresBoxes[j].lastElementChild.style.color = "rgba(0, 0, 0, 0)";
                } else {
                    this.classList.toggle("feature-box_active");
                    this.lastElementChild.classList.toggle("feature-box__text_active");
                    setTimeout(() => {this.lastElementChild.style.color = "rgb(0, 0, 0)"}, 100);
                }
            }
        })
    }
}

let adressBoxes = document.getElementsByClassName("adress");

if(userDeviceWidth < 1025){
    for (let i = 0; i < adressBoxes.length; i++) {
        adressBoxes[i].addEventListener("click", function() {
                this.classList.toggle("adress_active");
                this.firstElementChild.classList.toggle("title__adresses_active");
                this.lastElementChild.classList.toggle("text__email_active");
                this.lastElementChild.previousElementSibling.classList.toggle("text__adresses_active");
            })
    }
}

//ОБНОВЛЕНИЕ СТРАНИЦЫ ПОСЛЕ ЗАВЕРШЕНИЯ РЕСАЙЗА. НУЖНО ДЛЯ ПРАВИЛЬНОЙ РАБОТЫ АККОРДЕОНОВ

let timeout = false;
window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        if(this.innerWidth != userDeviceWidth) {
            location.reload();
            userDeviceWidth = this.innerWidth;
        }
    }, 200);
});

//НАВИГАЦИЯ ПО СТРАНИЦЕ

let navCircles = document.getElementsByClassName("slider-nav__circle");
navCircles = Array.prototype.slice.call(navCircles);
for (let i = 0; i < navCircles.length; i++) {
    navCircles[i].addEventListener("click", function() {
        for(let j = 0; j < navCircles.length; j++){
            navCircles[j].classList.remove("slider-nav__circle_active");
        };
        this.classList.toggle("slider-nav__circle_active");
    });
}

//

window.onscroll = function() {
    let currentPageOffset = pageYOffset;
    if(currentPageOffset <= userDeviceHeight/2) {
        navCircles.forEach((elem)=>{elem.classList.remove("slider-nav__circle_active")});
        navCircles[0].classList.add("slider-nav__circle_active");
    } else if(currentPageOffset > userDeviceHeight/2 && currentPageOffset <= userDeviceHeight * 1.5) {
        navCircles.forEach((elem)=>{elem.classList.remove("slider-nav__circle_active")});
        navCircles[1].classList.add("slider-nav__circle_active");
    } else if(currentPageOffset > userDeviceHeight*1.5 && currentPageOffset <= userDeviceHeight*2.5) {
        navCircles.forEach((elem)=>{elem.classList.remove("slider-nav__circle_active")});
        navCircles[2].classList.add("slider-nav__circle_active");
    } else if(currentPageOffset > userDeviceHeight*2.5 && currentPageOffset <= userDeviceHeight*3.5) {
        navCircles.forEach((elem)=>{elem.classList.remove("slider-nav__circle_active")});
        navCircles[3].classList.add("slider-nav__circle_active");
    } else if(currentPageOffset > userDeviceHeight*3.5 && currentPageOffset <= userDeviceHeight*4.5) {
        navCircles.forEach((elem)=>{elem.classList.remove("slider-nav__circle_active")});
        navCircles[4].classList.add("slider-nav__circle_active");
    }else if(currentPageOffset > userDeviceHeight*4.5 && currentPageOffset <= userDeviceHeight*6) {
        navCircles.forEach((elem)=>{elem.classList.remove("slider-nav__circle_active")});
        navCircles[5].classList.add("slider-nav__circle_active");
    }
}