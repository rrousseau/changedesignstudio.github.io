$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.abouttextimage').offset().top - ($(window).height() / 1.9)) {

		$('.abouttextimage figure').each(function(i){

			setTimeout(function(){
				$('.abouttextimage figure').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});

	}

});