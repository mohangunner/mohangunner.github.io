$(function() {
  $('.video').click(function() {
    var modal = $(this).data("target"),
      videoSrc = $(this).attr("data-video"),
      videoSrcAuto = videoSrc + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      
      $(modal + ' iframe').attr('src', videoSrcAuto);
      $(modal + ' button.close').click(function() {
        $(modal + ' iframe').attr('src', videoSrc);
      });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('.slider').slick({
  autoplay: true,
  infinite: true,
  autoPlaySpeed: 700,
  arrows: false,
  fade: true,
  mobileFirst: true
});