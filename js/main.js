console.log("claseka");

let rotation = 0;

$(function() {
	$('#lang-en').click(function() {
		$('.text-translation').each(function(index, elem) {
			if (DICTIONARY[$(elem).data('text')].en)
				$(elem).text(DICTIONARY[$(elem).data('text')].en);
		});
	});

	$('#lang-ua').click(function() {
		$('.text-translation').each(function(index, elem) {
			if (DICTIONARY[$(elem).data('text')].ua)
				$(elem).text(DICTIONARY[$(elem).data('text')].ua);
		});
	});

	$('.place-img-block').hover(
		function() {
			$(this).find('.place-front-view').show();
		},
		function(){
			$(this).find('.place-front-view').hide();
		}
	);

	$('.place-img-block').click(function() {
		$('.place-img-block').find('.default').toggle();
		$('.place-img-block').find('.change').toggle();
	});

	let rider = $('#logo-rider');
	let rotationStr;
	$(window).scroll(function() {
		rotation += 3;
		rotateRider(rider, rotation, rotationStr);
	});
	
	const navHeight = $('#nav-panel').height();

	const navbarCollapse = function() {
		if (window.scrollY > navHeight) {
		  	$("#main-nav").addClass('main-nav-tiny');
		} else {
			$("#main-nav").removeClass('main-nav-tiny');
		}
	};

	navbarCollapse();

	$(window).scroll(navbarCollapse);

    $('#partners-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
		dots: true,
		speed: 2000,
		pauseOnFocus: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		  ]
    });

	$('#groups-container').slick({
		arrows: false,
		dots: true
	});

	function changeLocation(elem) {
		const pinGroup = $(elem).parents('.pin-group');
		$('.pin-group').removeClass('map-pin-active');
		$(elem).addClass('map-pin-active');

		console.log(' pin ', elem);
		
		const activeLocation = $(elem).data('class');
		console.log(' activeLocation ', activeLocation);
		$(`.${activeLocation}`).css('display', 'inline-flex');
		$('.location-description-container').not(`.${activeLocation}`).css('display', 'none');
	}

	$('.pin-group').on('click touchstart', function() {
		changeLocation(this);
	});

	$('#page-top').children().not('#main-nav').click(function() {
		closeMenu();
	});

	$('#menu-btn').click(function() {
		$('#navbarResponsive').toggle();
		$(this).toggleClass('menu-btn-active');
		$('#blank-rectangle').toggleClass('blank-rectangle-overflow');
	});

	$('.nav-item').click(function() {
		if ($('#navbarResponsive').is(":visible")) {
			$('#navbarResponsive').hide();
		}
	});

	$('.lang-item').click(function() {
		$('#lang-ua').toggle();
		$('#lang-en').toggle();
	});
});

function closeMenu() {
	if ($('#menu-btn').hasClass('menu-btn-active')) {
		$('#navbarResponsive').toggle();
		$('#menu-btn').removeClass('menu-btn-active');
		$('#blank-rectangle').addClass('blank-rectangle-overflow');
	}
}

function scrollToSection(sectionId) {
	const element = $(sectionId);
	const headerHeight = sectionId === '#page-top' ? 0 : $('#main-nav').height();
	const offsetPosition = element[0].offsetTop - headerHeight;

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});

	closeMenu();
}

function rotateRider(rider, rotationDeg, rotationStr) {
	rotationStr = `rotate(${rotationDeg}deg)`;
	rider.css({
		"-webkit-transform": rotationStr,
		"-moz-transform": rotationStr,
		"-ms-transform": rotationStr,
		"-o-transfrom": rotationStr,
		"transform": rotationStr
	});
}

function logoClick() {
	scrollToSection('#page-top');
}

function closeCoronaNews() {
	$('#corona-news').addClass('hidden');
	$('#corona-news').removeClass('visible');
}