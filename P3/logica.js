console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let velx = 6;
let vely = 2;

let enJuego = false;

function movimiento() 
{

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  if (enJuego == true){
    x = x + velx;
    y = y + vely;
  }


  if (x < 0 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

  if (y < 0) {
    vely = -vely;
  }

  if(y >= (canvas.height - 10)){
    x = 0;
    y = 0;
    document.getElementById("start").innerHTML = "START";
    enJuego = false;
  }




  requestAnimationFrame(movimiento);
}

function dibujo() 
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
dibujo();

document.getElementById("start").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("start").innerHTML = "EN MARCHA!";
  enJuego = true;
  movimiento();
}
