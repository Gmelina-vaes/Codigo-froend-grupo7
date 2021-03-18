let seleccionar = document.querySelector("select");
let parrafo = document.querySelector('p');
let titulo = document.querySelector('h1');
let $imageness = document.querySelector('#imagen')

seleccionar.addEventListener('change', micancion);  // selecionar mi el titulo de la camcion

function micancion() { 

  let eleccion = seleccionar.value;
 const Lisimagen= ['./assets/imagen/ub40.jpg','./assets/imagen/shakira.gif','./assets/imagen/michael.jpg',
 './assets/imagen/u2.gif','./assets/imagen/imagen1.jpg'];
  if (eleccion==="") {
    $imageness.style.backgroundImage =`url(${Lisimagen[4]})`;
    titulo.textContent=" Elige una cancion"
    parrafo.textContent =""
  } else if (eleccion ==="red-wine") {
     $imageness.style.backgroundImage =`url(${Lisimagen[0]})`;
    titulo.textContent="UB40 RED WINE"
    parrafo.textContent = "Red, red wine goes to my head Makes me forget that I still need her so Red, red wine, it's up to you All I can do I've done Memories won't go, memories won't go"
    +"I'd have sworn that with time Thoughts of you leave my head  I was wrong, now I find Just one thing makes me forget"
    +"Red, red wine, stay close to me Don't let me be alone It's tearing apart my blue heart I'd have sworn that with time"
   +"Thoughts of you leave my head I was wrong, now I find Just one thing makes me forget Red, red wine, stay close to me Don't let me be alone It's tearing apart my blue heart";
  } else if (eleccion ==="inevitable") {
    $imageness.style.backgroundImage =`url(${Lisimagen[1]})`;
    titulo.textContent="SHAKIRA - INEVITABLE"
    parrafo.textContent = "Si es cuestión de confesar  No sé preparar café y no entiendo de" + 
    " fútbol Creo que alguna vez fui infiel Juego mal hasta el parqués Y jamás uso reloj Y para ser más franca" +
    " Nadie piensa en ti como lo hago yo Aunque te dé lo mismo Si es cuestión de confesar Nunca duermo antes de diez"
     "Ni me baño los domingos La verdad es que también Lloro una vez al mes Sobre todo cuando hay frío"+
     "Conmigo nada es fácil Ya debes saber, me conoces bien (Sin ti todo es tan aburrido) El cielo está cansado ya de ver la lluvia caer"
     "Y cada día que pasa es uno más parecido a ayer No encuentro forma alguna de olvidarte Porque seguir amándote es inevitable";
    
  } else if (eleccion === "folling-love") {
    $imageness.style.backgroundImage =`url(${Lisimagen[0]})`;
    titulo.textContent="UB40-FALLING IN LOVE WITH YOU"
    parrafo.textContent = "Wise men say Only fools rush in But I can't help falling in love with you Shall I stay? Would it be a sin"
    +"If I can't help falling in love with you? Like a river flows Surely to the sea Darling, so it goes Some things are meant to beTake my hand"
    + "ake my whole life too For I can't help falling in love with you Like a river flows Surely to the sea  Darling, so…";
  } else if (eleccion === "U2") {
    $imageness.style.backgroundImage =`url(${Lisimagen[3]})`;
    titulo.textContent="U2 -New Year’s Day"  
    parrafo.textContent = "Yeah All is quiet on New Year's Day A world in white gets underway I want to be with you Be with you, night and day" +
   "Nothing changes on New Year's Day On New Year's Day I will be with you again  I will be with you again Under a blood red sky A crowd has gathered in black and white" +
    "Arms entwined, the chosen few The newspapers says, says Say it's true, it's true And we can break through  Though torn in two"
    "We can be one, I will begin again I, I will begin again Oh, oh";
  } else {
    $imageness.style.backgroundImage =`url(${Lisimagen[2]})`;
    titulo.textContent="MICHAEL JACKSON - song earth"
    parrafo.textContent = " hat about sunrise  What about rain ,What about all the things That you said we were to gain?"
   + "What about killing fields? Is there a time? What about all the things That you said was yours and mine? Did you ever stop to notice"
    +"All the blood we've shed before? Did you ever stop to notice This crying Earth, these weeping shores?"
    +"Ah-ah-ah-ah-ah Ooh-ooh-ooh-ooh-ooh Ah-ah-ah-ah-ah"
    +"What have we done to the world? Look what we've done  What about all the peace That you pledge your only son?"
    +"What about flowering fields? Is there a time? What about all the dreams That you said was yours and mine?"
    "Did you ever stop to notice All the children dead from war? Did you ever stop to notice This crying Earth, these weeping shores? ";
  }
}
