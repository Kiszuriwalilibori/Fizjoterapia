module.exports ={
  activateHamburgerMenu :function (jQuery) {
    var $ = jQuery;
    function prepareForHamburger(){
        $("#menu").addClass("visibleWithHamburger");
      }
  
      function clearAfterHamburger(){
        $("#menu").removeClass("visibleWithHamburger");
        $("#menu").removeAttr("style");
      }

    function toggleMenu() {
      if  (!($("#menu").hasClass("visibleWithHamburger"))) {
        TweenMax.to(".menu", 1, { xPercent: 100, ease: Power2.easeInOut, onComplete: prepareForHamburger });
      } else {
        TweenMax.to(".menu", 1, { xPercent: -100, ease: Power2.easeInOut, onComplete: clearAfterHamburger });
      }
    }

    $(".hamburger").on("click", toggleMenu);
  }
}

