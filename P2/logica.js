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
    botonesNumero[i].addEventListener("click", botonPulsado);
}

var ac = document.getElementById('buac')
var per = document.getElementById('buper')
var el = document.getElementById('buel')
var c = document.getElementById('buc')
var div = document.getElementById('budiv')
var mul = document.getElementById('bumul')
var mas = document.getElementById('bumas')
var poi = document.getElementById('bupoi')
var eq = document.getElementById('bueq')
var men = document.getElementById('bumen')

var botonesOperando = [ac, per, el, c, div, mul, mas, poi, eq, men]

for (var i=0; i<botonesOperando.length; i++){ 
  console.log(botonesOperando[i].innerHTML,typeof(botonesOperando[i].innerHTML));
  botonesOperando[i].addEventListener("click", botonPulsado);
}