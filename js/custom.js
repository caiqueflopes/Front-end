
  $(function () {

    // MENU
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    }); 
   
    //ACORDION CHANGE COLOR

    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".head_accordion").removeClass("head_accordion").addClass("head_accordion_on");
    $(this).parent().find(".title_accordion").removeClass("title_accordion").addClass("title_accordion_on");
    $(this).parent().find(".icon_accordion").removeClass("icon_accordion").addClass("icon_accordion_on");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".head_accordion_on").removeClass("head_accordion_on").addClass("head_accordion");
    $(this).parent().find(".title_accordion_on").removeClass("title_accordion_on").addClass("title_accordion");
    $(this).parent().find(".icon_accordion_on").removeClass("icon_accordion_on").addClass("icon_accordion");
    }); 
  });
 
   // GO TOP
   function topFunction() {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  
  }

  
    

