// wndown es un objeto que se refiere a la ventana
window.location  //  informacion como parametros ,url,nombre del host
console.log(window.location)
console.log("esta es la URL de la pagina:", location.href)
console.log("esta es la URL de la pagina:", location.hostname)
console.log("esta es la URL de la pagina:", location.host)
console.log("esta  e smi  path(ruta/camino):", location.pathname)// nombre de mi ruta
console.log("esta es protocolo que uso",location.protocol)
console.log("esta es la URL de la pagina:",location.protocol)


// setinterval  cantidad de milisegundos
let contador =0 
let intervalo= setInterval(()=>{
    console.log("hola mundo");
    console.log(contador)
    contador ++;
if(contador === 6){
   clearInterval(intervalo) 
}
} ,2000);

//  resive una funcion anonima 
setTimeout()
// localstorage  en colo o idioma 
//poner  una ve y no las este definiendo muchas veces

window.localStorage.setItem("contrasenia","1234")
let contra = window.localStorage.getItem("contrasenia");
console.log(contra);
let prolife = window.localStorage.setItem("tema","claro")
window.localStorage.removeItem("contra");
window.localStorage.clear()

setTimeout(()=> {
    console.log("esta es la ejecucion de ");
},2000)

