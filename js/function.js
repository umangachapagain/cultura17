$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  })

  $('.face').css({
    'transform' : 'translate(-50%, -'+ wScroll /16 +'%)'
  })

});


$('#arrow').click(function(){
  $('.icon-bar').toggleClass("drag-it");
  $('.menu').toggleClass("rotate-it");

  var delay = -50;
  $('#icon-set li').each(function() {
    var $li = $(this);
    setTimeout(function() {
      $li.toggleClass('swipe');
    }, delay+=100); // delay 100 ms
  });
});


$('#bar-schedule, #bar-sponsor,').click(function(){
  $('.toast').fadeIn(1000).delay(3000).fadeOut(1000);
});
