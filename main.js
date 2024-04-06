let images = [
  {
    url: "img/img_1.png",
    cityOne: "Rostov-on-Don",
    cityTwo: "LCD admiral",
    apartmetn: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
  },
  {
    url: "img/img_2.png",
    cityOne: "Sochi",
    cityTwo: "Thieves",
    apartmetn: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
  },
  {
    url: "img/img_3.png",
    cityOne: "Rostov-on-Don",
    cityTwo: "Patriotic",
    apartmetn: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
  },
];

let arrText = [
  "ROSTOV-ON-DON,ADMIRAL",
  "SOCHI THIEVES",
  "ROSTOV-ON-DON PATRIOTIC",
];

function initSlider() {
  if (!images || !images.length) return;
  //****************************Переменные для элементов ***************************
  let sliderImages = document.querySelector(".section-two__picture");
  let sliderArrows = document.querySelector(".section-one__box-three");
  let sliderDots = document.querySelector(".section-one__dots");
  let sliderNavigation = document.querySelector(".section-two__nav");
  let textCityOne = document.querySelector(".cityOne");
  let textCityTwo = document.querySelector(".cityTwo");
  let textRepairTime = document.querySelector(".repairTime");
  let textApartment = document.querySelector(".apartment");
  let textRepairCost = document.querySelector(".repairCost");
  //***************************** Функции*******************************************
  //Функция для массава с картинками и текстом
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class = 'image n${index} ${
        index === 0 ? "active" : ""
      }' style ='background-image: url(${
        images[index].url
      });' data-index = '${index}'></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  //Функция для стрелок
  function initArrows() {
    sliderArrows.querySelectorAll(".box-three__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
        nextText(nextNumber);
      });
    });
  }
  //Функция для точек
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class = 'section-one__dots_item n${index} ${
        index === 0 ? "active" : ""
      }' ></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots
      .querySelectorAll(".section-one__dots_item")
      .forEach((dot, index) => {
        dot.addEventListener("click", function () {
          moveSlider(index);
          nextText(index);
        });
      });
  }
  //Функция для навигации
  function initNavigation() {
    images.forEach((image, index) => {
      let text = `<span class = 'section-two__nav_item n${index} ${
        index === 0 ? "switch" : ""
      }'>${arrText[index]}</span>`;
      sliderNavigation.innerHTML += text;
    });
    sliderNavigation
      .querySelectorAll(".section-two__nav_item")
      .forEach((elem, index) => {
        elem.addEventListener("click", () => {
          moveSlider(index);
          nextText(index);
        });
      });
  }
  //Функция для переключения active
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderNavigation.querySelector(".switch").classList.remove("switch");
    sliderNavigation.querySelector(".n" + num).classList.add("switch");
  }
  //Функция для переключения текста
  function nextText(ind) {
    textCityOne.innerText = images[ind].cityOne;
    textCityTwo.innerText = images[ind].cityTwo;
    textRepairTime.innerText = images[ind].repairTime;
    textRepairCost.innerText = images[ind].repairCost;
    textApartment.innerText = images[ind].apartmetn;
  }
  //********************************Вызов функций******************************
  initImages();
  initNavigation();
  initDots();
  initArrows();
}

//Обработчик событий который вызывает функцию после прогрузки страницы
document.addEventListener("DOMContentLoaded", () => initSlider());
