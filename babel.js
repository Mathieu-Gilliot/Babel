// const btn = document.querySelector('#name');



// btn.addEventListener('click',show);

// function show(){
//     let caroussel= document.querySelector(".exemple");
//     caroussel.classList.toggle('show')
// }

// Work in progress généralisation des boutons

let listEncarts = document.querySelectorAll('[data-encart]');
let listButtons = document.querySelectorAll('button');

console.log(listButtons);

for (let item of listEncarts) {
    let attribut = item.getAttribute("data-encart");
    for (let bou of listButtons) {
        let id = bou.getAttribute("id");
    }
};







