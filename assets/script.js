/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* ESECUZIONE DEL PROGRAMMA */

/* FUNZIONE DI CREAZIONE DELLE GRIGLIE */
function createGrid(numCells, eleContainer) {
  //Pulisco il container mettendo "vuoto"
  eleContainer.innerHTML = "";
  for (let i = 1; i <= numCells; i++) {
    eleContainer.innerHTML += `<div class="cell">${i}</div>`;
  }
}

/* DEFINIZIONI DELLE VARIBILI */

const eleBtn = document.querySelector('.btn_play');

/* FUNZIONE DI ATTIVAZIONE DEL PROGRAMMA */
eleBtn.addEventListener("click", function () {
  const eleGrid = document.querySelector(".grid");
  const eleLevel = document.querySelector("#level");
  let value = eleLevel.options[eleLevel.selectedIndex].value;
  console.log(value);

  if (value === "100") {
    eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
    eleGrid.classList.add("grid_easy");
    createGrid(100, eleGrid);
  } else if (value === "81") {
    eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
    eleGrid.classList.add("grid_medium");
    createGrid(81, eleGrid);
  } else if (value === "49") {
    eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
    eleGrid.classList.add("grid_hard");
    createGrid(49, eleGrid);
  }

  const eleCells = document.querySelectorAll(".cell");

  for (let i = 0; i < eleCells.length; i++) {
    const cell = eleCells[i];
    cell.addEventListener("click", function () {
      console.log("Hai cliccato la cella" + this.innerHTML);
      this.classList.toggle("clicked");
    });
  }
});

