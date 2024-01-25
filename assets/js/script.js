/**
* Author: sanya tabanoyom
*/
function hexToRgb(hexColor) {
	var bigint = parseInt(hexColor.slice(1), 16);
	var r = (bigint >> 16) & 255;
	var g = (bigint >> 8) & 255;
	var b = bigint & 255;
	return r + ", " + g + ", " + b;
}
function rgbToHex(rgb) {
	var values = rgb.split(',').map(function(value) {
			return parseInt(value.trim());
	});
	return '#' + (1 << 24 | values[0] << 16 | values[1] << 8 | values[2]).toString(16).slice(1);
}
function getColorTheme() {
	var r = document.querySelector(':root');
  var rs = getComputedStyle(r);
	return rs.getPropertyValue('--bs-primary-rgb');
}
function setColorTheme(rgb) {
	var r = document.querySelector(':root');
	r.style.setProperty('--bs-primary-rgb', rgb);
}

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

	/**
	 * Back to top button
 	*/
	let backtotop = select('.back-to-top')
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add('active')
			} else {
				backtotop.classList.remove('active')
			}
		}
		window.addEventListener('load', toggleBacktotop)
		onscroll(document, toggleBacktotop)
		backtotop.addEventListener("click", function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});
	}

	/**
	* Animation on scroll
	*/
	window.addEventListener('load', () => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		})
	});

	/**
	* init swiper
	*/
	if (select('.swiper')) {
		const swiper = new Swiper('.swiper', {
			speed: 600,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			}
		});	
	}

	/**
	 * Initiate gallery lightbox 
	 */
	if (select('.gallery-lightbox')) {
		const galleryLightbox1 = GLightbox({
			selector: '.gallery-lightbox'
		});
	}

  /**
   * Parallax
   */
	if (select('.testimonials')) {
		var well_lax = $('.testimonials');
	  well_lax.parallax("100%",0.4);
	}
})()
