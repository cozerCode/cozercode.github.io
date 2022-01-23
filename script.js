function copyToCB(text)
{
    navigator.clipboard.writeText(text);
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}



var myNav = document.getElementsByClassName('navbar')[0];
var myNavDrop = document.getElementsByClassName('nav-menu')[0];
function update()
{
    let left = document.getElementById("first");
    let left_h = document.getElementById("first-h");
    let right = document.getElementById("second");
    let footer = document.getElementsByClassName("container")[0];
    let rect = right.getBoundingClientRect();
    let rect_f = footer.getBoundingClientRect();
    for (var key in rect) {
      if(typeof rect[key] !== 'function') {
        if (key == "y"){
            if (rect[key] <= 100){
                left.classList.add("fixed");
                left_h.style.display = "block";
            }
            else {
                left.classList.remove("fixed");
                left_h.style.display = "none";
            }
        }
      }
    }
}
window.onscroll = function () { 
    update();
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1 ) {
        myNav.classList.add("nav-transparent");
        myNavDrop.classList.add("transparent");
    } 
    else {
        myNav.classList.remove("nav-transparent");
        myNavDrop.classList.remove("transparent");
    }
};