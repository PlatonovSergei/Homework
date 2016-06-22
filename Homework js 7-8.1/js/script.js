$(function() {

var $tabs = $('<ul class="tabs"></ul>');
var $li1 = $('<li class="li1"><a class="a1" href="#" name="tab1">Nunc tincidunt</a></li>');
var $li2 = $('<li class="li2"><a class="a2" href="#" name="tab2">Proin dolor</a></li>');
var $li3 = $('<li class="li3"><a class="a3" href="#" name="tab3">Aenean lacinia</a></li>');
var $tabsContent = $('<div class="content"></div>');
var $tabContent1 = $('<div class="tab tab1"></div>');
var $tabContent2 = $('<div class="tab tab2"></div>');
var $tabContent3 = $('<div class="tab tab3"></div>');
var $p1 = $('<p class="tabsP1">Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci.Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>');
var $p2 = $('<p class="tabsP2">Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc.Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam.Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc.Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat,tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>');
var $p3 = $('<p classs="tabsP3">Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel  enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium  nec, feugiat nec, luctus a, lacus.  Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla  facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec  mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio.Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo.  Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>');
var $wrapper = ('<div class="wrapper"></div>');

	$('body').append($wrapper);
	$('.wrapper').append($tabs);
	$('.tabs').append($li1);
	$('.tabs').append($li2);
	$('.tabs').append($li3);
	$('.wrapper').append($tabsContent);
	$('.content').append($tabContent1);
	$('.content').append($tabContent2);
	$('.content').append($tabContent3);
	$('.tab1').append($p1);
	$('.tab2').append($p2);
	$('.tab3').append($p3);


    $('.content').find('.tab').hide();
    $('.tabs li:first-child').addClass('actual');
    $('.content .tab1').delay(300).fadeIn();

    $('.tabs a').click(function(event) {
        event.preventDefault();
        if ($(this).closest('li').hasClass('actual')) {
            return
        } else {
            $('.content').find('.tab').animate({ opacity: "hide"}, 300);
            $('.tabs li').removeClass('actual');
            $(this).parent().addClass('actual');
            $('.'+ $(this).attr('name')).delay(300).fadeIn();
        }
    });
});
