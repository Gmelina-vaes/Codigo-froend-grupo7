// clases
//las clases en js son funciones , con sintaxis especiales pero siguen siendo funciones
// funcion
const func = function(){}
//clases
const clases =class{}
console.log(Object.getPrototypeOf(func))
console.log(Object.getPrototypeOf(clases))

const constructorDeUnaFuncion = new func()
const  clase2 = new clase()