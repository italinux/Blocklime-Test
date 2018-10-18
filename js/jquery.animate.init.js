/**
* @preserve
* ============================================
* File type: Conf
* File provides: Animation on Waypoint
* Requires: Waypoint + Lazy.Animate
*
* @author:  Matteo Montanari <matteo@italinux.com>
*
* @component: jquery.waypoints.min.js
* @component: jquery.lazy.animate.min.js
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
*/

(function($) {

    $.fn.lazyAnimateInit = function() {
        /**
        * @preserve
        * List of Handlers for Animation
        */
        $(this).lazyAnimate({
            "menu": {
                "toggle": {
                    offset: 1200,
                    effect: "fadeIn",
                    delay: 0.2,
                },
                "title": {
                    offset: 1200,
                    effect: "fadeIn",
                    delay: 0.2,
                },
                "logo": {
                    offset: 1200,
                    effect: "bounceInLeft",
                    delay: 1,
                },
                "menu": {
                    offset: 1200,
                    effect: "none",
                    delay: 0,
                },
                "languages": {
                    offset: 1200,
                    effect: "bounceIn",
                    delay: 0.5,
                },
            },
        });
    };
})(jQuery);

        $("section#s50").lazyAnimateInit();
/**
* ============================================
*/

(function($) {

    $.fn.lazyAnimateInit = function() {
        /**
        * @preserve
        * List of Handlers for Animation
        */
        $(this).lazyAnimate({
            "banner": {
                "bgVideo": {
                    offset: 500,
                    effect: "fadeIn",
                    delay: 0.6,
                },
                "title": {
                    offset: 500,
                    effect: "fadeIn",
                    delay: 0.8,
                },
                "subtitle": {
                    offset: 500,
                    effect: "fadeIn",
                    delay: 1.2,
                },
                "photo": {
                    offset: 500,
                    effect: "bounceInRight",
                    delay: 0.8,
                },
                "content": {
                    offset: 500,
                    effect: "fadeIn",
                    delay: 1.2,
                },
                "cta": {
                    offset: 800,
                    effect: "fadeIn",
                    delay: 1.8,
                },
                "top-arrow": {
                    offset: 800,
                    effect: "fadeInDown",
                    delay: 1.8,
                },
            },
        });
    };
})(jQuery);

        $("section#s47").lazyAnimateInit();
/**
* ============================================
*/

(function($) {

    $.fn.lazyAnimateInit = function() {
        /**
        * @preserve
        * List of Handlers for Animation
        */
        $(this).lazyAnimate({
            "what-i-do": {
                "icon": {
                    0: {
                        offset: 650,
                        effect: "bounceIn",
                        delay: 0.2,
                    },
                    1: {
                        offset: 650,
                        effect: "bounceIn",
                        delay: 0.4,
                    },
                    2: {
                        offset: 650,
                        effect: "bounceIn",
                        delay: 0.3,
                    },
                    3: {
                        offset: 650,
                        effect: "bounceIn",
                        delay: 0.5,
                    },
                },
/*
                "title": {
                    offset: 350,
                    effect: "bounceIn",
                    delay: 0,
                },
*/
                "content": {
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
                    3: {
                        offset: 650,
                        effect: "flipInX",
                        delay: 0,
                    },
                },
/*
                "cta": {
                    offset: 350,
                    effect: "bounceIn",
                    delay: 0,
                },
*/
            },
        });
    };
})(jQuery);

        $("section#s46").lazyAnimateInit();
/**
* ============================================
*/

(function($) {

    $.fn.lazyAnimateInit = function() {
        /**
        * @preserve
        * List of Handlers for Animation
        */
        $(this).lazyAnimate({
            "services": {
                "icon": {
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
                "content": {
                    0: {
                        offset: 800,
                        effect: "bounceInUp",
                        delay: 0.2,
                    },
                    1: {
                        offset: 800,
                        effect: "bounceInUp",
                        delay: 0,
                    },
                    2: {
                        offset: 800,
                        effect: "bounceInUp",
                        delay: 0,
                    },
                    3: {
                        offset: 800,
                        effect: "bounceInUp",
                        delay: 0,
                    },
                },
/*
                "global-cta": {
                    offset: 350,
                    effect: "bounceIn",
                    delay: 0,
                },
*/
            },
        });
    };
})(jQuery);

        $("section#s34").lazyAnimateInit();
/**
* ============================================
*/

(function($) {

    $.fn.lazyAnimateInit = function() {
        /**
        * @preserve
        * List of Handlers for Animation 
        */
        $(this).lazyAnimate({
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
/*
                "global-cta": {
                    offset: 550,
                    effect: "bounceIn",
                    delay: 0,
                },
*/
            },
        });
    };
})(jQuery);

        $("section#s49").lazyAnimateInit();
/**
* ============================================
*/

(function($) {

    $.fn.lazyAnimateInit = function() {
        /**
        * @preserve
        * List of Handlers for Animation
        */
        $(this).lazyAnimate({
            "footer": {
                "credits": {
                    offset: "bottom",
                    effect: "flipInX",
                    delay: 0.1,
                },
            },
        });
    };
})(jQuery);

        $("section#s42").lazyAnimateInit();
