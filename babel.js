const btn = document.querySelector('#name');



btn.addEventListener('click',show);

function show(){
    let caroussel= document.querySelector(".exemple");
    caroussel.classList.toggle('show')
}

// Work in progress

let listlink = document.querySelectorAll("[data-encart]")

let listbuttons = document.querySelectorAll("[data-button]")
