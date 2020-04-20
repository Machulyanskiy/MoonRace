console.log("claseka");

const DICTIONARY = {
	"program" : {
			"ua" : "Про Moon Race",
			"en" : "About Moon Race"
	},
	"locations" : {
			"ua" : "Терен фестивалю",
			"en" : "Area"
	},
	"support" : {
			"ua" : "Підтримай нас",
			"en" : "Support us"
	},
	"contact" : {
			"ua" : "Контакти",
			"en" : "Contacts"
	},
	"registration" : {
			"ua" : "Реєстрація райдерів",
			"en" : "Registration for riders"
	},
	"ticket" : {
			"ua" : "Купити квиток",
			"en" : "Tickets"
	},
	"date-note" : {
			"ua" : "*можливі зміни #самізнаєтечому",
			"en" : "*changes are possible #youknowwhy"
	},
	"welcome-dates" : {
			"ua" : "19 - 21 червня 2020",
			"en" : "June 19 - 21, 2020"
	},
	"welcome-description-1" : {
		"ua" : "Фестиваль лонгбордингу із змаганнями, схилами, слайдами та інопланетною вечіркою. Приєднуйся!",
		"en" : "Longboard festival with contests, hills, slides and extraterrestrial party. Join us!"
	},
	"welcome-description-2" : {
		"ua" : "та інопланетною вечіркою. Приєднуйся!",
		"en" : "and extraterrestrial party. Join us!"
	},
	"rider-price" : {
			"ua" : "За ціною 200 грн",
			"en" : "7 EUR"
	},
	"ticket-price" : {	
			"ua" : "За ціною 420 грн",
			"en" : "15 EUR"
	},
	"video-title" : {
			"ua" : "Про Moon Race",
			"en" : "About Moon Race"
	},
	"video-description" : {
			"ua" : "Найкосмічніша лонгборд подія літа, що вчетверте пройде серед пагорбів села Круглик Київської області. Туди злетяться астронавти з усієї галактики, щоб повеселитись і позмагатись у мистецтві швидкісних та стильних спусків з даунхілів.",
			"en" : "The most cosmic longboard event in Ukraine will take place in the hills of Kruhlyk, 30 km away from Kyiv, for the fourth time. Astronauts from all around the galaxy will gather here to have fun and compete in the arts of speed and stylish downhill rides."
	},
	"activity-title" : {
			"ua" : "Що тебе очікує?",
			"en" : "What to expect?"
	},
	"downhill-title" : {
			"ua" : "Даунхіл",
			"en" : "DOWNHILL"
	},
	"downhill-description" : {
			"ua" : "Змагання за титул підкорювача швидкості в категоріях аматор та про.",
			"en" : "Contest for the title of the King of speed in Amateur and Pro categories."
	},
	"freeride-title" : {
			"ua" : "Фрірайд",
			"en" : "FREERIDE"
	},
	"freeride-description" : {
			"ua" : "Скажена швидкість, слайди та визначення власника найконтрольованіших коліс.",
			"en" : "Contest for those who’ve got the slides and the style."
	},
	"fun-title" : {
			"ua" : "Фанові змагання",
			"en" : "MORE CONTESTS"
	},
	"fun-description" : {
			"ua" : "Death Race, Bowling Slide, баланс борд, слеклайн і ще купа всього.",
			"en" : "Death Race, Bowling Slide, Balance Board, Slackline and many more."
	},
	"party-title" : {
			"ua" : "Гучна вечірка",
			"en" : "COSTUME PARTY"
	},
	"party-description" : {
			"ua" : "Ввірвемось так, щоб нас почули на Місяці!",
			"en" : "This party will be heard on the Moon!"
	},
	"other-activity-title" : {
			"ua" : "Насичена програма",
			"en" : "WORKSHOPS"
	},
	"other-activity-description" : {
			"ua" : "І не тільки! Подивимось скейт-відео, навчимось крафтити, шейпити, флексити і чілити.",
			"en" : "And more! We will watch skate videos, learn how to craft, shape, flex and chill."
	},
	"groups-title" : {
			"ua" : "Музику гратимуть",
			"en" : "Who will play?"
	},
	"kraken-description" : {
			"ua" : "Прибульці, які щороку висаджуються на Moon Race. Психоделічні хвилі їхнього сьорф-року захоплять кондроль над твоїм розумом і змусять несамовито танцювати!",
			"en" : "The aliens that come to Moon Race every year. Psychedelic waves of their surf-rock will take control over your mind and make you dance fiercely!"
	},
	"mock-group-description" : {
			"ua" : "Чекаємо на повідомлення з Місяця. Щойно отримаємо, інформація про наступного виконавця з’явиться тут.",
			"en" : "We are waiting for a massage from the Moon. As soon as we have it, the information about the next band will be here."
	},
	"locations-title" : {
			"ua" : "Локації",
			"en" : "Area"
	},
	"scene-title" : {
			"ua" : "Сцена",
			"en" : "Stage"
	},
	"scene-description" : {
			"ua" : "Центр тяжіння території Moon Race, де пройде вечірка і нагородження.",
			"en" : "Center of gravity of Moon Race where the party and award ceremony will be held."
	},
	"food-title" : {
			"ua" : "Фуд-корт",
			"en" : "Food court"
	},
	"food-description" : {
			"ua" : "Смачні вегетаріанські сніданки, обіди і вечері для справжніх космонавтів. Вартість харчування не входить у вартість квитка.",
			"en" : "Tasty vegetarian breakfasts, lunch and dinners for real astronauts. The meals are not included in the ticket price."
	},
	"camp-title" : {
			"ua" : "Кемп",
			"en" : "Camp"
	},
	"camp-description" : {
			"ua" : "Затишний дубовий гай зі слеклайном, ліхтариками, гамаками і місцем під ватру чекає на твій намет.",
			"en" : "A place in oaks with slackline, fairy lights, hammocks and fireplace is waiting for your tent."
	},
	"art-title" : {
			"ua" : "Арт-зона",
			"en" : "ART-ZONE"
	},
	"art-description" : {
			"ua" : "Божевільна майстерня для творчого спілкування крафтсменів і крафтсменок, майстер-класів і майструвань.",
			"en" : "Crazy workshop for creative communication between craftsmen and craftswomen, workshops and crafting."
	},
	"chill-title" : {
			"ua" : "Чіл-зона",
			"en" : "CHILL-ZONE"
	},
	"chill-description" : {
			"ua" : "Місце, де тобі буде затишно і чілово.",
			"en" : "A place to feel cozy and chill."
	},
	"info-title" : {
			"ua" : "Інфоточка",
			"en" : "INFOPOINT"
	},
	"info-description" : {
			"ua" : "Портал в Moon Race. Тут можна знайти мерч, квитки, розетку і карту фестивалю.",
			"en" : "The portal to Moon Race. You will find here merch, tickets, electricity for your phone and the map of the festival."
	},
	"support-title" : {
			"ua" : "Підтримка",
			"en" : "Support"
	},
	"support-description" : {
			"ua" : "Moon Race це некомерційний фестиваль, організований волонтерами лонгбордистами ти можеш стати членом нашої команди або підтримати нас фінансово",
			"en" : "Moon Race is a non-profit festival organized by volunteer volunteers you can join our team or support us financially"
	},
	"volunteer" : {
			"ua" : "Стати волонтером",
			"en" : "Volunteer"
	},
	"volunteer-describe" : {
			"ua" : "Допоможи при підготовці фестивалю, його розгортанні та згортанні. Для волонтерів вхід безкоштовний.",
			"en" : "Help us prepare, setup the festival and wrap it up. Volunteer for 4 hours a day during Moon Race and have fun for the rest 20. Free enter for volunteers."
	},
	"donate" : {
		"ua" : "Задонать по саму рампу!",
		"en" : "Donate up to the ramp!"
	},
	"donate-describe" : {
		"ua" : "Допоможи нам зібрати гроші, щоб провести Moon Race 4/2020 на повну!",
		"en" : "Help us to collect the money to make Moon Race 4/2020 lit!"
	},
	"contacts-title" : {
		"ua" : "Контакти",
		"en" : "Contacts"
	},
	"action-note" : {
		"ua" : "Зареєстрованим райдерам квиткок за спеціальною ціною.",
		"en" : "Special ticket price for registered riders."
	},
	"contacts-faq" : {
		"ua" : "Є питання? Напиши нам!",
		"en" : "Got any questions? Write us a letter!"
	},
	"contacts-follow" : {
		"ua" : "Слідкуй за останніми новинами Moon Race",
		"en" : "Follow Moon Race for the latest updates"
	}
};

$(function() {
	$('#lang-en').click(() => {
		$('.text-translation').each(function(index, elem) {
			console.log($(elem).data('text'));
			console.log(DICTIONARY[$(elem).data('text')].en);
			if (DICTIONARY[$(elem).data('text')].en)
				$(elem).text(DICTIONARY[$(elem).data('text')].en);
		});
	});

	$('#lang-ua').click(() => {
		$('.text-translation').each(function(index, elem) {
			if (DICTIONARY[$(elem).data('text')].ua)
				$(elem).text(DICTIONARY[$(elem).data('text')].ua);
		});
	});

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
		/* const logoRider = document.getElementById('logo-rider');
		console.log('logoRider ', logoRider)
		console.log('logoRider.style ', logoRider.style)
		console.log('window.getComputedStyle(logoRider,null) ', window.getComputedStyle(logoRider,null)); */
		// rotation += 2;

		//------prod version-------
		rotation += 3;
		rotationStr = `rotate(${rotation}deg)`;
		rider.css({
			"-webkit-transform": rotationStr,
			"-moz-transform": rotationStr,
			"-ms-transform": rotationStr,
			"-o-transfrom": rotationStr,
			"transform": rotationStr
		});
		//-------------


		//$('#logo-rider').css({"transform":"none"})
		/* $('#logo-rider').animate({ '-moz-transform':'rotate(' + rotation + 'deg)'}, 600);
		$('#logo-rider').animate({ 'transform':'rotate(' + rotation + 'deg)'}, 600); */
		/* $('#logo-rider').animate({ 'transform':'rotate(' + rotation + 'deg)'}, 600);
		const logoRider = document.getElementById('logo-rider');
		console.log('logoRider.style ', logoRider.style.transform)
		console.log('window.getComputedStyle(logoRider,null) ', window.getComputedStyle(logoRider,null)); */
		// console.log($('#logo-rider'));
		// console.log($('#logo-rider').style);
	});
	
	const navHeight = $('#nav-panel').height();

	const navbarCollapse = function() {
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

    $('#partners-slider').slick({
		// adaptiveHeight: true,
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
			// $('.pin-active').hide();
			//
			// const iconBlock = $(this).parent();
			// iconBlock.find('.pin-active').show();
			// iconBlock.find('.pin-default').hide();
			const pinGroup = $(this).parents('.pin-group');
			console.log('// $(this) ', $(this), $('.pin-group').not(pinGroup))
			pinGroup.addClass('map-pin-active');
			$('.pin-group').not(pinGroup).removeClass('map-pin-active');

			const activeLocation = $(this).parents('.pin-group').data('id');
			console.log('activeLocation ', $(`#${activeLocation}`));
			$(`#${activeLocation}`).show();
			$('.location-description-container').not(`#${activeLocation}`).hide();
		});

		/* $('.map-pin').click(function() {
			$('#scene-pin-group').addClass('map-pin-active');
		}); */

		$('#menu-btn').click(function() {
			$('#navbarResponsive').toggle();
		});

		$('.nav-item').click(function() {
			if ($('#navbarResponsive').is(":visible")) {
				$('#navbarResponsive').hide();
			}
		});

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
