const btn = document.querySelector('#name');



btn.addEventListener('click',show);

function show(){
    let caroussel= document.querySelector(".exemple");
    caroussel.classList.toggle('show')
}