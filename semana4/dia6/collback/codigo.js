// callbacks

function mostrarAlerta(){
    alert("Hola que tal !!");
}
const boton = document.querySelector("button");
//boton.addEventListener("click",mostrarAlerta);
boton.addEventListener("click",function(){
  alert(" hola q tal");  
})

// cuando se utiliza  una funcion como argumento
let segundos = 5;
function empezarCuentaarAtraz(){
 let intervalo = setInterval(function(){
     segundos --;
     if(segundos === 0){
     clearInterval(intervalo);
    }
    imprimirSegundos();
},1000);   
}
function imprimirSegundos(){
    console.log(segundos);
}
empezarCuentaarAtraz();