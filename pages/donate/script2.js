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
//................................................ Label input с суммами............................................................

const dots = document.querySelectorAll('.amount__radio');
const number = document.querySelector('.form-panda__number');
const valueDot =document.querySelectorAll('.amount__radio-label');
const dotsBox = document.querySelector('.amount__dots');

number.value = 100;
dots[5].checked = true;
dotsBox.addEventListener('input' , ()=>{
    for(let i =0; i< dots.length; i++){
        if(dots[i].checked=== true){
            number.value = dots[i].value;
        }
    }
})
number.addEventListener('input', ()=>{
    for(let i =0; i< dots.length; i++){
        if(number.value == dots[i].value){
            dots[i].checked= true;
        } else dots[i].checked = false;
    }
})
