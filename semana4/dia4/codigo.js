
let condicion = true;
if (condicion==true){
    console.log("si es verdadera")
}else{
    console.log("Si es falsa")
}

// for 

/*for(let pasos=0;pasos <10;pasos++){
    console.log("camina defrente")
}*/

// imprimir numeros pares
 //menore a 300

 for(let par= 0 ;par<300;par = par+2 ){
    console.log(par);
}

// imprimeir numero divisiblentre 3 o 5 o 7
for(let div=1; div<1000; div ++ ){
    if ((div % 3===0 ) || (div % 5===0)||(div % 7===0)) {
        console.log(div)
    }
   
} 

let  total= 0 ;

for(let numero=0; numero< 100; numero++)
{
 
     if( numero %3===0 || numero %5 ===0 )
     {  
         total += numero  // total =total +numero
     }
     
}
console.log(total)
// while  cuando no conozco la cantidad de elementos que  voy a recorrer
let contador =0
while(contador < 10){
    console.log ("wii")
    contador ++
}

let alumno_favoritos=["cristiano","Mesi","Maradona","Pele","Iniesta"]
let informacion = "Mis alumnos favoritos son:"
const texto= document.querySelector("p")

for(let indice=0; indice < alumno_favoritos.length; indice++){
    informacion += alumno_favoritos[indice] + ","
}
texto.textContent=informacion;

let array_vocales= ["a","e","i","o","u"]
let frase_vocales="Mis vocales son:"
const mi_titulo=document.querySelector("h1")
for(let i=0; i< array_vocales.length;i++){
    frase_vocales=frase_vocales + array_vocales[i] + ","
}
document.write('<p>${array_vocales[i]}$</p>')

mi_titulo.textContent= frase_vocales ;

