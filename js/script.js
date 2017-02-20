//smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2500);
        return false;
      }
    }
  });
});

//año
var year = new Date().getFullYear();
document.getElementById('year').innerHTML=year;

//slaider

$(document).ready(function() {

  var options = {
    speed: 500,
    autoswitch: true,
    autoswitch_speed: 4500
  }

  // Add active class to the first slide
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show active slide
  $('.active').show();

  // Click event on #next
  $('#next').on('click', nextSlide);

  // Click event on #prev
  $('#prev').on('click', prevSlide);

  // Auto slider
  if (options.autoswitch === true) {
    setInterval(nextSlide, options.autoswitch_speed);
  }

  function nextSlide() {
    $('.active').removeClass('active').addClass('prevActive');    // remove active class and add prevActive class

    if ($('.prevActive').is(':last-child')) {   // if last slide, add active class to the first slide
      $('.slide').first().addClass('active');
    } else {                    // else, add active class to next slide
      $('.prevActive').next().addClass('active');
    }

    $('.prevActive').removeClass('prevActive');   // remove prevActive class after active class is added
    $('.slide').fadeOut(options.speed);       // fade out the current slide
    $('.active').fadeIn(options.speed);       // fade in the new slide
  }

  function prevSlide() {
    $('.active').removeClass('active').addClass('prevActive');    // remove active class and add prevActive class

    if ($('.prevActive').is(':first-child')) {    // if last slide, add active class to the first slide
      $('.slide').last().addClass('active');
    } else {                    // else, add active class to next slide
      $('.prevActive').prev().addClass('active');
    }
    
    $('.prevActive').removeClass('prevActive');   // remove prevActive class after active class is added
    $('.slide').fadeOut(options.speed);       // fade out the current slide
    $('.active').fadeIn(options.speed);       // fade in the new slide    
  }

});


//efecto fotos

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  $(document).ready(function()
    {
      $('#waterfall').NewWaterfall();
    });

    // 自动加载更多
    function random(min,max)
    {
      return min + Math.floor(Math.random() * (max - min + 1))
    }
    var loading  = false;
    var dist = 300;
    var num = 1;

    setInterval(function(){
      if($(window).scrollTop() >= $(document).height() - $(window).height() - dist && !loading)
      {
        loading = true;

        $("#waterfall").append("<li><div style='height:" + random(50,500) +  "px'>" + num + "</div></li>");
        num++;

        loading = false;
      }
    },60);
  </script>
</body><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

