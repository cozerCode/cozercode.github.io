function copyToCB(text)
{
    navigator.clipboard.writeText(text);
}

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
}

function includeHTML() {
  	var z, i, elmnt, file, xhttp;
  	/* Loop through a collection of all HTML elements: */
  	z = document.getElementsByTagName("*");
  	for (i = 0; i < z.length; i++) {
    	elmnt = z[i];
    	/*search for elements with a certain atrribute:*/
    	file = elmnt.getAttribute("include-html");
    	if (file) {
      		/* Make an HTTP request using the attribute value as the file name: */
      		xhttp = new XMLHttpRequest();
      		xhttp.onreadystatechange = function() {
        		if (this.readyState == 4) {
        			if (this.status == 200) {elmnt.innerHTML = this.responseText;}
        			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
        			/* Remove the attribute, and call this function once more: */
        			elmnt.removeAttribute("include-html");
        			includeHTML();
        		}
      		}
      		xhttp.open("GET", file, true);
      		xhttp.send();
      		/* Exit the function: */
      		return;
    	}
  	}
}

var hamburger;
var navMenu;
var navLink;
var myNav;
var myNavDrop = document.getElementsByClassName('nav-menu')[0];

function stuff()
{
	hamburger = document.querySelector(".hamburger");
	navMenu = document.querySelector(".nav-menu");
	navLink = document.querySelectorAll(".nav-link");

	myNav = document.getElementsByClassName('navbar')[0];

	hamburger.addEventListener("click", mobileMenu);

	navLink.forEach((n) => n.addEventListener("click", closeMenu));
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


window.onscroll = function () {
	stuff();
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1 ) {
        myNav.classList.add("nav-transparent");
        myNavDrop.classList.add("transparent");
    } 
    else {
        myNav.classList.remove("nav-transparent");
        myNavDrop.classList.remove("transparent");
    }
};


function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.paa', true);
  setVisible('#loading', false);
});