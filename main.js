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
    Message.innerText = "Game was draw!";
    Message.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,compChoice) => {
    compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    if (userWin) {
    Message.innerText = `You win! ${userChoice} beats  ${compChoice}`;
    Message.style.backgroundColor = "green";
    yourscore++
    if (yourscore === 10) {
        Message.innerText = `You win! ${userChoice} beats  ${compChoice}`;
        Msg.innerText = "Congratulations You won! Game Over."
        Msg.style.backgroundColor = "green"
        Msg.style.visibility = "visible"
        Message.style.backgroundColor = "green";
        yourscore = 0;
        compscore = 0;
    }
} else {
    Message.innerText = `You lost! ${compChoice} beats  ${userChoice}`;
    Message.style.backgroundColor = "red";
    compscore++
    if (compscore === 10) {
        Message.innerText = `You Lost! ${compChoice} beats  ${userChoice}`;
        Msg.innerText = "Game Over!"
        Msg.style.backgroundColor = "red"
        Msg.style.visibility = "visible"
        Message.style.backgroundColor = "red";
        yourscore = 0;
        compscore = 0;
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
        Yourscore.innerText = yourscore;
        Compscore.innerText = compscore;
    });
});