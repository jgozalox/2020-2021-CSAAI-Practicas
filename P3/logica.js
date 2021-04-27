console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño de los canvas
canvas.width = 415;
canvas.height = 450;


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
var numVidas =  3;
document.getElementById("numVidas").innerHTML = "| | |"
var puntos = 0;
document.getElementById("puntos").innerHTML = "";

const LADRILLO = {
  F: 5,   //-- Filas
  C: 9,   //-- Columnas
  w: 35,  //-- Anchura
  h: 15,  //-- Altura
  padding: 10,  //-- Espacio alrededor del ladrillo
  visible: true //-- Estado del ladrillo: activo o no
}

//-- Creación de los ladrillos. La estructura se almacena 
//-- en el objeto ladrillos, que inicialmente está vacío
const ladrillos = [];

//-- Recorrer todas las filas. La variable i toma valores de 0 hasta F-1 (número de filas)
for (let i = 0; i < LADRILLO.F; i++) {
  ladrillos[i] = [];  //-- Inicializar la fila. Las filas son a su vez Arrays que inicialmente están vacíos

  //-- Recorrer las C columnas de la fila i. La variable j toma valores de 0 hasta C-1 (numero de columnas)
  for (let j = 0; j < LADRILLO.C; j++) {

    //-- Calcular valores para el ladrillo de la fila i y la columna j
    //-- Algunos valores son constates. Otros depeden de i y j
    ladrillos[i][j] = {
      x: 10 + (LADRILLO.w + LADRILLO.padding) * j,
      y: 10 + (LADRILLO.h + LADRILLO.padding) * i,
      w: LADRILLO.w,
      h: LADRILLO.h,
      padding: LADRILLO.padding,
      visible: LADRILLO.visible
    };
  }
}

function dibujoLadr(){
  for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
dibujoLadr();

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

    for (let i = 0; i < LADRILLO.F; i++) {
      for (let j = 0; j < LADRILLO.C; j++) {
        if (ladrillos[i][j].visible) {
          if ((y >= ladrillos[i][j].y) && (y <= (ladrillos[i][j].y + 15))){
            if ((x >= ladrillos[i][j].x) && (x <= (ladrillos[i][j].x + 35))){
              ladrillos[i][j].visible = false;
              vely = -vely;
              puntos +=  1 ;
              document.getElementById("puntos").innerHTML = puntos;
            }
          }
        }
      }
    }

  }else if(y = yrac -10){
    if(( x >= (xrac - tamXrac/2)) && (x <= (xrac + tamXrac/2))){
      vely = -vely;
    }else{
      document.getElementById("fondo").style.backgroundColor ="#ff0000";
      setInterval(cssIniBG,250);
      enjuego = false;
      
      if(numVidas > 0){
        numVidas = numVidas - 1 ;
        if (numVidas == 2){
          document.getElementById("numVidas").innerHTML = "| |";
        }
        if (numVidas == 1){
          document.getElementById("numVidas").innerHTML = "|";
        }
      }else{
        document.getElementById("vidasLet").innerHTML = "GAME ";
        document.getElementById("numVidas").innerHTML = " OVER";
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
      dibujoLadr();
      return;
    }
  }

  x = x - velx;
  y = y - vely;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujo();
  dibujoRaquet();
  dibujoLadr();
  
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




