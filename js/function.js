$(document).on('mousemove',function(e){
    basket.css('left',e.pageX);
});
function egg_down(egg)
{
    egg_current_poistion=parseInt(egg.css('top'));
    egg.css('top',egg_current_poistion +2);
    
}