$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.servicesblocks').offset().top - ($(window).height() / 1.2)) {

		$('.servicesblocks figure').each(function(i){

			setTimeout(function(){
				$('.servicesblocks figure').eq(i).addClass('is-showing');
			}, 180 * (i+1));
		});

	}

});

$(function() {
	servicesBelt();
	serv1Load();
	serv2Load();
	serv3Load();
	serv4Load();
	serv5Load();
	serv6Load();
});

function servicesBelt() {

	$('.readmore').click(function(){
		$('.services-container').show(1100);
		$('.servicesblocks-wrap').hide(1100);

		var divPosition = $('#services').offset();

		$('html, body').animate({scrollTop: divPosition.top-49}, "slow");

	});

	$('.services-return').click(function(){
		$('.services-container').hide(1100);
		$('.servicesblocks-wrap').show(1100);

	});

}

function serv1Load() {
	$.ajaxSetup({ cache: false});

	$('.serv1').click(function(){

		var serv1HTML = './assets/serv/serv-1/serv-1.html';
			serv1Title = './assets/serv/serv-1/serv-1title.html';
			serv1Logo = './assets/serv/serv-1/serv-1logo.html';
		$('.serv-load').load(serv1HTML);
		$('.serv-title').load(serv1Title);
		$('.serv-logo').load(serv1Logo);

	});
}

function serv2Load() {
	$.ajaxSetup({ cache: false});

	$('.serv2').click(function(){

		var serv2HTML = './assets/serv/serv-2/serv-2.html';
			serv2Title = './assets/serv/serv-2/serv-2title.html';
			serv2Logo = './assets/serv/serv-2/serv-2logo.html';
		$('.serv-load').load(serv2HTML);
		$('.serv-title').load(serv2Title);
		$('.serv-logo').load(serv2Logo);

	});
}

function serv3Load() {
	$.ajaxSetup({ cache: false});

	$('.serv3').click(function(){

		var serv3HTML = './assets/serv/serv-3/serv-3.html';
			serv3Title = './assets/serv/serv-3/serv-3title.html';
			serv3Logo = './assets/serv/serv-3/serv-3logo.html';
		$('.serv-load').load(serv3HTML);
		$('.serv-title').load(serv3Title);
		$('.serv-logo').load(serv3Logo);

	});
}

function serv4Load() {
	$.ajaxSetup({ cache: false});

	$('.serv4').click(function(){

		var serv4HTML = './assets/serv/serv-4/serv-4.html';
			serv4Title = './assets/serv/serv-4/serv-4title.html';
			serv4Logo = './assets/serv/serv-4/serv-4logo.html';
		$('.serv-load').load(serv4HTML);
		$('.serv-title').load(serv4Title);
		$('.serv-logo').load(serv4Logo);

	});
}

function serv5Load() {
	$.ajaxSetup({ cache: false});

	$('.serv5').click(function(){

		var serv5HTML = './assets/serv/serv-5/serv-5.html';
			serv5Title = './assets/serv/serv-5/serv-5title.html';
			serv5Logo = './assets/serv/serv-5/serv-5logo.html';
		$('.serv-load').load(serv5HTML);
		$('.serv-title').load(serv5Title);
		$('.serv-logo').load(serv5Logo);

	});
}

function serv6Load() {
	$.ajaxSetup({ cache: false});

	$('.serv6').click(function(){

		var serv6HTML = './assets/serv/serv-6/serv-6.html';
			serv6Title = './assets/serv/serv-6/serv-6title.html';
			serv6Logo = './assets/serv/serv-6/serv-6logo.html';
		$('.serv-load').load(serv6HTML);
		$('.serv-title').load(serv6Title);
		$('.serv-logo').load(serv6Logo);

	});
}
