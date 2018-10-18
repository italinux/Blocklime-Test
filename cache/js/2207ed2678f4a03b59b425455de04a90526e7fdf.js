$(function(){var thisNavbar=$("section.fixed.menu");var fadingClass="with-fade";var fadingPosition=200;var thisOffset=0;if(thisNavbar.hasClass("loggedIn")){thisOffset+=48}fadingPosition+=thisOffset;$(window).scroll(function(){if($(this).scrollTop()>fadingPosition){thisNavbar.addClass(fadingClass)}else{thisNavbar.removeClass(fadingClass)}})});;

