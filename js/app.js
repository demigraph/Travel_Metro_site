$(document).ready(function() {
 
     // Index.html Img Slider  
      $('#slider').cycle({
       fx:     'scrollHorz',
       next:    '#next',
       prev:    '#prev',
       timeout: 3000,
       pause:   1
    });
      
   // Hover effect

    $('.article-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });


    $("#icon_link").click(function() {
      $(".topnav").toggleClass("responsive");
    });


});