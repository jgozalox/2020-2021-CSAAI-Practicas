//Lógica de calculadora
//Formato expresiones: <numero> <operador> <numero> (solo 2 numeros, no ampliable a 3)

console.log("Consola")

var tresElem = [];
var primerNum;
var operando;
var segundoNum;
var resultadoOp;
var result = document.getElementById('result')
var banderaOnOff = false;

function botonPulsado(a)
{
    if (this.innerHTML == "AC"){
      tresElem = [];
      result.innerHTML = " "
    }else if(this.innerHTML == "DEL"){
      console.log("borrar")
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
            case "x":
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

function encender(){
  if (banderaOnOff == false){
    document.getElementById("result").style.backgroundColor = "#ffffff";
    banderaOnOff = true;
  }else{
    document.getElementById("result").style.backgroundColor = "#000000";
    banderaOnOff = false;
  }
  tresElem = [];
  result.innerHTML = " "
}


document.getElementById('onoffbutton').onclick = function(){encender()};

const num0 = document.getElementById('bu0')
const num1 = document.getElementById('bu1')
const num2 = document.getElementById('bu2')
const num3 = document.getElementById('bu3')
const num4 = document.getElementById('bu4')
const num5 = document.getElementById('bu5')
const num6 = document.getElementById('bu6')
const num7 = document.getElementById('bu7')
const num8 = document.getElementById('bu8')
const num9 = document.getElementById('bu9')

const botonesNumero = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

for (var i=0; i<botonesNumero.length; i++){ 
    //console.log(botonesNumero[i].innerHTML,typeof(botonesNumero[i].innerHTML));
    botonesNumero[i].addEventListener("click", botonPulsado);
}

const gui = {
  ac:  document.getElementById('buac'),
  per:document.getElementById('buper'),
  el: document.getElementById('buel'),
  c: document.getElementById('budel'),
  div: document.getElementById('budiv'),
  mul : document.getElementById('bumul'),
  mas : document.getElementById('bumas'),
  poi : document.getElementById('bupoi'),
  eq : document.getElementById('bueq'),
  men : document.getElementById('bumen'),
  
}
/*const ac = document.getElementById('buac')
const per = document.getElementById('buper')
const el = document.getElementById('buel')
const c = document.getElementById('budel')
const div = document.getElementById('budiv')
const mul = document.getElementById('bumul')
const mas = document.getElementById('bumas')
const poi = document.getElementById('bupoi')
const eq = document.getElementById('bueq')
const men = document.getElementById('bumen')*/

const botonesOperando = [gui.ac, gui.per, gui.el, gui.c, gui.div, gui.mul, gui.mas, gui.poi, gui.eq, gui.men]

for (var i=0; i<botonesOperando.length; i++){ 
  //console.log(botonesOperando[i].innerHTML,typeof(botonesOperando[i].innerHTML));
  botonesOperando[i].addEventListener("click", botonPulsado);
}

//Otra forma de hacer el bucle for
//nombreArray.forEach(function(elemento,indice,array){
//    console.log(elemento.innerHTML, indice)
//})