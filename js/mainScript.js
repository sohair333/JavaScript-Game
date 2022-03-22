// export function data(){
//     let yourName=document.getElementById('myName');
//     if(yourName==null||yourName==""){
//     document.getElementById('name').innerHTML='UnKnown';
//     }
//     else{
//         document.getElementById('name').innerHTML=yourName;
// }
// }

$(function(){

//    var  anim_id;
   var  the_game = function(){
        // console.log('loool');
        egg_down(egg1);
         anim_id= requestAnimationFrame(the_game);
    //    cancelAnimationFrame(anim_id);
    };



    anim_id=requestAnimationFrame(the_game);
});
















