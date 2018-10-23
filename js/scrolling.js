/**
* ============================================
* name: scrolling
* type: JS
* provides: Scrolling to Targets IDs on a page
*           Customise Target Offsets (Desktop|Mobile)
*           for better UX & Scroll to top 
*
* @component: jquery.animafy.js
*
* Version: 1.0.2
* Copyright © 2018
* Licensed under the MIT license.
*
* @author: Matteo Montanari <matteo@italinux.com>
* @link: http://italinux.com
*
* ============================================
* Scrolling to Targets IDs & Scroll to top
* ============================================
*/

$(function() {

    /**
    * scroll to target ID in page
    */
    $(".scroll").click(function(e) {

        e.preventDefault();

        var speedFactor = 4; // + o - speed (play with decimals first)

        // minimum animation duration in millisecs
        var animDurationMsecsDefault = 400;

        // default offset target destination
        var offsetDefault = { desktop: 20, mobile: 0 };

        // get current anchor hash
        var thisHash =  this.hash.substring(1);

        // config offset target destination
        var offsetConfig = {};

        /**
        * ============================================
        * Customise Target Offsets here (Exceptions)
        * ============================================
        */
        switch(thisHash) {
            case 'trip-plans':
                offsetConfig = { desktop: 110, mobile: 100 };
                break;
            case 'about-me':
                offsetConfig = { desktop: 70 };
                break;
        }

        // get current handler for this add-on
        var thisHandler = "#" + thisHash;

        // detect handler if Any
        if ($(thisHandler).length) {

            // get handler Offset
            var thisHandlerOffset = $(thisHandler).first().offset().top;

            // get current element offset
            var thisElementOffset = $(this).offset().top;

            // calculate speed (animation)
            var animDurationMsecs = Math.ceil((thisHandlerOffset - thisElementOffset) / speedFactor);

            // final speed (animation)
            var thisAnimDurationMsecs = (animDurationMsecs < animDurationMsecsDefault) ? animDurationMsecsDefault : animDurationMsecs;

            /**
            * Media Queries:
            *   calculate position offset
            */
            var isMobile = window.matchMedia("only screen and (max-width: 800px)");

            var thisOffsetDefault = (isMobile.matches) ? offsetDefault.mobile : offsetDefault.desktop;

            var thisOffsetConfig = (isMobile.matches) ? ('mobile' in offsetConfig) ? offsetConfig.mobile : 0 : ('desktop' in offsetConfig) ? offsetConfig.desktop : 0;
            // END Media Queries

            // trick - add base offset to calibrate target
            var baseOffset = -50;

            var postOffset = baseOffset + ((thisOffsetConfig) ? thisOffsetConfig : thisOffsetDefault);

            // Scroll Animate
            $("html, body").animate({
                scrollTop: thisHandlerOffset - postOffset
            }, {
               duration: thisAnimDurationMsecs,
               easing: "swing",
               complete: function(){
                 // close menu hamburger
                 $("nav").find(".hamburger").removeClass("is-active");

                 // hide toggle menu (fullscreen)
                 $("nav").find(".fixed").removeClass('animated').fadeOut(250, "swing", function() {
                     $(this).removeClass("fixed").addClass('animated');
                 });
               }
            });
        }
    });

    /**
    * ============================================
    * scroll-top - bottom arrow
    * ============================================
    */
    var thisHandler = '#scroll-top';

    // Offset when it triggers
    var thisOffset = 500;

    /**
    * show bottom arrow
    */
    $(window).scroll(function() {

        if ($(this).scrollTop() > thisOffset) {
            $(thisHandler).not(".visible").addClass("visible");
        } else {
            $(thisHandler + ".visible").removeClass("visible");
        }
    });

    /**
    * bottom arrow action event
    */
    $(thisHandler).click(function(e) {

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
