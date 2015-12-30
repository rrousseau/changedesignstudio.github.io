$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.workblocks').offset().top - ($(window).height() / 1.35)) {

		$('.workblocks figure').each(function(i){

			setTimeout(function(){
				$('.workblocks figure').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});

	}

});
