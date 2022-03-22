let score=0;
const target=3;
const gameScore=document.getElementById('gameScore');
const updateScore =function()
{
    gameScore.innerHTML=score;
}
const isWinner=function()
{
  
    if(score>=target) return true;
    else return false;
}
