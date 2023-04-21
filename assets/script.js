/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* ESECUZIONE DEL PROGRAMMA */

/* EVENTLISTENER A TUTTI GLI ELEMENTI DELLA GRIGLIA */

const eleGrid = document.querySelector('.grid');
const eleBtn = document.querySelector('.btn_play');

eleBtn.addEventListener("click", function () {
	createGrid(100, eleGrid);

});


/* DEFINIZIONI DELLE FUNZIONI */

function createGrid(numCells, eleGrid) {
	eleGrid.innerHTML = '';
	for (let i = 1; i < numCells + 1; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}
	const listCells = document.querySelectorAll('.cell');
	
	for (let i = 0; i < listCells.length; i++) {
	  const cell = listCells[i];
	  cell.addEventListener("click", function(){
		this.classList.toggle("clicked");
	  });
  	}
}