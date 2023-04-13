// // Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65.
// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// //età


// // document.getElementById("btn-age").onclick = function(){

// //    const età = document.getElementById("age").value;

// //    console.log ("Età:",età,"anni");

// // };



// //distanza



// const eleKm = document.querySelector("#distance").value;

// eleKm.addEventListener('click', function(){
//    console.log ("Distanza:",km,"km");
// });




// //prezzo

//  const prezzokm = 0.21;

//  let prezzo = eleKm * prezzokm;

//  console.log(prezzo);

// //sconto


  



// //  scontoMinori = scontoMinori.toFixed(2);


const eleNome = document.querySelector('#name');
const eleEtà = document.querySelector('#age');
const eleKm = document.querySelector('#distance');
let printName = document.querySelector('#printName');
let sconto = document.querySelector('#sconto');
let prezzoFinale = document.querySelector('#prezzoFinale')

const prezzokm = 0.21;


const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){

   let prezzo = eleKm.value * prezzokm;
   console.log (eleNome.value);
   console.log (eleEtà.value);
   console.log (eleKm.value);
   console.log (prezzo);

   if (eleEtà.value < '18') {

      let scontoMinori = prezzo - (prezzo / 100 * 20);
 
      console.log(scontoMinori);
 
      scontoMinori = scontoMinori.toFixed(2);
      
      sconto.innerHTML = "Sconto Minori";

      prezzoFinale.innerHTML = scontoMinori;
 
   } 
   else if (eleEtà.value > 65) {

      let scontoAnziani = prezzo - (prezzo / 100 * 40);
 
      console.log(scontoAnziani);
 
      scontoAnziani = scontoAnziani.toFixed(2)
 
      sconto.innerHTML = "Sconto Anziani";

      prezzoFinale.innerHTML = scontoAnziani;
 
   } 
  
   else {

      console.log(prezzo);
 
      prezzo = prezzo.toFixed(2)

      sconto.innerHTML = "Standard";

      prezzoFinale.innerHTML = prezzo;
 
   }

   printName.innerHTML = eleNome.value

  

});



  


 

  

  