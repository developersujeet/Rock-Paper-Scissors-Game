let yourscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const Msg = document.querySelector(".msg");
const Yourscore = document.querySelector(".your-score");
const Compscore = document.querySelector(".comp-score");
const Message = document.querySelector("#message");
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const rdmIdx = Math.floor(Math.random() * 3);
    return options[rdmIdx];
}
const drawGame = () => {
    Message.innerText = "Its a draw!";
    Message.style.backgroundColor = "#081b31";
}
const reGame = () => {
    yourscore = 0;
    compscore = 0;
    Msg.style.visibility = "hidden";
    updateDisplay();
    Message.innerText = "Play your move"
    Message.style.backgroundColor = "#081b31"
    enableChoices();
}
const disableChoices = () => {
    choices.forEach(choice => choice.style.pointerEvents = "none");
};

const enableChoices = () => {
    choices.forEach(choice => choice.style.pointerEvents = "auto");
};
const updateDisplay = () => {
    Yourscore.innerText = yourscore;
    Compscore.innerText = compscore;
    
}
const showWinner = (userWin,userChoice,compChoice) => {
    compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    if (userWin) {
    Message.innerText = `You win! ${userChoice} beats ${compChoice}`;
    Message.style.backgroundColor = "green";
    yourscore++;
    
    if (yourscore === 10) {
        Msg.innerText = "Congratulations! You won! Game Over.";
        Msg.style.backgroundColor = "green";
        Msg.style.visibility = "visible";
        disableChoices();
    }
} else {
    Message.innerText = `You lost! ${compChoice} beats ${userChoice}`;
    Message.style.backgroundColor = "red";
    compscore++;
    
    if (compscore === 10) {
        Msg.innerText = "Game Over.";
        Msg.style.backgroundColor = "red";
        Msg.style.visibility = "visible";
        disableChoices();
    }
}

}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
           userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        updateDisplay();
    });
});