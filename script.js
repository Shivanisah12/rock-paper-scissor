let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const genCompChoice = () =>{
   const options = ["rock","paper","scissor"];
   const ranIdx = Math.floor(Math.random() *3);
   return options[ranIdx]
}

const drawGame = () => {
   // console.log("game was draw")
   msg.innerText = "Game was Draw! Play again";
   msg.style.backgroundColor = "#081b31";


};

const showWinner =  (userWin,userChoice,compChoice) =>{
  if(userWin){
   userScore++;
   userScorePara.innerText = userScore;
   userScore.innerText = userScore;
   // console.log("you win!");
   msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor = "green";

  }else{
   compScore++;
   compScorePara.innerText = compScore;
   // console.log("you lose!");
   msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
   msg.style.backgroundColor = "red";

  }
}

const playGame =(userChoice)=>{
console.log("user Choice =",userChoice)
const compChoice = genCompChoice();
console.log("comp choice =",compChoice)

if(userChoice === compChoice){
   drawGame();
}
else{
   let userWin = true;
   if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
   }
   else if(userChoice === "paper"){
      userWin = compChoice ==="scissor" ? false : true;
   }
   else{
      userWin = compChoice === "rock" ? false : true;
   }
   showWinner(userWin,userChoice,compChoice);
}
 };

choices.forEach((choice) => {
    // console.log(choice);
   choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    // console.log(choiceId)
    playGame(userChoice);
   });
});

