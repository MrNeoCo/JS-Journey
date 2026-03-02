        let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          loses: 0,
          ties: 0
        };

        updateScoreElement();
        let isAutoPlay = false;
        let intervalId;

      function autoPlay(){
          if(!isAutoPlay){

//-------------implementing arrow functions here in the setInterval---------------- 
            // intervalId = setInterval(function(){
            intervalId = setInterval(() => {
            let playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
            isAutoPlay = true;
          }else {
            clearInterval(intervalId);
            isAutoPlay = false;
          }  
      }

// ------------implementation of addEventListeners---------------------
      const rockButton = document.querySelector('.js-rock-button');
      const paperButton = document.querySelector('.js-paper-button');
      const scissorButton = document.querySelector('.js-scissor-button');
      const resetScoreButton = document.querySelector('.js-reset-score-button');
      const autoPlayButton = document.querySelector('.js-auto-play-button');

      // rockButton.addEventListener('click',playGame('rock')); // becomes ('click', undefined) while it need to be (event, function) event listeners look for these two parameters
      rockButton.addEventListener('click', ()=>{
        playGame('rock');
      });
      paperButton.addEventListener('click', () => {
        playGame('paper');
      })
      scissorButton.addEventListener('click', () => {
        playGame('scissor');
      });

      resetScoreButton.addEventListener('click', () => {
            score.wins = 0;
            score.ties = 0;
            score.loses = 0;
            localStorage.removeItem('score');
            updateScoreElement();
      });

      autoPlayButton.addEventListener('click',()=>{
        autoPlay();
      });


      document.body.addEventListener('keydown', (event) => {
          if(event.key === 'r'){
            playGame('rock');
          }else if(event.key === 'p'){
            playGame('paper');
          }else if(event.key === 's'){
            playGame('scissor');
          }
        });

        function playGame(playerMove){
          const computerMove = pickComputerMove();
          let result = '';
            
          if(playerMove === 'rock'){
              if(computerMove === 'rock')
                {
                  result = 'tie';
                } else if(computerMove === 'scissor')
                {
                  result = 'You Win';
                }else if(computerMove === 'paper')
                {
                  result = 'You Lose';
                }
          }else if(playerMove === 'paper'){

                if(computerMove === 'rock')
                  {
                    result = 'You Win';
                  }else if(computerMove === 'scissor')
                  {
                    result = 'You Lose';
                  }else if(computerMove === 'paper')
                  {
                    result = 'tie';
                  }
          }else if(playerMove === 'scissor'){

                if(computerMove === 'rock')
                  {
                    result = 'You Lose';
                  }else if(computerMove === 'scissor')
                  {
                    result = 'tie';
                  }else if(computerMove === 'paper')
                  {
                    result = 'You Win';
                  }
          }

          if(result === 'You Win'){
            score.wins += 1;
          }else if(result === 'tie'){
            score.ties +=1;
          }else if(result === 'You Lose'){
            score.loses += 1;
          }

          localStorage.setItem('score', JSON.stringify(score));

          updateScoreElement();

          document.querySelector('.js-result').innerHTML = `${result}.`;
          document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" alt="you" class="move-icon">
        <img src="images/${computerMove}-emoji.png" alt="computer" class="move-icon">
        Computer`;

//             alert(`You Picked ${playerMove}, Computer Picked ${computerMove}, result ${result}
// wins: ${score.wins}, ties: ${score.ties}, loses: ${score.loses}`);
        }

        function updateScoreElement(){
          document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, ties: ${score.ties}, loses: ${score.loses}`;
        }

        function pickComputerMove(){
          let computerMove = '';
          let randomNumber = Math.random();
            
            if(randomNumber >= 0 && randomNumber < 1/2)
              {
                computerMove = 'rock';
              }else if(randomNumber >= 1/3 && randomNumber < 2/3)
              {
                computerMove = 'paper';
              }else if(randomNumber >= 2/3 && randomNumber < 1)
              {
                computerMove = 'scissor';
              }

          return computerMove;
        }