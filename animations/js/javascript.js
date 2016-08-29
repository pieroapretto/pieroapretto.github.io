'use strict';

$(document).ready(function(){

  var $slide1 = $("#slide1"),
      $slide1Header = $("#slide1 h1"),
      $slide1Img = $('#slide1 img'),
      $slide1Text = $('#slide1 p'),

      $slide2 = $("#slide2"),
      $slide2Header = $("#slide2 h1"),
      $slide2Img = $('#slide2 img'),
      $slide2Text = $('#slide2 p'),

      $slide3 = $("#slide3"),
      $slide3Header = $("#slide3 h1"),

      $slide4 = $("#slide4"),
      $slide4Header = $("#slide4 h1"),
      $slide4Img = $('#slide4 img'),
      $slide4Text = $('#legal_copy2'),
      $slide4Div = $('#learnMore'),
      
      $slide5 = $('#slide5'),
      $slide5Exit = $('#slide5 span');

  var tl = new TimelineLite();
  var tl2 = new TimelineLite();

  tl.from($slide1Header, 0.5, {x: '+=1000', autoAlpha:0, ease:Circ.easeInOut})
     .from($slide1Img, 0.5, {x: '-=500', autoAlpha:0, ease:Circ.easeInOut})
     .from($slide1Text, 1, {autoAlpha:0, ease:SlowMo.easeInOut})
     .to($slide1Header, 0.5, {autoAlpha:0, x: '-=1000', ease:Circ.easeInOut, delay: 3, onComplete: displayNone})
     .to($slide1Text, 0.5, {autoAlpha:0, ease:SlowMo.easeInOut}, "-=0.5")

     .to($slide1Img, 0.75, {onUpdate: upAndLeft})
     .from($slide2Img, 0.5, {autoAlpha:0, ease:Circ.easeInOut}, "-=0.7")
     .from($slide2Header, 0.5, {x: '+=1000', autoAlpha:0, ease:Circ.easeInOut})
     .from($slide2Text, 0.5, {scale:0.5, autoAlpha:0, ease:SlowMo.easeInOut}, "-=0.5")

     .to($slide2, 1, {autoAlpha:0, x: '-=1000', ease:Circ.easeInOut, delay: 3})
     .from($slide3Header, 1, {x: '+=1000', autoAlpha:0, ease:Circ.easeInOut})

     .to($slide3, 1, {autoAlpha:0, x: '-=1000', ease:Circ.easeInOut, delay: 3})
     .from($slide4Img, 1, {x: '+=1000', autoAlpha:0, ease:Circ.easeInOut})
     .from($slide4Header, 1, {x: '-=1000', autoAlpha:0, ease:Circ.easeInOut}, '-=1')
     .from($slide4Text, 0.5, {scale:0.5, autoAlpha:0, ease:SlowMo.easeInOut}, "-=1")

     .from($slide4Div, 0.5, {scale:0.5, autoAlpha:0, ease:SlowMo.easeInOut}, "-=1");

     var rollOver = TweenMax.to($slide5, 1, {scale:0.5, autoAlpha:1, ease:SlowMo.easeInOut});
     $slide4Div.onclick = function(){
       rollOver.restart();
     }

     $slide5Exit.onclick = function(){
       tl2.to($slide5, 1, {autoAlpha:0, x: '-=1000', ease:Circ.easeInOut, delay: 1})
          .from($slide4Img, 1, {x: '+=1000', autoAlpha:0, ease:Circ.easeInOut})
          .from($slide4Header, 1, {x: '-=1000', autoAlpha:0, ease:Circ.easeInOut}, '-=1')
          .from($slide4Text, 0.5, {scale:0.5, autoAlpha:0, ease:SlowMo.easeInOut}, "-=1");
     }


   function displayNone() {
     $("#slide1 h1").css("display", "none");
   }

   function upAndLeft() {
     $('#phone1').css('top', '35%');
     $('#phone1').addClass('animated rotateOutUpLeft');
   }

});
