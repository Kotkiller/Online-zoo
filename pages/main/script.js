//........................................................... Переменные для pop-up.....................................

const burgerIcon=document.querySelector('.burger');
const burgerMenu=document.querySelector('.burger_menu');
const burgerMenuCloseButton=document.querySelector('.burger_menu_close_button');
const burgerNav=document.querySelector('.burger_nav');
const shadow=document.querySelector('.shadow');
const body=document.querySelector('.body');

shadow.addEventListener('click', inactiv);
burgerIcon.addEventListener("click", activ);
burgerMenuCloseButton.addEventListener('click', inactiv);
// ...................................................................................................................


// ...........................................................Pop-up burger...........................................
  function  activ() {
    burgerMenu.classList.add("burger_menu_active");
    burgerNav.classList.add("burger_nav_active");
  shadow.classList.add("shadow_active");
  body.classList.add('body_overflow_hidden');
  };

  function  inactiv() {
     shadow.classList.remove("shadow_active");
  body.classList.remove('body_overflow_hidden');
  burgerMenu.classList.remove("burger_menu_active");
  burgerNav.classList.remove("burger_nav_active");
  };

// ..................................................Переменные для слайдера c животными..............................

const slider=document.querySelector('.slider');
const cardsAnimals=document.querySelectorAll('.card');

const items=document.querySelectorAll('.slides');
const leftButton=document.querySelector('.arrow_left');
const rightButton=document.querySelector('.arrow_right');
let currentItem=0;
let isEnabled=true;

leftButton.addEventListener('click', prevSlides);
rightButton.addEventListener('click', nextSlides);
// ....................................................................................................................


// ..................................................Слайдер с животными...............................................

function changeCurrentItem(n){
  currentItem=(n+items.length)%items.length
}

function hideItem(direction){
isEnabled=false;
items[currentItem].classList.add(direction)
items[currentItem].addEventListener('animationend', function(){
  this.classList.remove('active', direction)
})
}

function showItem(direction){
  items[currentItem].classList.add('next',direction)
  items[currentItem].addEventListener('animationend', function(){
    this.classList.remove('next', direction)
    this.classList.add('active')
    isEnabled=true
  })
  }

function previousItem(n){
  hideItem('to-right')
  changeCurrentItem(n-1)
  showItem('from-left')
}

function prevSlides(){
  if(isEnabled){
    previousItem(currentItem)
    }
}

function nextItem(n){
  hideItem('to-left')
  changeCurrentItem(n+1)
  showItem('from-right')
}

function nextSlides(){
  if(isEnabled){
    nextItem(currentItem)
   }
 }

// .........................................................................................................................

// .................................................Показ рандомной картинки......................................
// Массив картинок

const animals = [
  {
    id: 0,
    name: 'GIANT PANDAS',
    location: 'Native to Southwest China',
    diet: 'herbivore',
    src: '../../assets/images/pandas.svg',
  },
  {
    id: 1,
    name: 'EAGLES',
    location: 'Native to South America',
    diet: 'carnivore',
    src: '../../assets/images/eagles.svg',
  },
  {
    id: 2,
    name: 'GORILLAS',
    location: 'Native to Congo',
    diet: 'herbivore',
    src: '../../assets/images/gorilla.svg',
  },
  {
    id: 3,
    name: 'TWO-TOED SLOTH',
    location: 'Mesoamerica, South America',
    diet: 'herbivore',
    src: '../../assets/images/lenivets.svg',
  },
  {
    id: 4,
    name: 'CHEETAHS',
    location: 'Native to Africa',
    diet: 'carnivore',
    src: '../../assets/images/gepard.svg',
  },

  {
    id: 5,
    name: 'PENGUINS',
    location: 'Native to Antarctica',
    diet: 'carnivore',
    src: '../../assets/images/penguin.svg',
  },
  {
    id: 6,
    name: 'BEAR',
    location: 'Native to Southeastern U. S.',
    diet: 'carnivore',
    src: '../../assets/images/bear.jpg',
  },


  {
    id: 7,
    name: 'Elephant',
    location: 'Native to Africa',
    diet: 'herbivore',
    src: '../../assets/images/elephants.jpg',

  },
  {
    id: 8,
    name: 'Giraffe',
    location: 'Native to Africa',
    diet: 'herbivore',
    src: '../../assets/images/geeraph.jpg',
  },

  {
    id: 9,
    name: 'zebra',
    location: 'Native to Africa',
    diet: 'herbivore',
    src: '../../assets/images/zebras.jpg',
  },


  {
    id: 10,
    name: 'Lions',
    location: 'Native to Eurasia, North America',
    diet: 'carnivore',
    src: '../../assets/images/lions.jpg',
  },

  {
    id: 11,
    name: 'Rhino',
    location: 'Native to Eurasia',
    diet: 'herbivore',
    src: '../../assets/images/rhino.jpg',
  },

  {
    id: 12,
    name: 'Tigers',
    location: 'Native to Eurasia, North America',
    diet: 'carnivore',
    src: '../../assets/images/tigers.jpg',
  },

  {
    id: 13,
    name: 'Lan',
    location: 'Native to Antarctica',
    diet: 'carnivore',
    src: '../../assets/images/lan.jpg',
  },
  {
    id: 14,
    name: 'White bear',
    location: 'Native to America',
    diet: 'carnivore',
    src: '../../assets/images/white_bear.jpg',
  },
  {
    id: 15,
    name: 'Makaka',
    location: 'Native to South America',
    diet: 'carnivore',
    src: '../../assets/images/makaka.jpg',
  },
  {
    id: 16,
    name: 'Lemur',
    location: 'Native to Australia',
    diet: 'herbivore',
    src: '../../assets/images/lemur.jpg',
  },
  {
    id: 17,
    name: 'Hipo',
    location: 'Native to Africa',
    diet: 'carnivore',
    src: '../../assets/images/hipo.jpg',
  },
  {
    id: 18,
    name: 'enots',
    location: 'Native to Africa',
    diet: 'herbivore',
    src: '../../assets/images/enots.jpg',
  }
]

// // Функция отображения рандомной карточки


//.................................................. Testimonials...................................................

const humanWrapper=document.querySelector('.peoples')
const peoplesWrapper=document.querySelectorAll('.peoples_wrapper')
const testimonialPopup=document.querySelector('.testimonial_pop_up')
const popupCloseButton=document.querySelector('.testimonial_close_button')
const thumb=document.querySelector('.range')
const testMichael=document.querySelector('.michael_john')
const testOskar=document.querySelector('.oskar')
const testFrederica=document.querySelector('.frederica')
const testMila=document.querySelector('.mila')
  
// ......................................................Testimonials popup...............................................


testMichael.addEventListener('click', testimonialPopUpActivation1 )
testOskar.addEventListener('click', testimonialPopUpActivation2 )
testFrederica.addEventListener('click', testimonialPopUpActivation3 )
testMila.addEventListener('click', testimonialPopUpActivation4 )
popupCloseButton.addEventListener('click', testimonialPopUpClose)
shadow.addEventListener('click', testimonialPopUpClose)

function testimonialPopUpActivation1(){
  testimonialPopup.classList.add('testimonial_pop_up_active')
  testimonialPopup.innerHTML = ''
  let popupContent1 =  testMichael.cloneNode(true); // клонировать сообщение
  popupCloseButton.classList.add('testimonial_close_button')
  popupContent1.style.position = 'relative'
  popupContent1.appendChild(popupCloseButton)
  testimonialPopup.appendChild(popupContent1)
    shadow.classList.add('shadow_active')
  // body.classList.add('body_overflow_hidden');
}

function testimonialPopUpActivation2(){
  testimonialPopup.classList.add('testimonial_pop_up_active')
  testimonialPopup.innerHTML = ''
  let popupContent2 =  testOskar.cloneNode(true);
  popupContent2.style.position = 'relative'
  popupContent2.appendChild(popupCloseButton)
  testimonialPopup.appendChild(popupContent2)
  shadow.classList.add('shadow_active')
}

function testimonialPopUpActivation3(){
  testimonialPopup.classList.add('testimonial_pop_up_active')
  testimonialPopup.innerHTML = ''
  let popupContent3 = testFrederica.cloneNode(true);
  popupContent3.style.position = 'relative'
  popupContent3.appendChild(popupCloseButton)
  testimonialPopup.appendChild(popupContent3)
  shadow.classList.add('shadow_active')
}

function testimonialPopUpActivation4(){
  testimonialPopup.classList.add('testimonial_pop_up_active')
  testimonialPopup.innerHTML = ''
  let popupContent4 =  testMila.cloneNode(true);
  popupContent4.style.position = 'relative'
  popupContent4.appendChild(popupCloseButton)
  testimonialPopup.appendChild(popupContent4)
  shadow.classList.add('shadow_active')
}


function testimonialPopUpClose (){
  testimonialPopup.classList.remove('testimonial_pop_up_active')
  shadow.classList.remove('shadow_active')
  body.classList.remove('body_overflow_hidden');
}
 
// ...................................................................................................................

// ................................................Testimonials slider...............................................

function testimonialsSlider() {
  if (window.innerWidth > 1220) {
    thumb.max = 8
    humanWrapper.style.transform = `translateX(-${thumb.value * 298}px)`
  } else {
    if (window.innerWidth > 980) {
      thumb.max = 8
      humanWrapper.style.transform = `translateX(-${thumb.value * 321}px)`
    }
    else {
      humanWrapper.style.transform = "translateX(0)"
      thumb.value = 0
    }
  }
}

humanWrapper.style.transform = "translateX(0)"
thumb.addEventListener('input', testimonialsSlider)

