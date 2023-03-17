//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
//emetto un messaggio in console con il numero della cella cliccata.

// Creo una variabile dove salvo il container delle 100 celle (container-grid)

const container = document.querySelector(".container");

//creo una variabile dove salvo l'input del bottone da premere

const buttonStart = document.querySelector(".button_start");

// creo un max numero di celle

let nMax = 100;//Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// creo un ciclo n volte per le celle (dove n in questo caso sta per 100)

for (let i = 0; i < nMax; i++) {
    const cell = `<div class="cell"></div>`;
    container.innerHTML += cell;
  }

  // seleziono una cella che ha classe cell e active

const cellEl = document.querySelectorAll(".cell")

// aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl


for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell)
    thisCell.addEventListener("click", function() {
        thisCell.classList.toggle("bg_lightblue")
        // this.classList.add("active")
        console.log("You clicked number ${}")
    })


    
}