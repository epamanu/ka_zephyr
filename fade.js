$(document).on("scroll", function () {

    var scrollTop = $(document).scrollTop()
    var scrollBottom = scrollTop + $(window).height()
  
    var pageBottom = $(document).height()
  
    var diff = pageBottom - scrollBottom
  
    var opacity = 1 - diff / 1500
  
    $(".fade").css("opacity", opacity)
  
  })