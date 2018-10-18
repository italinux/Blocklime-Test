/**
* @preserve
* ============================================
* File type: Main
* LazyAnimate - v0.9
* Copyright © 2017-2018 
*
* @author: Matteo Montanari <matteo@italinux.com>
*
* TERMS OF USE
* Open source under the MIT License.
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the "Software"),
* to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense,
* and/or sell copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included
* in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
* IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* ============================================
* Waypoints required Animations
* ============================================
*
* Start Animations Loop
*/
(function($) {

    /**
    * ============================================
    * INTERNAL: CTA buttons / targeting anchors
    * ============================================
    */
    $(".scroll").click(function(e) {

        e.preventDefault();

        var speedFactor = 4; // + o - speed (play with decimals first)

        // minimum animation duration in millisecs
        var animDurationMsecsDefault = 400;

        /**
        * Add a base offset in case of elements changing positions while scrolling
        * (e.g. Sticky Menu)
        */
        var baseOffset = 0;

        /**
        * Then change default Offset to match the dynamic element height
        */
        if (document.querySelector('section.static.menu') !== null) {
            baseOffset = -50;
        }

        // default offset target destination
        var offsetDefault = { desktop: 70, mobile: 50 };

        // config offset target destination
        var offsetConfig = {};

        // get current anchor hash
        var thisHash =  this.hash.substring(1);

        // Exceptions
        switch(thisHash) {
            case 'what-i-do-more':
                offsetConfig = { desktop: 140 };
                thisHash = "what-i-do";
            break;
            case 'watch-video':
                offsetConfig = { desktop: 210, mobile: 70 };
            break;
            case 'about-me':
                offsetConfig = { desktop: 120};
                break;
            case 'curriculum-vitae':
                offsetConfig = { desktop: 120, mobile: 40 };
                break;
            case 'curriculum-vitae-skills':
                offsetConfig = { desktop: 120, mobile: 100 };
                break;
            case 'curriculum-vitae-resume':
                offsetConfig = { desktop: 120, mobile: 150 };
                break;
            case 'contacts-more':
                case 'contacts-more-mobile':
                case 'contacts-more-address':
                case 'contacts-more-email':
                    offsetConfig = { desktop: 120, mobile: 150 };
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
            * ============================================
            * Media Queries:
            *   calculate position offset
            * ============================================
            */
            var isMobile = window.matchMedia("only screen and (max-width: 800px)");

            var thisOffsetDefault = (isMobile.matches) ? offsetDefault.mobile : offsetDefault.desktop;

            var thisOffsetConfig = (isMobile.matches) ? ('mobile' in offsetConfig) ? offsetConfig.mobile : 0 : ('desktop' in offsetConfig) ? offsetConfig.desktop : 0;

            // END Media Queries


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
    * INIT Animation
    * ============================================
    */
    $.fn.lazyAnimate = function(options) {

    /**
    * Launch INIT()
    */
    init(options);

        /**
        * ============================================
        * INTERNAL:
        *   Do Animation on Waypoints
        *   with speed in milliseconds
        * ============================================
        */
        function init(options) {

            // define parent Hash
            var thisHash = $(location).attr("hash").substring(1);
            var parentHash = thisHash.substr(0, thisHash.lastIndexOf("-"));

            // START loop configuration
            for (var sectionID in options) {

                var thisObject = options[sectionID];

                for (var targetEl in thisObject) {

                    if (!thisObject.hasOwnProperty(targetEl)) continue;

                    var objsOpts = {};

                    switch (getDepthOfObject(thisObject[targetEl])) {
                      case 1:
                        objsOpts[0] = {
                            element: ".pre-hand." + sectionID,
                              target: "*[data-animation='" + targetEl + "']",
                              effect: thisObject[targetEl].effect,
                              delay: thisObject[targetEl].delay,
                              offset: thisObject[targetEl].offset
                        };
                        break;

                      case 2:
                        for (var id in thisObject[targetEl]) {
                            objsOpts[id] = {
                                element: ".pre-hand." + sectionID,
                                  target: "*[data-animation='" + targetEl + "']:eq(" + id + ")",
                                  effect: thisObject[targetEl][id].effect,
                                  delay: thisObject[targetEl][id].delay,
                                  offset: thisObject[targetEl][id].offset
                            };
                        }
                        break;

                      default:
                    }

                    if (!thisHash) {
                        setObjectsOpts(objsOpts);
                    } else {
                        /**
                        * keep the targeted section (block /add-on) animated
                        * so ONLY the one targeted
                        */
                        if (thisHash == sectionID) {
                            setObjectsOpts(objsOpts);
                        } else {
                            if (parentHash == sectionID) {
                                setObjectsOpts(objsOpts);
                            } else {
                                setObjectsNoAnimations(objsOpts);
                            }
                        }
                    }
                }
            }
            return true;
        }

        /**
        * get depth of nested objects
        */
        function getDepthOfObject(obj) {

            var level = 1;

            for (var key in obj) {

                if (!obj.hasOwnProperty(key)) continue;
                
                    if (typeof obj[key] == "object" && obj[key] !== null) {
                        var depth = getDepthOfObject(obj[key]) + 1;
                            level = Math.max(depth, level);
                    }
            }
            return level;
        }

        /**
        * init animation
        */
        function setObjectsOpts(objsOpts) {


            for (var objID in objsOpts) {

                // fetch define element
                var thisElement = objsOpts[objID].element;

                // fetch define target
                var thisTarget = objsOpts[objID].target;

                // fetch define effect
                var thisEffect = objsOpts[objID].effect;

                // fetch define delay
                var thisDelay = objsOpts[objID].delay;

                // fetch define offset
                var thisOffset = objsOpts[objID].offset;


                // add nopaque for effects
                switch (thisEffect) {
                  case "bounceIn":
                  case "bounceInUp":
                  case "bounceInLeft":
                  case "bounceInRight":
                  case "flipInX":
                  case "flipInY":
                  case "fadeIn":
                  case "fadeInLeft":
                  case "fadeInRight":
                  case "fadeInLeftBig":
                  case "fadeInRightBig":
                  case "fadeInUp":
                  case "fadeInUpBig":
                  case "lightSpeedIn":
                  case "zoomIn":
                  case "zoomInRight":
                  case "zoomInUp":
                  case "zoomInDown":
                  case "rotateIn":
              /**
              *    case 'rubberBand':
              */
                  case "pulse":
                  case "bounce":
                  case "swing":
              /**
              *    case 'flash':
              *    case 'tada':
              *    case 'jello':
              */
                    doObjectsOptsHideAnimation(thisElement, thisTarget);

                    break;
                }

                // add delay
                switch (thisDelay) {
                  case 0:
                    break;

                  default:
                    doObjectsOptsPrepareForAnimation(thisElement, thisTarget, thisDelay);
                }

                // Finally DO Animation
                doObjectsOptsDoAnimation(thisElement, thisTarget, thisEffect, thisOffset);
            }
        }

        /**
        * for objects Hide animation
        */
        function doObjectsOptsHideAnimation(thisElement, thisTarget) {

            $(thisElement).each(function() {
                $(this).find(thisTarget).not("[class~='disabled']").addClass("nopaque");
            });
        }

        /**
        * for objects Prepare for animation
        */
        function doObjectsOptsPrepareForAnimation(thisElement, thisTarget, thisDelay) {

            $(thisElement).each(function() {
                  $(this).find(thisTarget).not("[class~='disabled']").addClass("delay-" + thisDelay.toString().replace(/\./g, "") + "s");
            });
        }

        /**
        * for objects Do animation
        */
        function doObjectsOptsDoAnimation(thisElement, thisTarget, thisEffect, thisOffset) {
            /**
            * Start Waypoint
            */
            $(thisElement).each(function() {

                $(this).find(thisTarget).waypoint({
                    element: $(this),
                    handler: function(e, d) {

                        $(this.element).not("[class~='disabled']").removeClass("nopaque animated " + thisEffect).addClass("animated " + thisEffect);

                    // Triggered once, now destroy
                    this.destroy();
                    },
                    offset: function(d) {

                        var topOffset = 200;
                        var offset;

                        switch (thisOffset) {
                          case "bottom":
                            offset = $(window).height() - this.element.clientHeight;
                            break;

                          default:
                            offset = topOffset + thisOffset;
                            break;
                        }
                        return offset;
                    }
                });
            });
        }

        /**
        * for objects No animation
        */
        function doObjectsNoAnimations(thisElement, thisTarget) {

            $(thisElement).each(function() {
                $(this).find(thisTarget).not("[class~='disabled']").removeClass("nopaque");
            });
        }

        /**
        * init No animations
        */
        function setObjectsNoAnimations(objsOpts) {

            for (var objID in objsOpts) {

                // do No animation
                doObjectsNoAnimations(objsOpts[objID].element, objsOpts[objID].target);
            }
        }
    };
})(jQuery);
