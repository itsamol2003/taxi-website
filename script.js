let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classlist.toggle('fa-times');
    mynav.classList.toggle('active');
}