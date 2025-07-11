 AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

// Mobile Menu Toggle
function setupMobileMenu() {
  const $body = $('body');
  const $menuToggle = $('.js-menu-toggle');
  const $mobileMenu = $('.site-mobile-menu');
  
  // Toggle mobile menu
  $menuToggle.on('click', function(e) {
    e.preventDefault();
    $body.tClass('offcanvas-menu');
    $mobileMenu.toggleClass('active');
    
    // Toggle aria-expanded for accessibility
    const expanded = $(this).attr('aria-expanded') === 'true' || false;
    $(this).attr('aria-expanded', !expanded);
    
    // Toggle body scroll lock
    if ($body.hasClass('offcanvas-menu')) {
      $body.css('overflow', 'hidden');
    } else {
      $body.css('overflow', '');
    }
  });
  
  // Close menu when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.site-mobile-menu').length && 
        !$(e.target).closest('.js-menu-toggle').length &&
        $body.hasClass('offcanvas-menu')) {
      $body.removeClass('offcanvas-menu');
      $mobileMenu.removeClass('active');
      $('.js-menu-toggle').attr('aria-expanded', 'false');
      $body.css('overflow', '');
    }
  });
  
  // Close menu when clicking on a link
  $('.site-mobile-menu a').on('click', function() {
    $body.removeClass('offcanvas-menu');
    $mobileMenu.removeClass('active');
    $('.js-menu-toggle').attr('aria-expanded', 'false');
    $body.css('overflow', '');
  });
}

// Helper function to toggle class safely
$.fn.tClass = function(className) {
  return this.each(function() {
    $(this).toggleClass(className);
  });
};

// Initialize when document is ready
$(document).ready(function() {
  // Initialize mobile menu
  setupMobileMenu();
  
  // Initialize other components
  var siteMenuClone = function() {

    $('.js-clone-nav').each(function() {
      var $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
    });


    setTimeout(function() {
      
      var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

    $('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

    $(window).resize(function() {
      var $this = $(this),
        w = $this.width();

      if ( w > 768 ) {
        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })

    $('body').on('click', '.js-menu-toggle', function(e) {
      var $this = $(this);
      e.preventDefault();

      if ( $('body').hasClass('offcanvas-menu') ) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    }) 

    // click outisde offcanvas
    $(document).mouseup(function(e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  }; 
  siteMenuClone();

  var siteCarousel = function () {
    if ( $('.nonloop-block-13').length > 0 ) {
      $('.nonloop-block-13').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
          600:{
            margin: 0,
            nav: true,
            items: 2
          },
          1000:{
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3
          },
          1200:{
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 4
          }
        }
      });
    }


    if ( $('.nonloop-block-14').length > 0 ) {
      $('.nonloop-block-14').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 30,
        margin: 0,
        autoplay: true,
        smartSpeed: 1000,
        nav: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive:{
          600:{
            margin: 20,
            nav: true,
            items: 2
          },
          1000:{
            margin: 30,
            
            nav: true,
            items: 2
          },
          1200:{
            margin: 30,
            
            nav: true,
            items: 3
          }
        }
      });
    }

    $('.slide-one-item').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });
  };
  siteCarousel();

  var siteStellar = function() {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  };
  siteStellar();

  var siteCountDown = function() {

    $('#date-countdown').countdown('2020/10/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
        + '<span class="countdown-block"><span class="label">%d</span> days </span>'
        + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
        + '<span class="countdown-block"><span class="label">%M</span> min </span>'
        + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
    });
            
  };
  siteCountDown();

  var siteDatePicker = function() {

    if ( $('.datepicker').length > 0 ) {
      $('.datepicker').datepicker();
    }

  };
  siteDatePicker();

  var siteSticky = function() {
    $(".js-sticky-header").sticky({topSpacing:0});
  };
  siteSticky();

  // navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
    $("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

    

    $(window).scroll(function() {

      var st = $(this).scrollTop();

      if (st > 100) {
        $('.js-sticky-header').addClass('shrink');
      } else {
        $('.js-sticky-header').removeClass('shrink');
      }

    }) 

  };
  siteScroll();
  

  $(function () {
    $("#bgndVideo").YTPlayer();
  });

  // Initialize hero carousel if it exists
  if ($('.hero-carousel').length) {
    $('.hero-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      touchDrag: true,
      mouseDrag: false
    });
  }
});

// Handle window resize
let resizeTimer;
$(window).on('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    if ($(window).width() > 768) {
      $('body').removeClass('offcanvas-menu');
      $('.site-mobile-menu').removeClass('active');
      $('body').css('overflow', '');
    }
  }, 250);
});