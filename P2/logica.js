//Lógica de calculadora
//Formato expresiones: <numero> <operador> <numero> (solo 2 numeros, no ampliable a 3)

console.log("Consola")

var tresElem = [];
var primerNum;
var operando;
var segundoNum;

function botonPulsado(a)
{
    //document.getElementById('result').innerHTML = this.innerHTML
    console.log(this.innerHTML)
    result.innerHTML += this.innerHTML


}


var result = document.getElementById('result')


var num1 = document.getElementById('bu1')
var num2 = document.getElementById('bu2')
var num3 = document.getElementById('bu3')
var num4 = document.getElementById('bu4')
var num5 = document.getElementById('bu5')
var num6 = document.getElementById('bu6')
var num7 = document.getElementById('bu7')
var num8 = document.getElementById('bu8')
var num9 = document.getElementById('bu9')
var botonesNumero = [num1, num2, num3, num4, num5, num6, num7, num8, num9];

//Otra forma de hacer el bucle for
//botonesNumero.forEach(function(elemento,indice,array){
//    console.log(elemento.innerHTML, indice)
//})

//Recorro array y muestro elemento y tipo (convertiremos este array de strings a array de ints)
for (var i=0; i<botonesNumero.length; i++){ 
    console.log(botonesNumero[i].innerHTML,typeof(botonesNumero[i].innerHTML));
}



document.getElementById('buac').addEventListener("click", botonPulsado);
document.getElementById('buper').addEventListener("click", botonPulsado);
document.getElementById('buel').addEventListener("click", botonPulsado);
document.getElementById('buc').addEventListener("click", botonPulsado);
document.getElementById('budiv').addEventListener("click", botonPulsado);
document.getElementById('bumul').addEventListener("click", botonPulsado);
document.getElementById('bumas').addEventListener("click", botonPulsado);
document.getElementById('bupoi').addEventListener("click", botonPulsado);
document.getElementById('bueq').addEventListener("click", botonPulsado);
document.getElementById('bumen').addEventListener("click", botonPulsado);