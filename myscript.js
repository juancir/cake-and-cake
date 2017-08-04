$(document).ready(function(){
$('p a').click(function() { 
    
    var clicked_tab = $(this);
    
    // TODO Complete the next line to add the active class to the clicked tab: 
    clicked_tab.addClass('active');
    
    // TODO Complete the next line to remove the active class from the rest:
    clicked_tab.parent().children('a').not(clicked_tab).removeClass('active');
});
 });