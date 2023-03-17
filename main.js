/*Entrada/Salida*/

let popup = document.getElementById('popup');
let cancelar = document.getElementById('cancelar');
let popupopenercontainer = document.getElementById('popupopenercontainer');
let contenedorsection = document.getElementById('contenedorsection');

popupopenercontainer.addEventListener('click', () => {
  popup.style.display = 'block';
  contenedorsection.style.display = 'none';
});

cancelar.addEventListener('click', () => {
  popup.style.display = 'none';
  contenedorsection.style.display = 'block';
});

/*Listado*/

let contenedorlista = document.getElementById('contenedorlista');
let tarea = document.getElementById('tarea');

function sumar() {
  function tareita(inputtype, descripcionvalue) {
    this.tarea = inputtype;
    this.descripcionvalue = descripcionvalue;
  }
  let tarea = document.getElementById('inputtype').value;
  let descripcionvalue = document.getElementById('descripcion').value;

  nuevaTarea = new tareita(tarea, descripcionvalue);
  console.log(nuevaTarea);
  agregartarea();
}

var baseDatos = [];

function agregartarea() {
  baseDatos.push(nuevaTarea);
  document.getElementById(
    'lista'
  ).innerHTML += ` <li id="tarea" style = "background-color:${colorcito}"> 
  <div class="tipotarea"> <img width="37" height="37" src=${tipodetarea}> </div>
    ${nuevaTarea.tarea} 
    ${nuevaTarea.descripcionvalue} 
    <input type="checkbox" id="check"></input>
    <button id="tachito" class="tachito" style="background-color: "rgb(170, 248, 43)" ><img id="tachitoimg" class="loguito fw-bold delete" src="images/tachito.png"></button>
    </li>' `;

  if (
    tareaselector.value != 'Elegí tu destino' &&
    inputtype.value != '' &&
    descripcionvalue.value != ''
  ) {
    lista.innerHTML += tarea;
    section.style.display = 'none';
  } else {
    alert('Por favor, complete todos los campos');
  }
}

/*tachito*/

document.addEventListener('click', function () {
  if (event.target.classList == 'loguito fw-bold delete') {
    event.target.parentNode.parentNode.remove();
  }
});

/*colores*/

function colorPrioridad(color) {
  colorcito = color;
}

/*TIPODETAREA*/

let tipotarea = document.getElementsByClassName('tipotarea');

let personal = document.getElementById('personal');
let doméstica = document.getElementById('doméstica');
let entretenimiento = document.getElementById('entretenimiento');
let laboral = document.getElementById('laboral');
let tareaselector = document.getElementById('tareaselector');
let contenedortipotarea = document.getElementById('contenedortipotarea');

lista = añadir.addEventListener('click', function () {
  switch (tipotarea) {
    case 'personal':
      tipodetarea = 'images/man.png';

      break;

    case 'doméstica':
      tipodetarea = 'images/casa.png';

      break;

    case 'entretenimiento':
      tipodetarea = 'images/joystick.png';

      break;

    default:
      tipodetarea = 'images/carpetita.png';

      break;
  }
});
/*<li id="modelo" class="list-group" style="background-color:${colorcito}">
  <div class="classlista2">
  <div class="tipodetarea"><img src=${srctipotarea} width="37" height="37"
  >
  </div>
  <div class="nombredetarea">${nombredetarea}</div>
  ${txt}
  <div class="col-4">
  <div id="father">
  <input type="checkbox" id="check"></input>
   <button class="tachito" style="background-color: #f8dd98d8" ><img  class="loguito fw-bold delete" src="images/tachito.png"></button>
   <div class="colorcito"></div>
   </div> 
</li> */
