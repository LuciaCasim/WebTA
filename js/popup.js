
document.body.classList.add("active-popup");

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none"
    document.body.classList.remove("active-popup");
})

document.querySelector("#popup__button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none"
    document.body.classList.remove("active-popup");
    document.getElementById("inscripcion").scrollIntoView();
})