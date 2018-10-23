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
    *
    * VERY IMPORTANT! I could NOT use Ajax to JSON on a standalone version to work
    * 
    * Demo version: http://italinux.com/test-blocklime uses Ajax though
    * Simply Like this:
    */

    /* Ajax Version */
/*
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
*/

    /* Standalone Version */
    var options = {
      data: [ {"name": "Afghanistan", "code": "AF"}, 
              {"name": "Albania", "code": "AL"}, 
              {"name": "Algeria", "code": "DZ"}, 
              {"name": "American Samoa", "code": "AS"}, 
              {"name": "AndorrA", "code": "AD"}, 
              {"name": "Angola", "code": "AO"}, 
              {"name": "Anguilla", "code": "AI"}, 
              {"name": "Antigua and Barbuda", "code": "AG"}, 
              {"name": "Argentina", "code": "AR"}, 
              {"name": "Armenia", "code": "AM"}, 
              {"name": "Aruba", "code": "AW"}, 
              {"name": "Australia", "code": "AU"}, 
              {"name": "Austria", "code": "AT"}, 
              {"name": "Azerbaijan", "code": "AZ"}, 
              {"name": "Bahamas", "code": "BS"}, 
              {"name": "Bahrain", "code": "BH"}, 
              {"name": "Bangladesh", "code": "BD"}, 
              {"name": "Barbados", "code": "BB"}, 
              {"name": "Belarus", "code": "BY"}, 
              {"name": "Belgium", "code": "BE"}, 
              {"name": "Belize", "code": "BZ"}, 
              {"name": "Benin", "code": "BJ"}, 
              {"name": "Bermuda", "code": "BM"}, 
              {"name": "Bhutan", "code": "BT"}, 
              {"name": "Bolivia", "code": "BO"}, 
              {"name": "Bosnia and Herzegovina", "code": "BA"}, 
              {"name": "Botswana", "code": "BW"}, 
              {"name": "Bouvet Island", "code": "BV"}, 
              {"name": "Brazil", "code": "BR"}, 
              {"name": "British Indian Ocean Territory", "code": "IO"}, 
              {"name": "Brunei Darussalam", "code": "BN"}, 
              {"name": "Bulgaria", "code": "BG"}, 
              {"name": "Burkina Faso", "code": "BF"}, 
              {"name": "Burundi", "code": "BI"}, 
              {"name": "Cambodia", "code": "KH"}, 
              {"name": "Cameroon", "code": "CM"}, 
              {"name": "Canada", "code": "CA"}, 
              {"name": "Cape Verde", "code": "CV"}, 
              {"name": "Cayman Islands", "code": "KY"}, 
              {"name": "Central African Republic", "code": "CF"}, 
              {"name": "Chad", "code": "TD"}, 
              {"name": "Chile", "code": "CL"}, 
              {"name": "China", "code": "CN"}, 
              {"name": "Christmas Island", "code": "CX"}, 
              {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
              {"name": "Colombia", "code": "CO"}, 
              {"name": "Comoros", "code": "KM"}, 
              {"name": "Congo", "code": "CG"}, 
              {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
              {"name": "Cook Islands", "code": "CK"}, 
              {"name": "Costa Rica", "code": "CR"}, 
              {"name": "Cote D\"Ivoire", "code": "CI"}, 
              {"name": "Croatia", "code": "HR"}, 
              {"name": "Cuba", "code": "CU"}, 
              {"name": "Cyprus", "code": "CY"}, 
              {"name": "Czech Republic", "code": "CZ"}, 
              {"name": "Denmark", "code": "DK"}, 
              {"name": "Djibouti", "code": "DJ"}, 
              {"name": "Dominica", "code": "DM"}, 
              {"name": "Dominican Republic", "code": "DO"}, 
              {"name": "Ecuador", "code": "EC"}, 
              {"name": "Egypt", "code": "EG"}, 
              {"name": "El Salvador", "code": "SV"}, 
              {"name": "Equatorial Guinea", "code": "GQ"}, 
              {"name": "Eritrea", "code": "ER"}, 
              {"name": "Estonia", "code": "EE"}, 
              {"name": "Ethiopia", "code": "ET"}, 
              {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
              {"name": "Faroe Islands", "code": "FO"}, 
              {"name": "Fiji", "code": "FJ"}, 
              {"name": "Finland", "code": "FI"}, 
              {"name": "France", "code": "FR"}, 
              {"name": "French Guiana", "code": "GF"}, 
              {"name": "French Polynesia", "code": "PF"}, 
              {"name": "French Southern Territories", "code": "TF"}, 
              {"name": "Gabon", "code": "GA"}, 
              {"name": "Gambia", "code": "GM"}, 
              {"name": "Georgia", "code": "GE"}, 
              {"name": "Germany", "code": "DE"}, 
              {"name": "Ghana", "code": "GH"}, 
              {"name": "Gibraltar", "code": "GI"}, 
              {"name": "Greece", "code": "GR"}, 
              {"name": "Greenland", "code": "GL"}, 
              {"name": "Grenada", "code": "GD"}, 
              {"name": "Guadeloupe", "code": "GP"}, 
              {"name": "Guam", "code": "GU"}, 
              {"name": "Guatemala", "code": "GT"}, 
              {"name": "Guernsey", "code": "GG"}, 
              {"name": "Guinea", "code": "GN"}, 
              {"name": "Guinea-Bissau", "code": "GW"}, 
              {"name": "Guyana", "code": "GY"}, 
              {"name": "Haiti", "code": "HT"}, 
              {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
              {"name": "Holy See (Vatican City State)", "code": "VA"}, 
              {"name": "Honduras", "code": "HN"}, 
              {"name": "Hong Kong", "code": "HK"}, 
              {"name": "Hungary", "code": "HU"}, 
              {"name": "Iceland", "code": "IS"}, 
              {"name": "India", "code": "IN"}, 
              {"name": "Indonesia", "code": "ID"}, 
              {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
              {"name": "Iraq", "code": "IQ"}, 
              {"name": "Ireland", "code": "IE"}, 
              {"name": "Isle of Man", "code": "IM"}, 
              {"name": "Israel", "code": "IL"}, 
              {"name": "Italy", "code": "IT"}, 
              {"name": "Jamaica", "code": "JM"}, 
              {"name": "Japan", "code": "JP"}, 
              {"name": "Jersey", "code": "JE"}, 
              {"name": "Jordan", "code": "JO"}, 
              {"name": "Kazakhstan", "code": "KZ"}, 
              {"name": "Kenya", "code": "KE"}, 
              {"name": "Kiribati", "code": "KI"}, 
              {"name": "Korea, Democratic People\"S Republic of", "code": "KP"}, 
              {"name": "Korea, Republic of", "code": "KR"}, 
              {"name": "Kuwait", "code": "KW"}, 
              {"name": "Kyrgyzstan", "code": "KG"}, 
              {"name": "Lao People\"S Democratic Republic", "code": "LA"}, 
              {"name": "Latvia", "code": "LV"}, 
              {"name": "Lebanon", "code": "LB"}, 
              {"name": "Lesotho", "code": "LS"}, 
              {"name": "Liberia", "code": "LR"}, 
              {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
              {"name": "Liechtenstein", "code": "LI"}, 
              {"name": "Lithuania", "code": "LT"}, 
              {"name": "Luxembourg", "code": "LU"}, 
              {"name": "Macao", "code": "MO"}, 
              {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
              {"name": "Madagascar", "code": "MG"}, 
              {"name": "Malawi", "code": "MW"}, 
              {"name": "Malaysia", "code": "MY"}, 
              {"name": "Maldives", "code": "MV"}, 
              {"name": "Mali", "code": "ML"}, 
              {"name": "Malta", "code": "MT"}, 
              {"name": "Marshall Islands", "code": "MH"}, 
              {"name": "Martinique", "code": "MQ"}, 
              {"name": "Mauritania", "code": "MR"}, 
              {"name": "Mauritius", "code": "MU"}, 
              {"name": "Mayotte", "code": "YT"}, 
              {"name": "Mexico", "code": "MX"}, 
              {"name": "Micronesia, Federated States of", "code": "FM"}, 
              {"name": "Moldova, Republic of", "code": "MD"}, 
              {"name": "Monaco", "code": "MC"}, 
              {"name": "Mongolia", "code": "MN"}, 
              {"name": "Montserrat", "code": "MS"}, 
              {"name": "Morocco", "code": "MA"}, 
              {"name": "Mozambique", "code": "MZ"}, 
              {"name": "Myanmar", "code": "MM"}, 
              {"name": "Namibia", "code": "NA"}, 
              {"name": "Nauru", "code": "NR"}, 
              {"name": "Nepal", "code": "NP"}, 
              {"name": "Netherlands", "code": "NL"}, 
              {"name": "Netherlands Antilles", "code": "AN"}, 
              {"name": "New Caledonia", "code": "NC"}, 
              {"name": "New Zealand", "code": "NZ"}, 
              {"name": "Nicaragua", "code": "NI"}, 
              {"name": "Niger", "code": "NE"}, 
              {"name": "Nigeria", "code": "NG"}, 
              {"name": "Niue", "code": "NU"}, 
              {"name": "Norfolk Island", "code": "NF"}, 
              {"name": "Northern Mariana Islands", "code": "MP"}, 
              {"name": "Norway", "code": "NO"}, 
              {"name": "Oman", "code": "OM"}, 
              {"name": "Pakistan", "code": "PK"}, 
              {"name": "Palau", "code": "PW"}, 
              {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
              {"name": "Panama", "code": "PA"}, 
              {"name": "Papua New Guinea", "code": "PG"}, 
              {"name": "Paraguay", "code": "PY"}, 
              {"name": "Peru", "code": "PE"}, 
              {"name": "Philippines", "code": "PH"}, 
              {"name": "Pitcairn", "code": "PN"}, 
              {"name": "Poland", "code": "PL"}, 
              {"name": "Portugal", "code": "PT"}, 
              {"name": "Puerto Rico", "code": "PR"}, 
              {"name": "Qatar", "code": "QA"}, 
              {"name": "Reunion", "code": "RE"}, 
              {"name": "Romania", "code": "RO"}, 
              {"name": "Russian Federation", "code": "RU"}, 
              {"name": "RWANDA", "code": "RW"}, 
              {"name": "Saint Helena", "code": "SH"}, 
              {"name": "Saint Kitts and Nevis", "code": "KN"}, 
              {"name": "Saint Lucia", "code": "LC"}, 
              {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
              {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
              {"name": "Samoa", "code": "WS"}, 
              {"name": "San Marino", "code": "SM"}, 
              {"name": "Sao Tome and Principe", "code": "ST"}, 
              {"name": "Saudi Arabia", "code": "SA"}, 
              {"name": "Senegal", "code": "SN"}, 
              {"name": "Serbia and Montenegro", "code": "CS"}, 
              {"name": "Seychelles", "code": "SC"}, 
              {"name": "Sierra Leone", "code": "SL"}, 
              {"name": "Singapore", "code": "SG"}, 
              {"name": "Slovakia", "code": "SK"}, 
              {"name": "Slovenia", "code": "SI"}, 
              {"name": "Solomon Islands", "code": "SB"}, 
              {"name": "Somalia", "code": "SO"}, 
              {"name": "South Africa", "code": "ZA"}, 
              {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
              {"name": "Spain", "code": "ES"}, 
              {"name": "Sri Lanka", "code": "LK"}, 
              {"name": "Sudan", "code": "SD"}, 
              {"name": "Suri", "code": "SR"}, 
              {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
              {"name": "Swaziland", "code": "SZ"}, 
              {"name": "Sweden", "code": "SE"}, 
              {"name": "Switzerland", "code": "CH"}, 
              {"name": "Syrian Arab Republic", "code": "SY"}, 
              {"name": "Taiwan, Province of China", "code": "TW"}, 
              {"name": "Tajikistan", "code": "TJ"}, 
              {"name": "Tanzania, United Republic of", "code": "TZ"}, 
              {"name": "Thailand", "code": "TH"}, 
              {"name": "Timor-Leste", "code": "TL"}, 
              {"name": "Togo", "code": "TG"}, 
              {"name": "Tokelau", "code": "TK"}, 
              {"name": "Tonga", "code": "TO"}, 
              {"name": "Trinidad and Tobago", "code": "TT"}, 
              {"name": "Tunisia", "code": "TN"}, 
              {"name": "Turkey", "code": "TR"}, 
              {"name": "Turkmenistan", "code": "TM"}, 
              {"name": "Turks and Caicos Islands", "code": "TC"}, 
              {"name": "Tuvalu", "code": "TV"}, 
              {"name": "Uganda", "code": "UG"}, 
              {"name": "Ukraine", "code": "UA"}, 
              {"name": "United Arab Emirates", "code": "AE"}, 
              {"name": "United Kingdom", "code": "GB"}, 
              {"name": "United States", "code": "US"}, 
              {"name": "United States Minor Outlying Islands", "code": "UM"}, 
              {"name": "Uruguay", "code": "UY"}, 
              {"name": "Uzbekistan", "code": "UZ"}, 
              {"name": "Vanuatu", "code": "VU"}, 
              {"name": "Venezuela", "code": "VE"}, 
              {"name": "Viet Nam", "code": "VN"}, 
              {"name": "Virgin Islands, British", "code": "VG"}, 
              {"name": "Virgin Islands, U.S.", "code": "VI"}, 
              {"name": "Wallis and Futuna", "code": "WF"}, 
              {"name": "Western Sahara", "code": "EH"}, 
              {"name": "Yemen", "code": "YE"}, 
              {"name": "Zambia", "code": "ZM"}, 
              {"name": "Zimbabwe", "code": "ZW"} ],
  
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
