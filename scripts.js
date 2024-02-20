const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const e = document.getElementById("e")

function agregar1(){
    var img1 = document.createElement("img");
    img1.setAttribute("id","img1");
    img1.setAttribute("src", "img/img1.jpeg")
    img1.style.height = "300px";
    img1.style.width = "300px";
    e.appendChild(img1)
}

btn1.addEventListener("click", agregar1);

function agregar2(){
    var gif = document.createElement("img");
    gif.setAttribute("id","gif1");
    gif.setAttribute("src", "img/gif.gif")
    gif.style.height = "300px";
    gif.style.width = "300px";
    e.appendChild(gif)
}

btn2.addEventListener("click", agregar2);

function agregar3(){
    var texto = document.createElement("p");
    texto.setAttribute("id","p1");
    texto.innerHTML = "Morat es una banda colombiana de pop latino formada originalmente en Bogotá el 13 de diciembre de 2011. Se dieron a conocer en 2015 con su canción Mi nuevo vicio. Sus integrantes son Juan Pablo Isaza Piñeros, Juan Pablo Villamil Cortés, Simón Vargas Morales y Martín Vargas Morales.";
    e.appendChild(texto)
}

btn3.addEventListener("click", agregar3);