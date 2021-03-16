/* Este es para hacer  comentario grande
variable caja , sirve para  guardar datos
Variables e tipo texto : 

crear variable = inicializar

*/
// varible e tipo texto , var cambiar  de tipo let
//let nombre = "melina" //  tipificado dinamico , no le especifcamos q variable va tomar

/*console.log(typeof (nombre)) // esto devuelve string
alert("Mi segundo Nombre es",
nombre,
"y mi sistema operativo favorito es:")

console.log("1"+3) //lo concatena un texto mas numero

alert(`Mi segundo nombre es ${nombre} y mi sitema operatitvo es ${sistemaOperativo}`);
*/
// variable de tipo numero
let miEsdad =24
let miPeso =75.40

//1. crea una varia para mi altura
//2 crea una varibale mi peso
// 3. crea una variable q divida mi masa corporal al cuadrado
let altura = 1.70
let peso = 75.400
//bmi = indice de paa corporal
let bmi=peso/(altura*altura)
//alert(bmi) 

// hay 5 opearciones basicas
// la summa +
// la multiplicacion *
// la division 
// resta 
// el modulo
//let a = 6
//let b = 10
/*let suma = a + b
console.log(suma)

let resta = a-b
console.log(resta)

let multiplicacion = a * b
console.log(multiplicacion)

let division = b / a
console.log(division)

let potenciacion = a ** b
console.log(potenciacion)

let radicacion = a ** 0.5
console.log(radicacion)

let modulo= a % b
console.log(modulo)*/

// constante es como una varible es cuando 
//le puedo asignar un valor


// 1 declarar una variable para la formula  de  grados centigrados
// variable grados centigrado =  formaula 

// f= (9/5*c )+32
let celsious = 1 
let fahrenheit = celsious*(9/5) +32

console.log ("celsious a fahrenheit",fahrenheit)

// convertir de fahrenheit a celsios
let farengeit = 1
let celcious = (fahrenheit-32)*5/9

console.log(" de fahrenheit a celsious", celcious)

// variablee booleano 
let soyfronted = true
let  SoyMachineLearning = false
// JSON --> Javascript  Object Notacion
let json2 = {
    propiedad :123
}
let json ={
    propiedad1:"valor de texto",
    propiedad2:34,
    propiedad3:true,
    propiedad4:json2
}
let  melina={
   Nombre:"melina",
   apellidoPaterno:"Valeriano",
   apellidomaterno:"Espinoza"
}

let nombrecompleto= `${melina.Nombre}
    ${melina.apellidoPaterno} 
    ${melina.apellidomaterno}`

    console.log("MI Nombre es:",nombrecompleto);

    //vamos a crear un objeto donde almacenaremos nuestros hobbies favoritos , 
    //numero de mascotas que tenemos y ademas si somos hombres le damos true/false e igual con mujeres
    // vamos a armar un alerta que reciba como datos nuestros nombres y de un mensaje de bienvenida
    // vamos a escribir la formula cuadratica
        
    
    let  misobjetos ={
          Hobby:"mirar pelis",
        nromascotas:3,
        mujer:true,
        hombre: false,
     };


    let primernombres ="Melina";
    let  apellidos="valeriano espinoza";

    alert(`${primernombres} ${apellidos}`);

    // formula cuadratica
    let a = 0;
    let b = 0;
    let c = 0;
    let x = 0;
    
  
    x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;
 console.log("x ;" , x)






