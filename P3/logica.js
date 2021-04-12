console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 0;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;

//-- Funcion principal de animacion
function updateSquare() 
{
   if (x < 0 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

  if (y < 0 || y > (canvas.height - 10)) {
    vely = -vely;
  }

  console.log(x);
  console.log(y);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 4) Volver a ejecutar updateSquare cuando toque
  requestAnimationFrame(updateSquare);
}

let step = 20


//document.addEventListener("keydown", myFunction);

//function myFunction() {
  //console.log("prueba")
//}

document.getElementById("start").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("start").innerHTML = "EN MARCHA!";
  updateSquare();
}
