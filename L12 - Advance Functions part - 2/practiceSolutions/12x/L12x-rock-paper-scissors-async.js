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
            intervalId = setInterval(function(){
            let playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
            isAutoPlay = true;
          }else {
            clearInterval(intervalId);
            isAutoPlay = false;
          }  
      }
// ------------Adding addEventListener to Auto Play-----------------------

      const autoPlayButton = document.querySelector('.auto-play-button');
      autoPlayButton.addEventListener('click', ()=>{
        if(autoPlayButton.innerHTML === 'Auto Play'){
          autoPlayButton.innerHTML = 'Stop Playing';
        }else{
          autoPlayButton.innerHTML = 'Auto Play'
        }
        autoPlay();  
      })

      document.addEventListener('keydown', (event)=>{
        if(event.key){
          autoPlay();
        }
      })

      const resetButton = document.querySelector('.reset-score-button');
      const resetConfirmationMessage = document.querySelector('.js-reset-confirmation-message');

//-- they didn't work because html is generated and i am selecting outside
// const yesConfirmationButton = document.querySelector('.js-yes-button'); 
// const noConfirmationButton = document.querySelector('.js-no-button');

resetButton.addEventListener('click', ()=>{
  resetConfirmationMessage.innerHTML = 'Are you sure you want to reset the score <button class="confirmation-button js-yes-button">YES</button> <button class="confirmation-button js-no-button">NO</button>';
  
  //-- this works because html is generated and now we can select the HTML button that we have generated
  const yesConfirmationButton = document.querySelector('.js-yes-button'); 
  const noConfirmationButton = document.querySelector('.js-no-button');
        yesConfirmationButton.addEventListener('click', (event)=>{
          if(event.target.innerHTML === 'YES'){
            score.wins = 0;
            score.ties = 0;
            score.loses = 0;
            localStorage.removeItem('score');
          updateScoreElement();
          }
          resetConfirmationMessage.innerHTML = '';
        });
        noConfirmationButton.addEventListener('click', (event)=>{
          if(event.target.innerHTML){
            resetConfirmationMessage.innerHTML = '';
           }
        });
      });

      document.addEventListener('keydown', (event)=>{
        if(event.key === 'Backspace'){
          score.wins = 0;
          score.ties = 0;
          score.loses = 0;
          localStorage.removeItem('score');
          updateScoreElement();
        }
      });



// ----------------------------------------

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

//    alert(`You Picked ${playerMove}, Computer Picked ${computerMove}, result ${result}
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