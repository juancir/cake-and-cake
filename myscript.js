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

// $(window).on('resize', function() {
//     if($(window).height() > 768) {
//         $('#gallery').addClass('gal');
//         $('#gallery').removeClass('gal');
//     }else{
//         $('#gallery').addClass('gal');
//         $('#gallery').removeClass('gal');
//     }
// })









// $(document).ready( function () { 
// $(".modal-footer #place_order").click(function(){
//     alert("Your order has been placed!");
// });
// });