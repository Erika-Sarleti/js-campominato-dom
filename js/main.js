/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

const selDifficulty = document.getElementById('select-opt');
const play =  document.getElementById('playbtn');
let containerBox = document.querySelector('.container');

play.addEventListener('click', function(){
    let level = selDifficulty.value;
    if (level == 'easy') {
        alternativeGrid(49);
    }
     else if (level == 'medium') {
    alternativeGrid(81);    
    } else {
        alternativeGrid(100);
    }
})
function alternativeGrid(max){
    let lato = Math.sqrt(max);
    let square = document.querySelector('.square');
    for (i = 1; i <= max; i++){
       let square = document.createElement('div');
       square.classList.add('square');
       square.innerHTML= i; 
       square.style.width =`calc(100% / ${lato})`;
       square.style.height = `calc(100% / ${lato})`;
       containerBox.append(square);
    }    
    play.remove();
}
 