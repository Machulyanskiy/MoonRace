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
		console.log(rotationStr);
		rider.css({
			"-webkit-transform": rotationStr,
			"-moz-transform": rotationStr,
			"transform": rotationStr
		});
	});
	
	/* const navbarCollapse = function() {
		console.log(window.scrollY);
		if (window.scrollY > $('#description').offset().top) {
		  $("#mainNav").show();
		} else {
		  $("#mainNav").hide();
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse); */
});