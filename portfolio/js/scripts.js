
// var developer = function() {
//   for (var day = 0; day < 7; day++) {
//     if (day < 5) {
//       alarm(snooze());
//       drinkMate(yerba.bitter, water.hot);
//       code(Javascript(JQuery || Angular2), HTML5, CSS3);
//       git(commit(""));
//     } else {
//       dAndD(roll(20));
//       goHiking(nature);
//       dance(beats);
//     }
//   }
// }

$(document).ready(function(){

  var viewHeight = parseInt($(window).height());

  var counter = 1;
  $('#contact').click(function(){
    var self = this;
    if (counter%2 === 0) {
      $(".contact").fadeToggle('slow', function(){
        $(".title-detail").fadeToggle('slow');
        counter += 1;
      });
    } else {
      $(".title-detail").fadeToggle('slow', function(){
        $(".contact").fadeToggle('slow');
        counter += 1;
      });
    }
    console.log(counter);
  });


  $(document).on('click', 'a.scroll', function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top+0
    }, 500);
  });


  $('#hey-im-ethan').click(function(){
    $('#ethan-detail').fadeIn('slow', function(){    });
  });
  $('#hey-im-ethan').mouseout(function(){
    $('#ethan-detail').fadeOut('slow', function(){});
  });

  $('#web-developer').click(function(){
    $('#dev-detail').fadeIn('slow', function(){    });
  });
  $('#web-developer').mouseout(function(){
    $('#dev-detail').fadeOut('slow', function(){});
  });


  $('.more').click(function(){
    var project = $(this).parents('.project-wrapper').attr('id');
    $('#' + project + '-title').fadeOut('fast', function() {
      $('#' + project + '-info').fadeIn('slow');
    });
  });

  $('.close').click(function(){
    var project = $(this).parents('.project-wrapper').attr('id');
    $('#' + project + '-info').fadeOut('fast', function() {
      $('#' + project + '-title').fadeIn('slow');
    });
  });

});
