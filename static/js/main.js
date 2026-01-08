/*
Author       : Theme-Family
Template Name: Hadi - Kids Learning Center Landing Page Template
Version      : 1.0
*/
(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
			$(window).load(function() { 
				$(".book_preload").delay(2000).fadeOut(200);
				$(".book").on('click', function() {
					 $(".book_preload").fadeOut(200);
				}) 
			}); 
		/*END PRELOADER JS*/

		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});	
		
		
		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  
		/*END MENU JS*/
        
		//**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('menu-bg');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('menu-bg');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
		 
		  
		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}	
		//**===================Scroll UP ===================**//
		/* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
        // Handle click on toggle search button
        $('.header-search').on('click', function() {
            $('.header-search, .header-search-form').toggleClass('search-open');
            return false;
        });

			/*START ABOUT SLIDER*/
			$(".atf-about-active").owlCarousel({
				margin:1,
				nav:false,
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
			/*END ABOUT SLIDER*/

			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
			
	/*--------------------------------------------------------------
		Counter
      --------------------------------------------------------------*/	
			$('.counter-value').each(function(){
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				},{
					duration: 5500,
					easing: 'swing',
					step: function (now){
						$(this).text(Math.ceil(now));
					}
				});
			});
			
		/*Start course Design*/
			$('#course-slider').owlCarousel({
				margin:3,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					992:{
						items:3
					}
				}
			})

		/*END course Design*/
		
			/*Start gallery Design*/
			$('#gallery-slider').owlCarousel({
				margin:5,
				autoplay:true,
				items: 4,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					992:{
						items:4
					}
				}
			})

		/*END course Design*/
			
			
		/*Start Testimonials LOGO*/
			$('#atf-testimonial-slider').owlCarousel({
				margin:5,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					992:{
						items:2
					}
				}
			})

		/*END Testimonials LOGO*/
			
		/*Start Blog Design*/
			$('#news-slider').owlCarousel({
				margin:3,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					992:{
						items:3
					}
				}
			})

		/*END Blog Design*/
			
			
	/*--------------------------------------------------------------
		Porfolio isotope
      --------------------------------------------------------------*/
 
			// image loaded portfolio init
		
				$('.atf-portfolio-grid').imagesLoaded(function() {
					$('.portfolio-filter').on('click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$grid.isotope({
							filter: filterValue
						});
					});
					var $grid = $('.atf-portfolio-grid').isotope({
						itemSelector: '.grid-item',
						percentPosition: true,
						masonry: {
							columnWidth: '.grid-item',
						}
					});
				});        
					
				// portfolio Filter
				$('.portfolio-filter button').on('click', function(event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			
		//**===================END Porfolio isotope ===================**//	
		
		/* --------------------------------------------------------
					   LightCase jQuery Active
		--------------------------------------------------------- */
					$('a[data-rel^=lightcase]').lightcase({
						transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
						swipe: true,
						maxWidth: 1170,
						maxHeight: 600,
					});
		
		/* --------------------------------------------------------
             Mailchamp
        --------------------------------------------------------- */

		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
	/*--------------------------------------------------------------
		WOW SCROLL SPY
      --------------------------------------------------------------*/	
		 var wow = new WOW({
			  //disabled for mobile
				mobile: false
			});

		wow.init();
		
		
})(jQuery);