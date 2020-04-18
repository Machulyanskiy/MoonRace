console.log("claseka");
$(function() {
	console.log("Ty cho startuesh?");
	$('.place-img-block').hover(
		() => {
			$(this).find('.place-front-view').show();
		},
		() => {
			$(this).find('.place-front-view').hide();
		}
	);
	
	$('.place-img-block').click(function() {
		$('.place-img-block').find('.default').toggle();
		$('.place-img-block').find('.change').toggle();
	});
	
	let rotation = 0;
	let rider = $('#logo-rider');
	let rotationStr;
	$(window).scroll(() => {
		console.log('11',rotation )
		rotation++;
		console.log('22',rotation )
		rotation*5;	
		console.log('33',rotation )
		rotationStr = `rotate(${rotation}deg)`;
		// console.log(rotationStr);
		rider.css({
			"-webkit-transform": rotationStr,
			"-moz-transform": rotationStr,
			"transform": rotationStr
		});
	});

	const navHeight = $('#nav-panel').height();
	
	const navbarCollapse = function() {
		// console.log(window.scrollY);
		if (window.scrollY > navHeight) {
		  	$("#main-nav").addClass('main-nav-tiny');
		} else {
			$("#main-nav").removeClass('main-nav-tiny');
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	/* console.log($('#slick-test'));
	$('#slick-test').slick({
		slidesToScroll: 1,
		dots: true,
		centerMode: true
	  }); */

	  $('#partners-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: true
	  });

	  $('#groups-container').slick({
		arrows: false,
		dots: true
	  });

		$('.map-pin').click(function() {
			$('.pin-active').hide();

			const iconBlock = $(this).parent();
			iconBlock.find('.pin-active').show();
			iconBlock.find('.pin-default').hide();
			/* .addClass('map-pin-active');
			$('.map-pin').not(this).removeClass('map-pin-active');
		
			const activeLocation = $(this).data('class');
			$(`#${activeLocation}`).show();
			$('.location-description-container').not(`#${activeLocation}`).hide(); */
		});

		$('#menu-btn').click(function() {
			$('#navbarResponsive').toggle();
		})

	  	const movementStrength = 25;
		const height = movementStrength / $(window).height();
		const width = movementStrength / $(window).width();
		$("#top-image").mousemove(function(e){
		          const pageX = e.pageX - ($(window).width() / 2);
		          const pageY = e.pageY - ($(window).height() / 2);
		          const newvalueX = width * pageX * -1 - 25;
		          const newvalueY = height * pageY * -1 - 50;
		          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
		});
});

function scrollToSection(sectionId) {
	const element = $(sectionId);
	const headerHeight = sectionId === '#page-top' ? 0 : $('#main-nav').height();
	const offsetPosition = element[0].offsetTop - headerHeight;
	
	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});
}