//Math --> matematica
// es un objeto con un conjunto de funciones(metodos)
//para calculos matematicas

function CalcularAreaCircular(radio){
return  Math.PI * Math.pow(radio,2);
}

console.log(CalcularAreaCircular(5)) 

let  numeroMayor= Math.max(1,2,3,4,5,6)
console.log(numeroMayor)

let arrayNumero = [23,43,56 ,12 ,23,45] 
console.log(Math.max(... arrayNumero));
// script operation  convierde una rreglo 
// y lo desmienbra encada elemento