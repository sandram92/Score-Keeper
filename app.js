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
    if(playerTwo !== winningScore) {
    if(winningScore !== playerOne){
      playerOne +=1
      displayOne.textContent = playerOne
     if(playerOne === winningScore){
         displayOne.classList.add('green')
         displayTwo.classList.add('red')
     }
    }  
}
})

buttonTwo.addEventListener('click', function () {
    if(playerOne !== winningScore) {
    if(winningScore !== playerTwo){
    playerTwo +=1
    displayTwo.textContent = playerTwo
    if(playerTwo=== winningScore){
        displayTwo.classList.add('green')
        displayOne.classList.add('red')
    }
    }
}
})

reset.addEventListener('click', function () {
    playerOne=0
    playerTwo=0
    displayOne.textContent = 0
    displayTwo.textContent = 0
    displayOne.classList.remove('green', 'red')
    displayTwo.classList.remove('green', 'red')

})

gameRound.addEventListener('change', function (){
    const value =parseInt(gameRound.options[gameRound.selectedIndex].value);
    winningScore=value
})

