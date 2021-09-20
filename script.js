$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".explore,.navbar").addClass("at-top");
  else
    $(".explore,.navbar").removeClass("at-top");
});


var s = skrollr.init();