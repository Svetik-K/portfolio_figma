const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
  

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__navigation");
const navLink = document.querySelectorAll(".navigation__link");

hamburger.addEventListener('click', mobileMenu);

navLink.forEach((link) => link.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
}

function closeMenu() {
  hamburger.classList.remove("active");
	navMenu.classList.remove("open");   
}

// Change images
const portfolioImgs = document.querySelectorAll('.image-example');
const portfolioBtn = document.querySelectorAll('.portfolio-button');

portfolioBtn.forEach(button => button.addEventListener('click', changeImage));
portfolioBtn.forEach(button => button.addEventListener('click', changeClassActive));

function changeImage(e) {    
    if(e.target.classList.contains('portfolio-button')) {
        const season = this.dataset.season;
        portfolioImgs.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}

function changeClassActive() {
    portfolioBtn.forEach((button) => button.classList.remove("active"));
    this.classList.add("active");
}

// Перевод страницы

const languages = document.querySelector('.switch-lang');
const lengthsChanges = [document.querySelector('.skills-title'), document.querySelector('.portfolio-title')];

languages.addEventListener('click', changeLanguage);

function changeLanguage(e) {
	if (e.target.dataset.lang) {
		language = e.target.dataset.lang;
		getTranslate(language);
    changeClassActiveLanguage();
	}
}

function getTranslate(lang) {
  const dataForTranslation = document.querySelectorAll('[data-i18]');
  dataForTranslation.forEach((item) => item.textContent = i18Obj[lang][item.dataset.i18]);
  changeClassActiveLanguage();
}

function changeClassActiveLanguage() {
  document.querySelector('.lang-item active').classList.remove("active");
  this.classList.add("active");
}

function setLocalStorage() {
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('language')) {
    let language = localStorage.getItem('language');
    getTranslate(language);
  }
}
window.addEventListener('load', getLocalStorage);

// Light theme
const itemsForChange = [document.querySelector('.skills'),
document.querySelector('.portfolio'),
document.querySelector('.video'),
document.querySelector('.price'),
document.querySelector('.skills-title'),
document.querySelector('.portfolio-title'),
document.querySelector('.video-title'),
document.querySelector('.price-title'),
// document.querySelector('.header-nav')
];
const navLinks = document.querySelectorAll('.nav-link');
const priceTitles = document.querySelectorAll('.prices-title');
const priceDetails = document.querySelectorAll('.detail');
const themeSwitch = document.querySelector('.theme-switch');
const wrappers = document.querySelectorAll('.wrapper');
const titleWraps = document.querySelectorAll('.title-wrapper');
const moon = document.querySelector('.night');
const sun = document.querySelector('.day');

let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark' ;

themeSwitch.addEventListener('click', lightTheme);

moon.addEventListener('click', function(e) {
  moon.style.display = "none";
  sun.style.display = "block";
  e.preventDefault();
});

sun.addEventListener('click', function(e) {
  sun.style.display = "none";
  moon.style.display = "block";
  e.preventDefault();
});


function lightTheme() {
  wrappers.forEach(item => item.classList.toggle('light-theme'));
  titleWraps.forEach(item => item.classList.toggle('light-theme'));
  priceTitles.forEach(item => item.classList.toggle('light-theme'));
  priceDetails.forEach(item => item.classList.toggle('light-theme'));
  itemsForChange.forEach(item => item.classList.toggle('light-theme'));
  portfolioBtn.forEach(button => button.classList.toggle('light-theme'));
  // navLinks.forEach(button => button.classList.toggle('light-theme'));
 
}

function setStorageTheme() {
  localStorage.setItem('theme', theme);
};

function getStorageTheme() {
  if(localStorage.getItem('theme') === 'light') {
    lightTheme();
    sun.style.display = "none";
    moon.style.display = "block";
  }
};