var someFunc = function(){
  try {
    $('#hidden_iframe').contents();
  } catch(err) {
    $('#application-submit').animate({backgroundColor: 'green', color: 'white'}, 750).text('We\'ll be in touch!');
    $('#entry_283086831').val("");
    var error = true;
  }
  if(error){
    $('#application-submit').animate({backgroundColor: 'red', color: 'white'}, 750).text('Sorry. Try again.');
  }
};

var anotherFunc = function(){
  try {
    $('#second_hidden_iframe').contents();
  } catch(err) {
    $('#join').animate({backgroundColor: 'green', color: 'white'}, 750).text('We\'ll be in touch!');
    $('#job-application')[0].reset();
    $('#folder').fadeToggle(750);
    var error = true;
  }
  if(error){
    console.log(error)
    $('#join').animate({backgroundColor: 'red', color: 'white'}, 750).text('Sorry. Try again.');
  }
};

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
          scrollTop: target.offset().top - 90
        }, 1000);
        return false;
      }
    }
  });


  $('#join').click(function(){
    $('#folder').fadeToggle(750);
  });

  $('#entry_874179714').on('focus', function(){
    $(this).val("http://")
  });

  $('#entry_1701841656').on('focus', function(){
    $(this).val("http://")
  });



});
