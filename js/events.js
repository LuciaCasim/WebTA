import animacionRequisito from './requisitos.js';

function events() {
  
  // SCROLL

  //SECTION DEFINITION

let home = document.getElementById("home");

let inscripcion = document.getElementById("inscripcion");

let experiencias = document.getElementById("experiencias");

let requisitos = document.getElementById("requisitos");

let legales = document.getElementById("legales");

//FUNCTION DEFINITION
function scrollTo (element) {
    element.scrollIntoView({ behavior: 'smooth'});
    
}

//HANDLERS - NAV
// document.getElementById("navbar-brand").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(home)
//   });


//   document.getElementById("nav-inscripcion").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(inscripcion)
//   });

//   document.getElementById("nav-experiencias").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(experiencias)
//   });

//   document.getElementById("nav-requisitos").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(requisitos)
//   });

//   document.getElementById("nav-legales").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(legales)
//   });




//   //HANDLERS - FOOTER
//   document.getElementById("footer__link-inscripcion").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(inscripcion)
//   });

//   document.getElementById("footer__link-experiencias").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(experiencias)
//   });

//   document.getElementById("footer__link-requisitos").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(requisitos)
//   });

//   document.getElementById("footer__link-legales").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(legales)
//   });



// // EXTRA HANDLERS
//   document.getElementById("hero-button").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(inscripcion)
//   });

//   document.getElementById("steps-inscripcion").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(inscripcion)
//   });

//   document.getElementById("steps-requisitos").addEventListener("click", function(event){
//     event.preventDefault()
//     scrollTo(requisitos)
//   });



  // REQUISITOS

  animacionRequisito();

  }

export default events;