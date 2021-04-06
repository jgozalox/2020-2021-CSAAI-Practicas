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

function botonPulsado(a){
    if (a.target.value == "AC"){
      tresElem = [];
      result.innerHTML = " "
    }else if(a.target.value == "DEL"){
      console.log("borrar")
    }else if (isNaN(a.target.value) && a.target.value != "." ){
      //Pulsacion de operador
      if (tresElem.length == 0){
        //No hará nada ya que no hay num (array vacio)
        console.log("Introduzca primero un numero")
      }else{
        if (a.target.value != "="){
          if(tresElem.length == 1){
            tresElem[1] = a.target.value;
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
          tresElem[0] = a.target.value
          result.innerHTML += a.target.value
        }else{
          if (tresElem[0].includes(".") == true && a.target.value == "."){
            console.log("Ya hay un punto")
          }else{
            tresElem[0] += a.target.value
            result.innerHTML += a.target.value
          }
        }
        console.log("elem1",tresElem[0])
      }else if(tresElem.length >= 2){
        if (tresElem.length == 2){
          tresElem[2] = a.target.value
          result.innerHTML += a.target.value
        }else{
          if (tresElem[2].includes(".") == true && a.target.value == "."){
            console.log("Ya hay un punto")
          }else{
            tresElem[2] += a.target.value
            result.innerHTML += a.target.value
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
botones = document.getElementsByClassName("boton")

for (let boton of botones) {
    boton.onclick = (ev) => {
        botonPulsado(ev)
    }
}