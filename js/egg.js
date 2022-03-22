const eggSpeed=4;
class Egg{
    #body;
    #conatiner;
    #basket;
    #fallingInterval;
    constructor()
    {
        this.#conatiner=document.getElementById('gameplay');
        this.#body=document.createElement('img');
        this.#basket=document.getElementById('basketImage');
        this.#body.className="GameEgg";
        this.#body.setAttribute('src','../images/egg.png');
        this.#body.style.left=this.#generateRandomLeftPosition()+'px';
        this.#conatiner.prepend(this.#body);
        this.#startFallingEgg();
    }
    #generateRandomLeftPosition()
    {
        let min=20;
        let max =this.#conatiner.offsetWidth-45;
        let randomLeft=(Math.random()*(max-min))+min;
        return randomLeft;
    }

    #startFallingEgg()
    {
        this.#fallingInterval=setInterval(()=>{
            let eggTop=this.#body.offsetTop;
            eggTop+=eggSpeed;
            this.#body.style.top=eggTop+'px';
            let basketTop=this.#basket.offsetTop;
            //check for rearch the basket
            if(eggTop>basketTop+this.#basket.offsetHeight-29)
            {
                this.#stopFalling();
                
            }

        },30);
    }
    #stopFalling()
    {
       
        clearInterval(this.#fallingInterval);
    

        //catch egg
         let eggLeftP=this.#body.offsetLeft;
         let eggRight=eggLeftP+this.#body.offsetWidth;
         let basketLeft=this.#basket.offsetLeft;
         let basketRight=basketLeft+this.#basket.offsetWidth;
         if(eggLeftP>basketLeft&&eggRight<basketRight)
         {
           
            score++;
            updateScore();
            this.#body.remove();

         }
         else{
             console.log('the egg break out');
             this.#body.setAttribute("src",'../images/bullseye1.png');
             setTimeout(()=>{
                this.#body.remove();
             },3000);
             
             
         }


        } 
      distroy(){
          this.#body.remove();
      }  
}