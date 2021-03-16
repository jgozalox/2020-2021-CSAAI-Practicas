//Lógica de calculadora
console.log("Consola")



const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')

var result = document.getElementById('result')
console.log(num1.innerHTML + num2.innerHTML + num3.innerHTML)
num1.onclick = () => {
    result.innerHTML = "1"
}