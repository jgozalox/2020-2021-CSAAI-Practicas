console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('stingy');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor del deslizador
const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');

// --Botones
document.getElementById("original").onclick = function() {originalF()};
document.getElementById("colores").onclick = function() {coloresF()};

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

function compontentes(){
  var umbralR = deslizadorR.value
  var umbralG = deslizadorG.value
  var umbralB = deslizadorB.value

    //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  let data = imgData.data

  for (var i = 0; i < data.length; i+=4) {
    if (data[i] > umbralR){
      data[i] = umbralR;
    }
    if (data[i+1] > umbralG){
      data[i+1] = umbralG;
    }
    if (data[i+2] > umbralB){
      data[i+2] = umbralB;
    }
  }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador
deslizadorR.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_valueR.innerHTML = deslizadorR.value;
  compontentes();
}

deslizadorG.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_valueG.innerHTML = deslizadorG.value;
  compontentes();
}

deslizadorB.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_valueB.innerHTML = deslizadorB.value;
  compontentes();
}

console.log("Fin...");