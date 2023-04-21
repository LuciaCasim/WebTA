import translateSpanish from "./languages/es.js";
import translateEnglish from "./languages/en.js";
import translatePortuguese from "./languages/po.js"; 

let lang = navigator.language || navigator.userLanguage;
let activeLanguage;


function translate(language) {
  if (language == "es") translateSpanish()
  else if (language == "po") translatePortuguese()
  else translateEnglish()
}


function dropdownSelected(lang) {
    document.getElementById("dropdown__selected").innerHTML = lang
}

// if (!sessionStorage.getItem('preferedLanguage')) {
//     if (lang.includes("es")) {
//         activeLanguage = "es"
//     } else if (lang.includes("pt")) {
//         activeLanguage = "po"
//     } else {
//         activeLanguage = "en"
//     }
// } else {
//     activeLanguage = sessionStorage.getItem('preferedLanguage');
// }

if (localStorage.getItem('preferedLanguage')) {
  activeLanguage = localStorage.getItem('preferedLanguage')
} else {
  if (lang.includes("es")) {
            activeLanguage = "es"
        } else if (lang.includes("pt")) {
            activeLanguage = "po"
        } else {
            activeLanguage = "en"
        }
}

translate(activeLanguage);
dropdownSelected(activeLanguage);


// location.hash = "/" + activeLanguage;

function changeLanguage(lang) {
    // location.hash = "/" + lang;
    localStorage.setItem('preferedLanguage', lang);
    translate(lang)
    activeLanguage = lang;
    dropdownSelected(activeLanguage);
    location.reload();
  }

  document.getElementById("dropdown__es").addEventListener("click", function(event){
    event.preventDefault()
    changeLanguage('es')
  });
  
  document.getElementById("dropdown__en").addEventListener("click", function(event){
    event.preventDefault()
    changeLanguage('en')
  });
  
  document.getElementById("dropdown__po").addEventListener("click", function(event){
    event.preventDefault()
    changeLanguage('po')
  });


