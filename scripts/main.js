$(function() {
  $(document).foundation({
    "magellan-expedition": {
      active_class: 'active', // specify the class used for active sections
      threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
      destination_threshold: 40, // pixels from the top of destination for it to be considered active
      throttle_delay: 50, // calculation throttling to increase framerate
      fixed_top: 0, // top distance in pixels assigned to the fixed element on scroll
    }
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('.xpand').click(function(){

    $('#folder').slideToggle(750);
    $('body').animate({scrollTop: $(document).height()}, 750);
  });
  $('#email-form').on('valid.fndtn.abide', function(){
    // $.ajax({
    //   url: "https://docs.google.com/a/pingpad.co/forms/d/1y_dqv4T0QQNw04quX0VRteOtkYN_dpDQNNGmI_kCE4s/formResponse",
    //   type: "POST",
    //   data: {"entry.1": new Date(), "entry.283086831": $('#email').val()},
    //   success: function(){$('#beta-button').animate({backgroundColor: 'green', color: 'white'}, 750).text('We\'ll be in touch!');},
    //   error: function(){$('#beta-button').animate({backgroundColor: 'red', color: 'white'}, 750).text('Sorry, try again.')}
    // });
  });

});
