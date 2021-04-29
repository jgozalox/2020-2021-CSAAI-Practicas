console.log("Ejecutando JS...");

var button = document.getElementById("button");
var myAudioRaquet = document.getElementById("myAudioRaquet"); 
var myAudioLadrillo = document.getElementById("myAudioLadrillo"); 
var myAudioPared = document.getElementById("myAudioPared"); 
var musica = document.getElementById("musica"); 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var textos = document.getElementsByClassName("instrucciones");


function ocultarBut() {
  button.visibility = "hidden";
  document.location.reload(true);
}

button.onclick = function() {
  ocultarBut()
  musica.play();
};

canvas.width = 415;
canvas.height = 430;

let x = canvas.width/2 - 5;
let y = canvas.height - (1/16)*canvas.height - 10;
let xrac = canvas.width/2;
let yrac = canvas.height - (1/16)*canvas.height;
let inicialX = x;
let inicialY = y;
let inicialXrac = xrac;
let inicialYrac = yrac;
let velx = 6;
let vely = 2;
let tamXrac = 76;
let tamYrac = 10;

var enjuego = false;
var numVidas =  3;
document.getElementById("numVidas").innerHTML = "| | |"
var puntos = 0;
document.getElementById("puntos").innerHTML = "";

const LADRILLO = {
  F: 5,   
  C: 9,   
  w: 39, 
  h: 15,  
  padding: 5.5,  
  visible: true
}

const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
  ladrillos[i] = [];  
  
  for (let j = 0; j < LADRILLO.C; j++) {
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
  musica.play();
  if (y < yrac-10){
    if (x <= 0 || x >= (canvas.width - 10) ) {
      velx = -velx;
      if (x <= 0){
        document.getElementById("canvas").style.borderLeft = randomColor();
      }else if (x >= (canvas.width - 10)){
        document.getElementById("canvas").style.borderRight = randomColor();
      }
      myAudioPared.play();
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
              myAudioLadrillo.play();

              puntos +=  1;
              vely = -vely;
              document.getElementById("puntos").innerHTML = puntos;
            }
          }
        }
      }
    }

  }else if(y == yrac -10){
    if(( x >= (xrac - tamXrac/2)) && (x <= (xrac + tamXrac/2))){
      vely = -vely;
      myAudioRaquet.play(); 
    }else{ 
      document.getElementById("fondo").style.backgroundColor ="#800000";
      setInterval(cssIniBG,400);
      enjuego = false;
      
      numVidas -= 1 ;
      if (numVidas == 2){
        document.getElementById("numVidas").innerHTML = "| |";
      }else if (numVidas == 1){
        document.getElementById("numVidas").innerHTML = "|";
      }else{
        document.getElementById("vidasLet").innerHTML = "GAME ";
        document.getElementById("numVidas").innerHTML = " OVER";
        document.getElementById("canvas").style.display = "none";
        button.style.visibility = "visible"
        return; 
      }
      
      x = inicialX; 
      y = inicialY;
      xrac = inicialXrac;
      yrac = inicialYrac;
      cancelAnimationFrame(myRequest);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dibujoRaquet();
      dibujoLadr();
      musica.pause();
      return;
    }
  }

  x = x + velx;
  y = y + vely;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujo();
  dibujoRaquet();
  dibujoLadr();
  
  myRequest = requestAnimationFrame(movimiento);
}


document.onkeydown = function (ev) {
     switch (ev.keyCode) {
        case 32:
          if (numVidas > 0){
            movimiento();
            enjuego = true;
            textos[0].innerHTML = "";
            textos[1].innerHTML = "";
            canvas.style.marginTop = "30px";
          }
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
