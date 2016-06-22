
$(function () {

var $wrapper = $('<div class="wrapper"></div>');
var $form = $('<form class="form" action="#" method="post"></form>');
var $div1 = $('<div class="div1"></div>');
var $div2 = $('<div class="div2"></div>');
var $div3 = $('<div class="div3"></div>');
var $label1 = $('<label for="firstname">Firstname</label>');
var $label2 = $('<label for="lastname">Lastname</label>');
var $label3 = $('<label for="address">Address</label>');
var $input1 = $('<input type="text" id="firstname" content-tooltip="Please provide your first name">');
var $input2 = $('<input type="text" id="lastname" content-tooltip="Please provide also your lastname.">');
var $input3 = $('<input type="text" id="address" content-tooltip="Your home or work address.">');
var $divtip1 = $('<div class="tooltip firstname"></div>');
var $divtip2 = $('<div class="tooltip lastname"></div>');
var $divtip3 = $('<div class="tooltip address"></div>');
var $button = $('<button>Show help</button>');

$('body').append($wrapper);
$('.wrapper').append($form);
$('.form').append($div1);
$('.form').append($div2);
$('.form').append($div3);
$('.div1').append($label1);
$('.div1').append($input1);
$('.div1').append($divtip1);
$('.div2').append($label2);
$('.div2').append($input2);
$('.div2').append($divtip2);
$('.div3').append($label3);
$('.div3').append($input3);
$('.div3').append($divtip3);
$('body').append($button);

    $('.tooltip').hide();

    $('[content-tooltip]').on('mouseenter', function (eventObject) {
        var $contentTooltip = $(this).attr('content-tooltip');
        var $helpId = $(this).attr('id');
        $('.' + $helpId).text($contentTooltip).fadeIn()
    });

    $('[content-tooltip]').on('mouseleave', function () {
        $('.tooltip').hide().text('')
    });

    $('button').text('Show help').insertAfter('form').on('click',function() {
        $('[content-tooltip]').each(function() {
            var $contentTooltip = $(this).attr('content-tooltip');
            var $helpId = $(this).attr('id');
            $('.' + $helpId).text($contentTooltip).fadeIn()
        })
    });
});
