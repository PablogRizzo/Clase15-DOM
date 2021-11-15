const boton = document.querySelector('.button');
const input = document.querySelector('.input');
const contenido = document.querySelector('.content');

boton.innerHTML = 'Boton'

contenido.innerText = 'Hola, como estas'

input.value = "pablo";

console.log(input.value);

const changeContent = () => {
    contenido.innerHTML = `${input.value}`;
    contenido.style.background = 'black';
    contenido.style.color = 'green';
}
boton.addEventListener('click',changeContent);


