const titulo =
document.getElementById('titulo');
titulo.textContent = 'Bienvenido al sitio de Emprendedor'

const boton =
document.querySelector('Btn');
boton.addEventListener('click', () => {console.log('!Bienvenido a nuestra tienda virtual¡')});

const  text = "hola, somos turbosanguches, un emprendimiento que se dedica a vender alimentos, ayudanos porfavor tengo hambre y 3 hijos en casa"
const number = 2024;

const backgroundAudio = document.querySelector(".background_audio");
document.addEventListener("DOMContentLoaded", () => {
    backgroundAudio.play();
}); 