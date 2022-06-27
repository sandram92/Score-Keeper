const buttonOne = document.querySelector('.playerOne')
const buttonTwo = document.querySelector('.playerTwo')
const displayOne = document.querySelector('.displayOne')
const displayTwo = document.querySelector('.displayTwo')
const reset = document.querySelector('.reset')
const gameRound = document.querySelector('#gameRounds')

let winningScore = 8
let playerOne = 0
let playerTwo = 0
let isGameOver = false

buttonOne.addEventListener('click', function(){

    if(winningScore !== playerOne){
      playerOne +=1
    
      displayOne.textContent = playerOne
    }   
})

buttonTwo.addEventListener('click', function () {
    
    if(winningScore !== playerTwo){
    playerTwo +=1
    displayTwo.textContent = playerTwo
    }
})

reset.addEventListener('click', function () {
    playerOne=0
    playerTwo=0
    displayOne.textContent = 0
    displayTwo.textContent = 0

})

gameRound.addEventListener('change', function (){
    const value =parseInt(gameRound.options[gameRound.selectedIndex].value);
    winningScore=value
})