        let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          loses: 0,
          ties: 0
        };

        updateScoreElement();

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