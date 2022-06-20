function computerPlay{
    let randInt = Math.random(3);
    switch (randInt){
        case(0):
            return "rock";
            break;
        case(1):
            return "paper";
            break;
        case(2):
            return "scissors";
            break;
    }
}