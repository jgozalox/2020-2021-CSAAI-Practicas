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
function update() 
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

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

document.onkeydown = function (ev) {
  var step = new Number(document.getElementById("step").value);
     switch (ev.keyCode) {
        case 37: // Left (37 para mi )
           movX -= step;
           break;

        case 39: // Right (39 para mi )
           movX += step;
           break;

        case 38: // Up (38 para mi )
           movY += step;
           break;

        case 40: // Down (40 para mi )
           movY -= step;
           break;

        case 33: // Intro (13 para mi )
           escala += step;
           break;

        case 34: // Espacio (32 para mi )
           escala -= step;
           break;

        case 35: // tecla "d" (68 para mi )
           rotacion -= step;
           break;

        case 36: // tecla "i" (73 para mi )
           rotacion += step;
           break;

         case 187: // tecla "+"  (187 para mi )
           aproximacion += step;
           break;
         case 189: // tecla "-"  (189 para mi PC)
           aproximacion -= step;
           break;

     }
drawScene();
}

//-- ¡Que empiece la función!
update();