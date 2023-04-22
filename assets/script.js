/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* ESECUZIONE DEL PROGRAMMA */

/* DEFINIZIONI DELLE VARIBILI */

const eleBtn = document.querySelector('.btn_play');
const listCells = document.querySelectorAll('.cell');
	
for (let i = 0; i < listCells.length; i++) {
  const cell = listCells[i];
  cell.addEventListener("click", function(){
	this.classList.toggle("clicked");
  });
}


/* DEFINIZIONI DELLE FUNZIONI */

/* FUNZIONE DI ATTIVAZIONE DEL PROGRAMMA */
eleBtn.addEventListener("click", function () {
    // debugger
    const eleGrid = document.querySelector('.grid');
    const eleDifficulty = document.getElementById("difficulty");
    let value = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    console.log(value);
    
    
    if (value == "100") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_easy");
        createGrid(100, eleGrid);
    } else if (value == "81") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add( "grid_medium");
        createGrid(81, eleGrid);
    } else if (value == "49") {
        eleGrid.classList.remove("grid_easy", "grid_medium", "grid_hard");
        eleGrid.classList.add("grid_hard");
        createGrid(49, eleGrid);
    }
});


/* FUNZIONE DI CREAZIONE DELLE GRIGLIE */
function createGrid(numCells, eleGrid) {
	eleGrid.innerHTML = '';
		for (let i = 1; i < numCells + 1; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}
}