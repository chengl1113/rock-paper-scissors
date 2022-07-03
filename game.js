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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let result;
    let round = 1;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your selection: rock, paper, or scissors");
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        switch (result) {
            case ('win'):
                playerScore++;
                console.log(`Round ${round} : you chose ${playerSelection}
                You won! ${playerSelection} beats ${computerSelection}
                Player score: ${playerScore}
                Computer score: ${computerScore}`);
                round++;
                break;
            case ('lose'):
                computerScore++;
                console.log(`Round ${round} : you chose ${playerSelection}
                You lost! ${computerSelection} beats ${playerSelection}
                Player score: ${playerScore}
                Computer score: ${computerScore}`);
                round++;
                break;
            case ('tie'):
                console.log(`Round ${round} : you chose ${playerSelection}
                You tied! ${playerSelection} ties with ${computerSelection}
                Player score: ${playerScore}
                Computer score: ${computerScore}`);
                round++;
                break;
        }
    }
}

game();