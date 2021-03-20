
    let array_vocales = ["a", "e", "i", "o", "u"];
    const titulo = document.querySelector('h1');
    let segundo = array_vocales.length;
    function mostrar_vocales(){   
        let i=0
        let intervalo = setInterval(function(){
        segundo --;
        if(segundo ===0 ){
            clearInterval(intervalo);}
            imprimirvocales(i);  
           i ++;
        },1000) 
        return;
      }

    function imprimirvocales(i){
    titulo.textContent= titulo.textContent+"," + array_vocales[i];
    }
  mostrar_vocales();

   
/*
    let segundos = 6;
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
empezarCuentaarAtraz();*/