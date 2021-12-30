var typing_index = 0;
var txt = "I'm a programmer, a game developer and a website designer!";
var speed = 100;

function type() {
    var text_element = document.getElementById("typing");

    if(typing_index < 58) {
        text_element.innerHTML += txt.charAt(typing_index);
        typing_index++;
    }

    setTimeout(type,speed);
}

type();
