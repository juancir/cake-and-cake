$(document).ready(function(){
$('p a').click(function() { 
    
    var clicked_tab = $(this);
    clicked_tab.addClass('active');
    clicked_tab.parent('p').children('a').not(clicked_tab).removeClass('active');
});
 }); 

$('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});