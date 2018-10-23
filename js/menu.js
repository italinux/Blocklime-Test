/**
* ============================================
* name: menu
* type: JS
* provides: Menu Toggle type, transitions on scrolling
*
* @component: hamburgers.min.css
*
* Version: 0.9.0
* Copyright © 2018
* Licensed under the MIT license.
*
* @author: Matteo Montanari <matteo@italinux.com>
* @link: http://italinux.com
*
* ============================================
* Menu Logo, Title, Toggle, transitions on scrolling
* ============================================
*/

$(function() {

    /**
    * Hamburger
    */
    $(".hamburger").on("click", function(e) {

      $(this).addClass('hamburger--slider-r');
      $(this).toggleClass("is-active");

      // display toggle menu (show|hide)
      $(this).closest('nav').find(".navbar-collapse").toggleClass("show");
      $(this).closest('nav').find(".menu-wrapper").toggleClass("fixed");

      // Do something else, if you like
    });

    /*
    * ============================================
    * Fading in/out Menu
    * ============================================
    */
    var thisNavbar = $("section.menu");

    var fadeClass = "with-fade";

    // Offset when it triggers
    var fadeOffset = 200;

    $(window).scroll(function() {
        // fade (in|out)
        if ($(this).scrollTop() > fadeOffset) {
            thisNavbar.addClass(fadeClass);
        } else {
            thisNavbar.removeClass(fadeClass);
        }
    });

    /**
    * ============================================
    * Show Menu Title (only on large mobiles)
    * ============================================
    */
    var showClass = "show";

    // Offset when it triggers
    var showOffset = 400;

    $(window).scroll(function() {
        // show (in|out)
        if ($(this).scrollTop() > showOffset) {
            thisNavbar.find('.title-wrapper').addClass(showClass);
        } else {
            thisNavbar.find('.title-wrapper').removeClass(showClass);
        }
    });

    /*
    * ============================================
    * SCROLL-TOP on click menu logo | title
    * ============================================
    */
    $(".scroll-top").click(function(e) {

        e.preventDefault();

        var speedFactor = 3.5; // + o - speed (play with decimals first)

        // minimum animation duration in millisecs
        var animDurationMsecsDefault = 500;

        // get current element offset
        var thisElementOffset = $(this).offset().top;

        // calculate speed (animation)
        var animDurationMsecs = Math.ceil(thisElementOffset / speedFactor);

        // final speed (animation)
        var thisAnimDurationMsecs = (animDurationMsecs < animDurationMsecsDefault) ? animDurationMsecsDefault : animDurationMsecs;

        // Scroll Animate
        $("html, body").animate({
            scrollTop: 0
        }, thisAnimDurationMsecs, "swing");
    });
});
