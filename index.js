console.log("Hello World")
const div = document.getElementById("div1");

div.style.color = "red";

const mybtn = document.getElementsByTagName("button");

for (let i = 0; i<mybtn.length;++i){
    mybtn[i].style.backgroundColor = "blue";
    mybtn[i].style.color = "white";
    mybtn[i].style.padding = "2vmax 4vmax";
    mybtn[i].style.margin = "10px";
    mybtn[i].style.cursor = "pointer";

}

const buttons = document.querySelectorAll("button")
console.log(buttons)
buttons[1].style.backgroundColor = "red"

const h1 = document.createElement('h1');
h1.textContent = "this is heading"

// document.body.prepend(h1);

buttons[0].onclick = showheading;
buttons[1].onclick = hideheading;

function showheading(){
    document.body.prepend(h1);
}

function hideheading(){
    h1.remove();
}