$(document).ready(function() {

	var k = 0;

	$('.block').each(function() {
			$(this).data('text', 'Мимо');
	});
	k = Math.floor(Math.random()*5);
	$('.block').eq(k).data('text','Финиш');

	$('.block').on('click', function(event) {
		if ($(this).data('text') == 'Финиш') {
			console.log('Победа!');
			$(this).html($(this).data('text'));
			$(this).html('Попал!');
			$(this).siblings().html('Мимо');
		} else {
			console.log('Промазал!');
			$('.block').each(function() {
				$(this).html($(this).data('text'));
				$(this).data('text', 'Мимо');
			});
			k = Math.floor(Math.random()*5);
			$('.block').eq(k).data('text','Финиш');
		}
	});

});