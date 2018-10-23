/**
* ============================================
* name: init
* type: JS
* provides: Configurations:
*           Preloader
*           Animations targets
*           Animations triggers (types|delays|offsets)
*           Scroll Up
*
* @component: jquery.animafy.js
* @component: animate.min.css
* @component: animate.delay.css
*
* Version: 0.9.5
* Copyright © 2018
* Licensed under the MIT license.
*
* @author: Matteo Montanari <matteo@italinux.com>
* @link: http://italinux.com
*
* ============================================
* Preloader & Sections Animation Targets Configuration
* ============================================
*/

$(function() {

    /**
    * Preloader
    */
    var thisHandler = "div#preloader";

    // transition in milliseconds
    var transMsecs = 300;

    // delay in milliseconds
    var delayMsecs = 300;

    if ($(location).attr("hash")) {
        $(thisHandler).hide();
    } else {
        // Now preload spinner
        $(thisHandler).children("div").delay(delayMsecs).fadeOut(transMsecs, function() {
            $(this).parent().fadeOut(transMsecs);
        });
    }

    /**
    * Configure Sections Animations Triggers
    *
    * Target element attribute: data-animation="<value>"
    *
    *    offset: in pixels
    *    effect: type in animate.css
    *     delay: in seconds
    */
    $.fn.animafyInit = function() {

        // List of Handlers id for Animation
        $(this).animafy({
            "menu": {
                "toggle": {
                    offset: 1200,
                    effect: "none",
                    delay: 0.2,
                },
                "logo": {
                    offset: 1200,
                    effect: "bounceInLeft",
                    delay: 1,
                },
                "title": {
                    offset: 1200,
                    effect: "fadeIn",
                    delay: 0.2,
                },
                "menu": {
                    offset: 1200,
                    effect: "none",
                    delay: 0,
                },
            },
            "banner": {
                "title": {
                    offset: 600,
                    effect: "fadeInDown",
                    delay: 1.2,
                },
                "subtitle": {
                    offset: 600,
                    effect: "fadeIn",
                    delay: 1,
                },
                "content": {
                    offset: 600,
                    effect: "fadeIn",
                    delay: 1.2,
                },
                "search": {
                    offset: 600,
                    effect: "zoomInDown",
                    delay: 1.8,
                },
                "cta": {
                    offset: 800,
                    effect: "fadeIn",
                    delay: 1.6,
                },
                "top-arrow": {
                    offset: 800,
                    effect: "fadeInDown",
                    delay: 1.8,
                },
            },
            "travel-gears": {
                "icon": {
                    0: {
                        offset: 580,
                        effect: "bounceIn",
                        delay: 0.1,
                    },
                    1: {
                        offset: 580,
                        effect: "bounceIn",
                        delay: 0.3,
                    },
                    2: {
                        offset: 580,
                        effect: "bounceIn",
                        delay: 0.2,
                    },
                },
/*
                "title": {
                    0: {
                        offset: 650,
                        effect: "flipInX",
                        delay: 0,
                    },
                    1: {
                        offset: 650,
                        effect: "flipInX",
                        delay: 0.3,
                    },
                    2: {
                        offset: 650,
                        effect: "flipInX",
                        delay: 0.2,
                    },
                },
*/
            },
            "trip-plans": {
                "item": {
                    0: {
                        offset: 700,
                        effect: "bounceInLeft",
                        delay: 0.4,
                    },
                    1: {
                        offset: 700,
                        effect: "bounceInLeft",
                        delay: 0,
                    },
                    2: {
                        offset: 700,
                        effect: "bounceInRight",
                        delay: 0,
                    },
                    3: {
                        offset: 700,
                        effect: "bounceInRight",
                        delay: 0.4,
                    },
                },
                "cta": {
                    0: {
                        offset: 600,
                        effect: "bounceIn",
                        delay: 0.2,
                    },
                    1: {
                        offset: 600,
                        effect: "bounceIn",
                        delay: 0.2,
                    },
                    2: {
                        offset: 600,
                        effect: "bounceIn",
                        delay: 0.2,
                    },
                    3: {
                        offset: 600,
                        effect: "bounceIn",
                        delay: 0.2,
                    },
                },
                "bubble": {
                    0: {
                        offset: 600,
                        effect: "fadeInUp",
                        delay: 0,
                    },
                    1: {
                        offset: 600,
                        effect: "fadeInUp",
                        delay: 0,
                    },
                    2: {
                        offset: 600,
                        effect: "fadeInUp",
                        delay: 0,
                    },
                    3: {
                        offset: 600,
                        effect: "fadeInUp",
                        delay: 0,
                    },
                },
            },
            "about-me": {
/*
                "photo": {
                    offset: 550,
                    effect: "swing",
                    delay: 1.4,
                },
*/
                "text": {
                    offset: 600,
                    effect: "fadeInLeft",
                    delay: 0.2,
                },
            },
            "footer": {
                "credits": {
                    offset: "bottom",
                    effect: "flipInX",
                    delay: 0.1,
                },
            },
        });
    };

    /**
    * Init Secctions Animations
    */
    $('body').animafyInit();

    /**
    * Banner Search: Top Picks
    */
    var tpHandler = "div#top-picks";

    var tpContent = '<div class="easy-autocomplete-container" id="top-picks">' +
                        '<ul>' +
                            '<li><div><em>TOP PICKS THIS MONTH</em></div></li>' +
                            '<li><div class="eac-top-item">Canada</div></li>' +
                            '<li><div class="eac-top-item">India</div></li>' +
                            '<li><div class="eac-top-item">France</div></li>' +
                            '<li><div class="eac-top-item">South Korea</div></li>' +
                        '</ul>' +
                    '</div>';
    /**
    * Banner Search: Placeholder on Focus In/Out
    */
    $('section.banner input[type="search"]').on("focus", function() {
        $(this).attr("placeholder", "");
            if ($(this).siblings(tpHandler).length) {
                $(this).siblings(tpHandler).show();
            } else {
                $(this).after(tpContent);
            }
    }).on("blur", function() {
        $(this).attr("placeholder", "Where do you want to go?");
    });

    $('form[name="search"]').on("click", "div.eac-top-item", function(){
        $('input[type="search"]').val($(this).text());
        $('input[type="search"]').focus();

        $(tpHandler).remove();
    });

    /**
    * Banner Search: Autocomplete
    */
    var options = {
      url: "json/countries.json",
      getValue: "name",
      list: {
        match: {
          enabled: true
        },
        onShowListEvent: function() {
          $(tpHandler).hide();
        },
        onHideListEvent: function() {
          $(tpHandler).show();
        },
      },
      theme: "square"
    };

    /**
    * Banner Search: init
    */
    $('section.banner input[type="search"]').easyAutocomplete(options);

    /**
    * Banner CTA click on FocusIn
    */
    $('section.banner a[class*="CTA"]').focusin(function() {
        $(this).click();
    });

    /**
    * Read More (Blog Post article)
    */
    $('section#about-me article > p:nth-of-type(2)').readmore({
        speed: 200,
        startOpen: false,
        collapsedHeight: 0,
        heightMargin: 0,
        moreLink: '<p><em><small><a href="#">Read More ...</small></em></p>',
        lessLink: '',
        embedCSS: true,
        blockCSS: "margin-bottom: 4px"
    });
});
