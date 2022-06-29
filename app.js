const p1 = {
    score:0,
    button: document.querySelector('.playerOne'),
    display: document.querySelector('.displayOne')
}

const p2 ={
    score:0,
    button: document.querySelector('.playerTwo'),
    display: document.querySelector('.displayTwo')
}

const resetBt = document.querySelector('.reset')
const gameRound = document.querySelector('#gameRounds')

let winningScore = 8
let isGameOver = false

function updateScore(player,opponent){
      if(!isGameOver){
          player.score += 1;
          if(player.score === winningScore){
              isGameOver = true
              player.display.classList.add('green')
              opponent.display.classList.add('red')   
          }
          player.display.textContent = player.score
      }
}

p1.button.addEventListener('click', function(){
    updateScore(p1,p2)  
})

p2.button.addEventListener('click', function () {
    updateScore(p2,p1)
})

function resetScores (){
     isGameOver = false
     for(let p of [p1,p2]){
        p.score=0
        p.display.textContent = 0
        p.display.classList.remove('green', 'red')
     }    
}
gameRound.addEventListener('change', function (){
    // const value =parseInt(gameRound.options[gameRound.selectedIndex].value);
    let value = parseInt(this.value)
    winningScore=value
    resetScores()
})
resetBt.addEventListener('click', resetScores)
