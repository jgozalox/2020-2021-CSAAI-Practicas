console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

let x = canvas.width/2 - 5;
let y = canvas.height - (1/8)*canvas.height - 10;

let xrac = canvas.width/2;
let yrac = canvas.height - (1/8)*canvas.height;

let inicialX = x;
let inicialY = y;
let inicialXrac = xrac;
let inicialYrac = yrac;

let velx = 6;
let vely = 2;

var enjuego = false;


function dibujo() 
{
  ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    //ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
dibujo();

function dibujoRaquet() 
{
  ctx.beginPath();
    ctx.rect(xrac-20, yrac, 40, 10);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
dibujoRaquet();

function cssIni() {
  document.getElementById("canvas").style.border = "thin solid #ffffff";
}

function randomColor() {
  var num =  Math.random() * (max - min) + min
  let lista = ["10px solid #ff0000", "10px solid #00ff00","10px solid #0000ff"]
  return lista[num];
}

function movimiento() 
{
  if (y < yrac-10){
    if (x <= 0 || x >= (canvas.width - 10) ) {
      velx = -velx;
      if (x <= 0){
        document.getElementById("canvas").style.borderLeft = randomColor;
      }else if (x >= (canvas.width - 10)){
        document.getElementById("canvas").style.borderRight = randomColor;
      }
      
    } 
    if (y < 0) {
      vely = -vely;
      document.getElementById("canvas").style.borderTop = randomColor;
    }
    setInterval(cssIni,120);

  }else if(y = yrac -10){
    if(( x >= (xrac - 20)) && (x <= (xrac + 20))){
      vely = -vely;
    }else{
      enjuego = false;
      x = inicialX; 
      y = inicialY;
      xrac = inicialXrac;
      yrac = inicialYrac;
      velx = -velx;
      vely = -vely;
      cancelAnimationFrame(myRequest);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dibujo();
      dibujoRaquet();
      return;
    }
  }

  x = x - velx;
  y = y - vely;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujo();
  dibujoRaquet();
  
  myRequest = requestAnimationFrame(movimiento);
}


document.onkeydown = function (ev) {
     switch (ev.keyCode) {
        case 32:
          movimiento();
          enjuego = true;
          break;
        case 37:
          if ((xrac > 20) && (enjuego == true)){
            xrac -= 20;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          dibujoRaquet();
          break;
        case 39:
          if ((xrac < canvas.width - 20) && (enjuego == true)){
            xrac += 20;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          dibujoRaquet();
          break;
     }

}




