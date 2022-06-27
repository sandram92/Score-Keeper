const buttonOne = document.querySelector('.playerOne')
const buttonTwo = document.querySelector('.playerTwo')

const displayOne = document.querySelector('.displayOne')
const displayTwo = document.querySelector('.displayTwo')



let winningScore = 5
let playerOne = 0
let playerTwo = 0

buttonOne.addEventListener('click', function(){
    
    playerOne +=1
    displayOne.textContent = playerOne
})

buttonTwo.addEventListener('click', function () {
    playerTwo +=1
    displayTwo.textContent = playerTwo
})