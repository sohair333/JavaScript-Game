const gameConatiner=document.getElementById("gameplay");
const gameBasket=document.getElementById("basketImage");
const currentPlayer=document.getElementById("currentPlayer");
const gameTimer=document.getElementById("gameTimer");
const scoreControl=document.getElementById('scoreControl');
const ScorePanel=document.getElementById('message');
const Final=document.getElementById('Score');
const tryAgain=document.getElementById('tryAgain');
// const winEffect=new Audio("Sounds/bird.mp3");
// const loseEffect=new Audio("Sounds/goldbird.mp3");
//let basket;
const gameTIme=60;
const eggTime=1600;
let eggInterval;
let gameInterval;
let eggs=[];
let userName;
let counter;

window.addEventListener("DOMContentLoaded",function()
{
    userName=getUsername();
    currentPlayer.innerHTML=userName;
    
    beginGame();
   new Audio("sounds/duck.mp3").play();
   

});
function beginGame()
{
    console.log('started');
    getLastGameDate(userName);
    restAll();
    basket=new basket();

    gameInterval= setInterval(() => {
        counter--;
        gameTimer.innerHTML=counter;
        if(counter==0)
        {
            End();


       
        }

    }, 1000);
    eggInterval=setInterval(() => {
        let egg=new Egg();
        eggs.push(egg);
        
    }, eggTime);

}
function getUsername()
{
    let search=window.location.search;
    if(search)
    {
        search=search.substring(1);
        let parts=search.split('=');
        return parts[1];
    }
   

}
function restAll()
{
    score=0;
    counter=gameTIme;
    eggs=[];
    updateScore ();
    scoreControl.style.display='none';
}

function End()
{
    saveLastGame(userName);
    clearInterval(gameInterval);
            clearInterval(eggInterval);
            eggs.forEach((egg)=>{
                egg.distroy();
            });
    displayResult();
}
function displayResult()
{
    scoreControl.style.display='flex';
    if(isWinner())
    {
        // winEffect.play();
        new Audio("sounds/bumb.mp3").play();
        ScorePanel.innerHTML="Winner";
    }
    else{
        // loseEffect.play();
        new Audio("sounds/bird.mp3").play();
        ScorePanel.innerHTML="LOoser";
    }
    
   
   Final.innerHTML=score;

   
}

tryAgain.addEventListener('click',beginGame);

