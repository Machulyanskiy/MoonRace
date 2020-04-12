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
		rotation++;
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