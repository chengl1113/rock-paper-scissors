function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    
    switch(rand){
        case (0):
            return 'rock';
            
        case (1):
            return 'paper';
            
        case (2):
            return 'scissors';
            
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toString();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'tie';
    }
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'lose';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'win';
    }
    //-----------------------------------------------
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'win';
    }
    if (playerSelection == 'paper' && computerSelection == 'paper'){
        return 'tie';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'tie';
    }
    //-----------------------------------------------
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'lose';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'win';
    }
    if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'tie';
    }
}

function game(playerSelection){
    let computerSelection;
    let result;
    const container = document.querySelector('#container');
    //for (let i = 0; i < 5; i++){
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        const content = document.createElement('div');
        content.classList.add('content');
        switch (result) {
            case ('win'):
                playerScore++;
                content.textContent = `Round ${round} : you chose ${playerSelection}
                You won! ${playerSelection} beats ${computerSelection}
                Player score: ${playerScore}
                Computer score: ${computerScore}`;
                container.appendChild(content);
                round++;
                break;
            case ('lose'):
                computerScore++;            
                content.textContent = `Round ${round} : \nyou chose ${playerSelection}
                You lost! ${computerSelection} beats ${playerSelection} 
                Player score: ${playerScore} 
                Computer score: ${computerScore}`;
                container.appendChild(content);
                round++;
                break;
            case ('tie'):
                content.textContent = `Round ${round} : you chose ${playerSelection}
                You tied! ${playerSelection} ties with ${computerSelection}
                Player score: ${playerScore}
                Computer score: ${computerScore}`;
                container.appendChild(content);
                round++;
                break;
        }
    //}
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.outerText);
    })
});
let round = 1;
let playerScore = 0;
let computerScore = 0;
game();