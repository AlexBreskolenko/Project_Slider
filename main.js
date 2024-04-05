//Массив наших картинок
let images = [
  {
    url: "img/img_1.png",
  },
  {
    url: "img/img_2.png",
    cityOne: "Sochi",
    cityTwo: "Thieves",
    apartmetn: "105 m2",
    repair: "4 months",
  },
  {
    url: "img/img_3.png",
    cityOne: "Rostov-on-Don",
    cityTwo: "Patriotic",
    apartmetn: "93 m2",
    repair: "3 months",
  },
];

let arrText = [
  "ROSTOV-ON-DON,ADMIRAL",
  "SOCHI THIEVES",
  "ROSTOV-ON-DON PATRIOTIC",
];

//текущий индекс элемента
let currentIndex = 0;

function initSlider() {
  //Проверяем существует ли массив и есть ли в нем значения
  //если нет выходим их функции
  if (!images || !images.length) return;

  //*******************Пишем функцию для вставки картинки перебираем массив
  // и вставляем все три картинки в класс section-two__picture
  //Переменная для вставки картинки
  let sliderImages = document.querySelector(".section-two__picture");
  function initImages() {
    //Перебираем массив
    images.forEach((image, index) => {
      //Создаём новых три класса класс image класс n с индексом элемента
      let imageDiv = `<div class = 'image n${index} ${
        //класс active если это превый элемент массива если нет но ничего не создаём
        index === 0 ? "active" : ""
      }' style ='background-image: url(${
        images[index].url
        //И новый атрибут data-index
      });' data-index = '${index}'></div>`;
      //Вставляем картинки из массива
      sliderImages.innerHTML += imageDiv;
    });
  }
  //Вызываем функцию для вставки изображения из массива
  initImages();

  //***************Функция для обработчика стрелок для картинок
  //Делаем переменную для стрелок DOM для родительского класса
  let sliderArrows = document.querySelector(".section-one__box-three");
  function initArrows() {
    //Ищем в родительском элементе дочерние и перебираем массив вешая обработчик события
    sliderArrows.querySelectorAll(".box-three__arrow").forEach((arrow) => {
      //Вешаем обработчик на каждую стрелку
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  //Вызываем функцию для стрелок
  initArrows();

  //********************Функция для точек
  //Инициализация переменной DOM для точек
  let sliderDots = document.querySelector(".section-one__dots");
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class = 'section-one__dots_item n${index} ${
        index === 0 ? "active" : ""
      }' data-index = '${index}'</div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots
      .querySelectorAll(".section-one__dots_item")
      .forEach((dot, index) => {
        dot.addEventListener("click", function () {
          moveSlider(index);
        });
      });
  }
  //Вызываем функцию initDots
  initDots();

  //*************Функция для переключения по навигации
  let sliderNav = document.querySelector(".section__two_nav");
  function initNav() {
    sliderNav.querySelectorAll(".nav__item").forEach((item, index) => {
      item.addEventListener("click", function () {
        moveSlider(index);
      });
    });
  }

  initNav();
  //*************Функция принимает номер слайдера и переключает его с помощью active
  function moveSlider(num) {
    currentIndex = num;
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderNav.querySelector(".active").classList.remove("active");
    sliderNav.querySelector(".n" + num).classList.add("active");
  }
}

//Обработчик событий который вызывает функцию после прогрузки страницы
document.addEventListener("DOMContentLoaded", () => initSlider());
