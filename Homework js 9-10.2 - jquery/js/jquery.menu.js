
$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(500);
            $(this).children('.sub-menu').children('li').animate({backgroundColor:"#4734EF"}, 1000 );
        },
        function(){
            $(this).children('.sub-menu').slideUp(500);
        }
    );
});
