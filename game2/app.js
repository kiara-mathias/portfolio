let choices = document.querySelectorAll(".choice");
let output = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

const genCompChoice=()=>{
    const options = ["rock","paper","scissors"]
    let Idx = Math.floor(Math.random()*3);
    return options[Idx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       console.log("you win!");
       output.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
       output.style.backgroundColor ="green";
       userScore++;
       userScorePara.innerText = `${userScore}`;
    }else{
        console.log("you lose");
        output.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        output.style.backgroundColor ="red";
        compScore++;
       compScorePara.innerText = `${compScore}`;
    }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    let compChoice = genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        output.innerText = "Its a draw.Try again"
        console.log("draw.");

        output.style.backgroundColor ="rgb(6, 0, 32)";
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors , paper
           userWin =compChoice === "paper"? false : true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin = compChoice === "scissors"?false:true;
        }else{
            //rock , paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner( userWin , userChoice,compChoice );
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
  
    });
})