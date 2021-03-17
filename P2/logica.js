//Lógica de calculadora
//Formato expresiones: <numero> <operador> <numero> (solo 2 numeros, no ampliable a 3)

console.log("Consola")

var tresElem = [];
var primerNum;
var operando;
var segundoNum;
var resultadoOp;
var result = document.getElementById('result')

function botonPulsado(a)
{
    if (this.innerHTML == "AC"){
      tresElem = [];
      result.innerHTML = " "
    }else if (isNaN(this.innerHTML) && this.innerHTML != "." ){
      //Pulsacion de operador
      if (tresElem.length == 0){
        //No hará nada ya que no hay num (array vacio)
        console.log("Introduzca primero un numero")
      }else{
        if (this.innerHTML != "="){
          if(tresElem.length == 1){
            tresElem[1] = this.innerHTML;
            result.innerHTML += tresElem[1];
            console.log("elem2",tresElem[1])
          }
        }else{
          console.log("Vamos a operar", tresElem[0], tresElem[1], tresElem[2])
          switch(tresElem[1]){
            case "X":
              resultadoOp = tresElem[0] * tresElem[2]
              console.log(resultadoOp)
              break;
            case "/":
              resultadoOp = tresElem[0] / tresElem[2]
              break;
            case "-":
              resultadoOp = tresElem[0] - tresElem[2]
              break;
            case "+":
              resultadoOp = parseFloat(tresElem[0]) + parseFloat(tresElem[2])
              break;
            case "^":
              resultadoOp = Math.pow(tresElem[0], tresElem[2])
              break;
            default:
              console.log("what");
          }
          tresElem = [];
          tresElem[0] = resultadoOp;
          console.log("La matriz ahora", tresElem[0], tresElem[1], tresElem[2])
          console.log("Tamaño matriz", tresElem.length)
          result.innerHTML = tresElem[0];
          //Borrar dos ultimos elementos del array

        }
      }
    }else{
      //Pulsacion de numero
      if(tresElem.length < 2){
        if (tresElem.length == 0){
          tresElem[0] = this.innerHTML
          result.innerHTML += this.innerHTML
        }else{
          if (tresElem[0].includes(".") == true && this.innerHTML == "."){
            console.log("Ya hay un punto")
          }else{
            tresElem[0] += this.innerHTML
            result.innerHTML += this.innerHTML
          }
        }
        console.log("elem1",tresElem[0])
      }else if(tresElem.length >= 2){
        if (tresElem.length == 2){
          tresElem[2] = this.innerHTML
          result.innerHTML += this.innerHTML
        }else{
          if (tresElem[2].includes(".") == true && this.innerHTML == "."){
            console.log("Ya hay un punto")
          }else{
            tresElem[2] += this.innerHTML
            result.innerHTML += this.innerHTML
          }
        }
        
        console.log("elem3",tresElem[2])
      }
    }


}





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

for (var i=0; i<botonesNumero.length; i++){ 
    //console.log(botonesNumero[i].innerHTML,typeof(botonesNumero[i].innerHTML));
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
  //console.log(botonesOperando[i].innerHTML,typeof(botonesOperando[i].innerHTML));
  botonesOperando[i].addEventListener("click", botonPulsado);
}

//Otra forma de hacer el bucle for
//nombreArray.forEach(function(elemento,indice,array){
//    console.log(elemento.innerHTML, indice)
//})