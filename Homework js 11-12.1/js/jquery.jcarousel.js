(function($) {

  $.fn.jcarousel = function() {
    var left = $('.carousel-arrow-left');
    var right = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    /*var elementsCount = elementsList.find('li').length;*/
    var minimumOffset = - ((elementsList.find('li').length - 5) * pixelsOffset);
    var maximumOffset = 0;

    left.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    right.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });
  }
})(jQuery);
