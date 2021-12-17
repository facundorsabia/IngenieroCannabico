//To Top Button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});

// Initiate the wowjs
    new WOW().init();


//Parallax2
	var image = document.getElementsByClassName('capasuperior');
	new simpleParallax(image, {
		delay: .6,
		transition: 'cubic-bezier(0,0,0,1)'
	});




//Contact Form

const $form = document.querySelector("#form")

$form.addEventListener("submit", handleSubmit);


const $newsletterform = document.querySelector("#newsletterform")

$newsletterform.addEventListener("submit", handleSubmit);

async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action,{
    method: this.method, 
    body: form, 
    headers: {
      "Accept": "application/json"
    }
  })
  if (response.ok){
    this.reset()
    console.log("Gracias por contactarme, te escribire pronto");
  }
}


//Carrousel Swiper

var swiper = new Swiper(".mySwiper", {
	effect: "flip",
	grabCursor: true,
	pagination: {
	  el: ".swiper-pagination",
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

//No poner nada aqui debajo, todo debe estar arriba del carrousel ya que existe un error de consola