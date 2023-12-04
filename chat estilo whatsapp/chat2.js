const contenedor = document.getElementById('conversation');
const input = document.getElementById('message-input');
const boton = document.getElementById('send-button');

boton.addEventListener('click',()=> {
  crearBurbuja(input.value);
  input.value = '';
});

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    crearBurbuja(input.value);
    input.value = '';
  }
});

function crearBurbuja(mensaje) {
  const nuevoElemento = document.createElement('div');
  nuevoElemento.classList.add('bubble');
  const bubbleText = document.createElement('div');
  bubbleText.classList.add('bubble-text');
  const innerDiv = document.createElement('div');
  const span = document.createElement('span');
  span.textContent = mensaje;
  const bubbleInfo = document.createElement('div');
  bubbleInfo.classList.add('bubble-info');
  bubbleInfo.textContent = '3 min ago';
  innerDiv.appendChild(span);
  innerDiv.appendChild(bubbleInfo);
  bubbleText.appendChild(innerDiv);
  nuevoElemento.appendChild(bubbleText);
  contenedor.insertBefore(nuevoElemento, contenedor.firstChild);
  
}