/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
*/

const selDifficulty = document.getElementById('select-opt');
const play =  document.getElementById('playbtn');
let containerBox = document.querySelector('.container');
let arrRandomNumbers =[];

play.addEventListener('click', function(){
    let level = selDifficulty.value;
    if (level == 'easy') {
        Grid(100);
        randomNum(100);
    }
    else if (level == 'medium') {
        Grid(81); 
        randomNum(81);
    } else {
        Grid(49);
        randomNum(49);
    }
})
function randomNum(max){
    while (arrRandomNumbers.length < 16){
        const randomNumber = Math.floor(Math.random() * (max - 1) + 1);
        if (!(arrRandomNumbers.includes(randomNumber))){
            arrRandomNumbers.push(randomNumber);
        }
    }
    // console.log(arrRandomNumbers);
    return(arrRandomNumbers);
}




function Grid(max){
    let lato = Math.sqrt(max);
    let square = document.querySelector('.square');
    for (i = 1; i <= max; i++){
       let square = document.createElement('div');
       square.classList.add('square');
       square.innerHTML= i; 
       square.style.width =`calc(100% / ${lato})`;
       square.style.height = `calc(100% / ${lato})`;
       containerBox.append(square);
       square.addEventListener('click', changeColor)
    }    
    // play.remove();
}
 
function changeColor(){
    this.classList.add('selected');
}