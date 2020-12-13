
const alerta = document.getElementById('alerta');
const boton = document.getElementById('boton');
const email = document.getElementById('email');
const RegExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ham = document.getElementById('ham1');
const nav = document.getElementById('nave');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');


boton.addEventListener('click', function(e){
    e.preventDefault();
    var emailValue = email.value;
    if(!RegExpEmail.test(emailValue)) {
        alerta.classList.add('active');
    }
   
 });

 email.addEventListener('keydown', function(){
    alerta.classList.remove('active');
 });

 ham.addEventListener('click', function(){
     nav.classList.toggle('active');
     line1.classList.toggle('toggle');
     line2.classList.toggle('toggle');
     line3.classList.toggle('toggle');
 })
