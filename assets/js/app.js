const menue = document.querySelector(".menu");
const links = document.querySelector(".links");

menue.addEventListener("click", function() {
   links.classList.toggle("show-links"); 
})
