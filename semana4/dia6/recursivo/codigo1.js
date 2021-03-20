
//
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
//// vamos a listar/ mostrar todos los numeros menores a 10 que sean multiplos de 3 o 5 , esto significa que tendremos al 3,5,6 y al 9 y que su suma es 23
// vamos a hacer esto pero con todos los numeros que sean menores a 1000

for(let numero=1; numero<10; numero++)
{
     let mul3 = numero*3
     let mul5 = numero*5
     let suma = mul3 + mul5
     if( suma ===23)
     {  
        console.log(mul3)
         console.log(mul5)
         console.log(suma)
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
 console.log("esta es la respuesta :",total)

// while  cuando no conozco la cantidad de elementos que  voy a recorrer
let contador =0
while(contador < 10){
    console.log ("wii")
    contador ++
}

let  suma =0
let  nro =0
while(nro<1000){

    if (nro % 3==0 || nro %5 ==0)
     { suma = suma + nro}
 nro ++

}
console.log("la suma total es:",suma)

let alumno_favoritos=["cristiano","Mesi","Maradona","Pele",,"Iniesta"]
let informacion = "Mis alumnos favoritos son:"
const texto= document.querySelector("p")

for(let indice=0; indice < alumno_favoritos.length; indice++){
    informacion+= alumno_favoritos(indice) +","

}
texto.textContent=informacion


m