function computerPlay(){
    let randInt = Math.random(0,3);
    switch (randInt){
        case(0):
            return 'rock';
        case(1):
            return 'paper';
        case(2):
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'tie';
    }
    if (playerSelection == 'paper' && computerSelection == 'paper'){
        return 'tie';
    }
    if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'tie';
    }
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'lose';
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'win';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'lose';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'win';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'lose';
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'win';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter player selection: ").toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        switch (result){
            case 'tie':
                console.log( `You tied! ${playerSelection} ties with ${computerSelection}.
                Your score: ${playerScore}
                Computer score: ${computerScore}`);
            case 'win':
                console.log( `You win! ${playerSelection} beats ${computerSelection}.
                Your score: ${playerScore}
                Computer score: ${computerScore}`);
            case 'lose':
                console.log( `You lose! ${playerSelection} beats ${computerSelection}.
                Your score: ${playerScore}
                Computer score: ${computerScore}`);
        }
    }
}
        
