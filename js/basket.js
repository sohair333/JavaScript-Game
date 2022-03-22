
/*new Audio("sounds/duck.mp4").play();*/
class basket{
    #body;
    #conatiner;
    constructor()
        {
            this.#body=document.getElementById("basketImage");
            this.#conatiner=document.getElementById("gameplay");
            this.#body.style.top=(this.#conatiner.offsetHeight-this.#body.offsetHeight-20)+'px';
          
            this.#setMouseEvent();
            

        }
        #setMouseEvent(){
            this.#conatiner.addEventListener("mouseover",(event)=>{
                let min=5;
                let max=this.#conatiner.offsetWidth-this.#body.offsetWidth-20;
                let newLeft=(event.clientX-this.#body.offsetWidth/2);
                if(newLeft>max) newLeft=max;
                if(newLeft<min) newLeft =min;
                this.#body.style.left=(event.clientX-this.#body.offsetWidth/2)+'px';
                

            });

        }

}