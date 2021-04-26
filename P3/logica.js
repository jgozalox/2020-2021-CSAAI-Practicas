console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño de los canvas
canvas.width = 300;
canvas.height = 400;


//-- Obtener el contexto de los canvas
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

let tamXrac = 60;
let tamYrac = 10;

var enjuego = false;
var numVidas =  document.getElementById("numVidas").innerHTML;

function dibujo() 
{
  ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
dibujo();

function dibujoRaquet() 
{
  ctx.beginPath();
    ctx.rect(xrac-30, yrac, tamXrac, tamYrac);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();
}
dibujoRaquet();

function cssIni() {
  document.getElementById("canvas").style.border = "thin solid #ffffff";
}

function cssIniBG() {
  document.getElementById("fondo").style.backgroundColor ="#000000";
}

function randomColor() {
  let lista = ["10px solid #ff0000", 
               "10px solid #00ff00",
               "10px solid #0000ff", 
               "10px solid #ffff00",
               "10px solid #ff00ff", 
               "10px solid #00ffff",
               "10px solid #ff8000"];
  var num =  Math.round(Math.random() * ((lista.length-1)));
  return lista[num];
}

function movimiento() 
{
  if (y < yrac-10){
    if (x <= 0 || x >= (canvas.width - 10) ) {
      velx = -velx;
      if (x <= 0){
        document.getElementById("canvas").style.borderLeft = randomColor();
      }else if (x >= (canvas.width - 10)){
        document.getElementById("canvas").style.borderRight = randomColor();
      }
      
    } 
    if (y < 0) {
      vely = -vely;
      document.getElementById("canvas").style.borderTop = randomColor();
    }
    setInterval(cssIni,120);

  }else if(y = yrac -10){
    if(( x >= (xrac - tamXrac/2)) && (x <= (xrac + tamXrac/2))){
      vely = -vely;
    }else{
      document.getElementById("fondo").style.backgroundColor ="#ff0000";
      setInterval(cssIniBG,250);
      enjuego = false;
      
      if(numVidas > 0){
        numVidas =  String(parseInt(numVidas)-1) ;
        document.getElementById("numVidas").innerHTML = numVidas;
      }else{
        document.getElementById("numVidas").innerHTML = "NO HAY VIDAS ESTO NO CUENTA";
      }
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
          if ((xrac > tamXrac/2) && (enjuego == true)){
            xrac -= 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          dibujoRaquet();
          break;
        case 39:
          if ((xrac < canvas.width - tamXrac/2) && (enjuego == true)){
            xrac += 10;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          dibujoRaquet();
          break;
     }

}




