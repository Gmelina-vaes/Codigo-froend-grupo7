
    let array_vocales = ["a", "e", "i", "o", "u"];
    const titulo = document.querySelector('h2');
    let longitud= array_vocales.length
     for (let i = 0; i< longitud; i++) {
        setTimeout(()=>{titulo.textContent+= array_vocales[i] +","},1000*i);
        
    } 
      // try again in 300 milliseconds
    
  
  
 
