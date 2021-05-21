console.log("Ejecutando JS....")

const canvas = document.getElementById('canvas');
const img = document.getElementById('stingy');
const ctx = canvas.getContext('2d');

const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

const deslizadores = document.getElementById('deslizadores');
deslizadores.style.display = 'none';

const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');


document.getElementById("original").onclick = function() {originalF()};
document.getElementById("colores").onclick = function() {coloresF()};
document.getElementById("grises").onclick = function() {grisesF()};
document.getElementById("negativo").onclick = function() {negativoF()};
document.getElementById("circulo").onclick = function() {circuloF()};

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0);
  console.log("Imagen lista...");
};

function originalF() {
  deslizadores.style.display = 'none';
  const img = document.getElementById('stingy');
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  canvas.style.borderRadius = 0 + "px";
  ctx.putImageData(imgData, 0, 0);
}

function coloresF() {
  deslizadores.style.display = 'inherit';
  canvas.style.borderRadius = 0 + "px";
  compontentes();
}

function grisesF(){
  deslizadores.style.display = 'none';
  ctx.drawImage(img, 0,0);
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  for (var i = 0; i < data.length; i+=4) {
    r = data[i];
    g = data[i+1];
    b = data[i+2];
    brillo = (3 * r + 4 * g + b)/8
    data[i] = brillo;
    data[i+1] = brillo;
    data[i+2] = brillo;
  }
  canvas.style.borderRadius = 0 + "px";
  ctx.putImageData(imgData, 0, 0);
}

function negativoF() {
  deslizadores.style.display = 'none';
  ctx.drawImage(img, 0,0);
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data;
  for (var i = 0; i < data.length; i+=4) {
    r = data[i];
    g = data[i+1];
    b = data[i+2];
    total = 255;
    data[i] = total - r;
    data[i+1] = total - g;
    data[i+2] = total - b;
  }
  canvas.style.borderRadius = 0 + "px";
  ctx.putImageData(imgData, 0, 0);
}

function circuloF() {
  deslizadores.style.display = 'none';
  const img = document.getElementById('stingy');
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.putImageData(imgData, 0, 0);
  canvas.style.borderRadius = 50 + "%";
}

function compontentes(){
  var umbralR = deslizadorR.value
  var umbralG = deslizadorG.value
  var umbralB = deslizadorB.value
  ctx.drawImage(img, 0,0);
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
    ctx.putImageData(imgData, 0, 0);
}

deslizadorR.oninput = () => {
  range_valueR.innerHTML = deslizadorR.value;
  compontentes();
}

deslizadorG.oninput = () => {
  range_valueG.innerHTML = deslizadorG.value;
  compontentes();
}

deslizadorB.oninput = () => {
  range_valueB.innerHTML = deslizadorB.value;
  compontentes();
}

console.log("Fin...");