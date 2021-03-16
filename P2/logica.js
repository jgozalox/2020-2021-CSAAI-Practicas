//Lógica de calculadora
//Formato expresiones: <numero> <operador> <numero> (solo 2 numeros, no ampliable a 3)

console.log("Consola")

function botonPulsado(a)
{
    //document.getElementById('result').innerHTML = this.innerHTML
    console.log(this.innerHTML)
    result.innerHTML = this.innerHTML
}


var result = document.getElementById('result')

document.getElementById('buac').addEventListener("click", botonPulsado);
document.getElementById('buper').addEventListener("click", botonPulsado);
document.getElementById('buel').addEventListener("click", botonPulsado);
document.getElementById('buc').addEventListener("click", botonPulsado);

document.getElementById('bu7').addEventListener("click", botonPulsado);
document.getElementById('bu8').addEventListener("click", botonPulsado);
document.getElementById('bu9').addEventListener("click", botonPulsado);
document.getElementById('budiv').addEventListener("click", botonPulsado);

document.getElementById('bu4').addEventListener("click", botonPulsado);
document.getElementById('bu5').addEventListener("click", botonPulsado);
document.getElementById('bu6').addEventListener("click", botonPulsado);
document.getElementById('bumul').addEventListener("click", botonPulsado);

document.getElementById('bu1').addEventListener("click", botonPulsado);
document.getElementById('bu2').addEventListener("click", botonPulsado);
document.getElementById('bu3').addEventListener("click", botonPulsado);
document.getElementById('bumas').addEventListener("click", botonPulsado);

document.getElementById('bu0').addEventListener("click", botonPulsado);
document.getElementById('bupoi').addEventListener("click", botonPulsado);
document.getElementById('bueq').addEventListener("click", botonPulsado);
document.getElementById('bumen').addEventListener("click", botonPulsado);