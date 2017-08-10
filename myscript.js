$(document).ready(function(){
$('p a').click(function() { 
    
    var clicked_tab = $(this);
    clicked_tab.addClass('active');
    clicked_tab.parent('p').children('a').not(clicked_tab).removeClass('active');
});
 }); 

$('#carousel-generic-example').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

// 
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have ordered " + localStorage.clickcount + " item(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }console.log(clickCounter);
}