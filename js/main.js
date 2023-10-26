$('#footer').css('margin-top',$(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height());


$('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});


$(function() {

    $('.toggle-button').click(function(j) {
  
      $('.toggle-button').not(this).children('.rotate').removeClass("down");
  
      $(this).children('.rotate').toggleClass("down");
  
      
  
      var accordion = $(this).closest('.accordion-body').find('.body-content-accor');
  
      $(this).closest('.accordion-list').find('.body-content-accor').not(accordion).slideUp();
  
  
  
      if ($(this).hasClass('active')) {
  
        $(this).removeClass('active');
  
      } else {
  
        $(this).closest('.accordion-list').find('.toggle-button.active').removeClass('active');
  
        $(this).addClass('active');
  
      }
      accordion.stop(false, true).slideToggle();
  
      j.preventDefault();
  
    });
  
  });



 
  
  // for toggle button on header
  $('.navbar-toggler').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('navbar-toggler--active');
  });

  // for toggling button
  $('.navbar-toggler').click(function() {
    $("header").toggleClass("change_header_bg").toggleClass("main_header_bg");
 });

// Navbar BG effect when scrolling
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 300) {
          $("header").addClass("active_bg");
      } else {
         $("header").removeClass("active_bg");
      }
  });
});




 (function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('site-header');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
        
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();


  // $(document).ready(function() {
  //   $('.home-2 .owl-carousel').owlCarousel({
  //     // items: 7,
  //     margin: 80,
  //     loop: true,
  //     autoplay: true,
  //     slideTransition: 'linear',
  //     autoplayTimeout: 1500,
  //     autoplaySpeed: 1500,
  //     autoplayHoverPause: false,
  //     responsiveClass:true,
  //     responsive:{
  //     0:{
  //         items:2
  //     },
  //     768:{
  //       items: 4
  //     }, 
  //     1024:{
  //       items: 6  
  //     }, 
  //   }							        							    
  // });
  //   $('.clients-panel li').matchHeight({byRow:false});
  // });




// for owl carousel
$(document).ready(function() {

  var owl = $('.impact-list');
  owl.owlCarousel({
      margin: 50,
      smartSpeed: 1000,
      autoplay:true,
      nav: true,
      dots: true,
      dotsEach: true,
      loop: true,
      responsive: {
          0: {
              items: 1
             
          },
         992: {
            items: 3
           
        }
      },
  });
  $('.prev-trigger').on('click', function(){
    $(this).parents('.impact').find(".owl-prev").click();
  });

  $('.next-trigger').on('click', function(){
    $(this).parents('.impact').find(".owl-next").click();
  });
});
$(document).ready(function() {

  var owl = $('.banner-slider');
  owl.owlCarousel({
      margin: 0,
      smartSpeed: 1000,
      autoplay:true,
      nav: false,
      dots: true,
      dotsEach: true,
      loop: true,
      responsive: {
          0: {
              items: 1
             
          }
      },
  });
});


$(document).ready(function() {

  var owl = $('.review-list');
  owl.owlCarousel({
      margin: 30,
      smartSpeed: 1000,
      autoplay:true,
      nav: false,
      dots: true,
      dotsEach: true,
      loop: true,
      stagePadding:50,
      responsive: {
          0: {
              items: 1
             
          },
         992: {
            items: 3
           
        }
      },
  });
});


$(function() {
  $('.team-row .team-div .team-content .content').matchHeight();
});