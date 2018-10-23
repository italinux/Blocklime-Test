/**
* ============================================
* name: jquery.animafy.js
* type: JS
* provides: JQuery Plugin: animafy
*           Animations on Waypoints
*
* @component: jquery.waypoints.min.js
* @component: animate.min.css
* @component: animate.delay.min.css
*
* Version: 1.1.2
* Copyright © 2018
* Licensed under the MIT license.
*
* @author: Matteo Montanari <matteo@italinux.com>
* @link: http://italinux.com
*
* ============================================
* JQuery Plugin animafy - Animations on Waypoints
* ============================================
*/

(function($) {

    /**
    * Plugin: animafy
    */
    $.fn.animafy = function(options) {

    // do initialise
    init(options);

        /**
        * Do Animation on Waypoints
        * with speed in milliseconds
        */
        function init(options) {

            // define parent Hash
            var thisHash = $(location).attr("hash").substring(1);
            var parentHash = thisHash.substr(0, thisHash.lastIndexOf("-"));

            // loop configuration
            for (var thisSelector in options) {

                var thisObject = options[thisSelector];

                for (var thisTarget in thisObject) {

                    if (!thisObject.hasOwnProperty(thisTarget)) continue;

                    var objsOpts = {};

                    switch (getDepthOfObject(thisObject[thisTarget])) {
                      case 1:
                        objsOpts[0] = {
                            element: "." + thisSelector,
                             target: "*[data-animation='" + thisTarget + "']",
                             effect: thisObject[thisTarget].effect,
                              delay: thisObject[thisTarget].delay,
                             offset: thisObject[thisTarget].offset
                        };
                        break;
                      case 2:
                        for (var id in thisObject[thisTarget]) {
                            objsOpts[id] = {
                                element: "." + thisSelector,
                                 target: "*[data-animation='" + thisTarget + "']:eq(" + id + ")",
                                 effect: thisObject[thisTarget][id].effect,
                                  delay: thisObject[thisTarget][id].delay,
                                 offset: thisObject[thisTarget][id].offset
                            };
                        }
                        break;
                    }

                    if (!thisHash) {
                        setObjectsOpts(objsOpts);
                    } else {
                        /**
                        * ONLY animate the one selected target
                        */
                        if (thisHash == thisSelector) {
                            setObjectsOpts(objsOpts);
                        } else {
                            if (parentHash == thisSelector) {
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
        * prepare for animation
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

                // add class nopaque for effects
                doObjectsOptsHideAnimation(thisElement, thisTarget);

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

        // for objects Hide animation
        function doObjectsOptsHideAnimation(thisElement, thisTarget) {

            $(thisElement).each(function() {
                $(this).find(thisTarget).not("[class~='disabled']").addClass("nopaque");
            });
        }

        // for objects Prepare for animation
        function doObjectsOptsPrepareForAnimation(thisElement, thisTarget, thisDelay) {

            $(thisElement).each(function() {
                  $(this).find(thisTarget).not("[class~='disabled']").addClass("delay-" + thisDelay.toString().replace(/\./g, "") + "s");
            });
        }

        // for objects Do animation
        function doObjectsOptsDoAnimation(thisElement, thisTarget, thisEffect, thisOffset) {

            // Start Waypoint
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

        // for objects No animation
        function doObjectsNoAnimations(thisElement, thisTarget) {

            $(thisElement).each(function() {
                $(this).find(thisTarget).not("[class~='disabled']").removeClass("nopaque");
            });
        }

        // init No animations
        function setObjectsNoAnimations(objsOpts) {

            for (var objID in objsOpts) {

                // do Not animate
                doObjectsNoAnimations(objsOpts[objID].element, objsOpts[objID].target);
            }
        }
    };
})(jQuery);
