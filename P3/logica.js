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
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condicion de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y < 0 || y > (canvas.height - 10)) {
    vely = -vely;
  }



  console.log(x);
  console.log(y);

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 10, 10);

    

    ctx.fillStyle = 'white';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;

  //-- 4) Volver a ejecutar updateSquare cuando toque
  requestAnimationFrame(updateSquare);
}

let step = 20
document.onkeydown = function (ev) {
  var step = new Number(document.getElementById("step").value);
     switch (ev.keycode) {
      case 32: // Espacio (32 para mi )
      console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
      break;
     }
}

document.getElementById("demo").addEventListener("keydown", myFunction);

function myFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
}

//-- ¡Que empiece la función!
updateSquare();