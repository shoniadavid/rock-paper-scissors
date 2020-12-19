const buttons = document.querySelectorAll(".pick");
//const scoreEl = document.getElementById("score");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const choices  = ["paper", "scissors", "rock"];
const selection = document.getElementById('selection');
const replay = document.getElementById("replay");
const user_selection = document.getElementById("user-selection");
const computer_selection = document.getElementById("computer-selection");
const wintxt = document.getElementById("wintxt");


const openRules  = document.getElementById("open-rules");
const closeRules  = document.getElementById("close-rules");
const rulesModal  = document.getElementById("rules-modal");
const darkBg = document.getElementById("darken-bg");


let userScore = 0;
let compScore = 0;
let userChoice = undefined;

function pickRandomChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute("data-choice");

        checkWinner();
    })
});


replay.addEventListener("click", () =>{
    main.style.display = "flex";
    selection.style.display = "none";
})


openRules.addEventListener("click", () =>{
    rulesModal.style.display = "flex";
    darkBg.style.display = "block";
})


closeRules.addEventListener("click", () =>{
    rulesModal.style.display = "none";
    darkBg.style.display = "none";
})


/*function updateScore(value){
    score += value;

    scoreEl.innerText = score;
}*/

function updatePlayerScore(){
    userScore++;

    playerScore.innerText = userScore;
}


function updateComputerScore(){
    compScore++;

    computerScore.innerText = compScore;
}


function checkWinner(){
    const computerChoice = pickRandomChoice();

    updateSelection(user_selection, userChoice);
    updateSelection(computer_selection, computerChoice);

    if(userChoice === computerChoice){
        //draw
        wintxt.innerText = "draw";
    }else if(userChoice === "paper" && computerChoice == "rock" 
            ||
            userChoice === "rock" && computerChoice === "scissors"
            ||
            userChoice === "scissors" && computerChoice === "paper"){
        //won
        wintxt.innerText = "you win";
        updatePlayerScore();
       
    }else{
        //lost
        wintxt.innerText = "you lose";
        updateComputerScore();
    }

    //show new scene
    main.style.display = "none";
    selection.style.display = "flex";
}


function updateSelection(selectionEl, choice){
    selectionEl.classList.remove("btn-paper");
    selectionEl.classList.remove("btn-rock");
    selectionEl.classList.remove("btn-scissors");

    const img = selectionEl.querySelector("img");
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}