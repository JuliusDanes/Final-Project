
$("#status").fadeOut(),
$("#preloader").delay(350).fadeOut("slow"),
$("body").delay(350).css({overflow:"visible"});

$(window).on("scroll",function(){
$(window).scrollTop()>=50?
$(".sticky").addClass("stickyadd"):
$(".sticky").removeClass("stickyadd")}),
$(".nav-item a").on("click",function(t){var o=
$(this);
$("html, body").stop().animate({scrollTop:
$(o.attr("href")).offset().top-50},1500,"easeInOutExpo"),t.preventDefault()}),
$(document).on("click",".navbar-collapse.show",function(t){
$(t.target).is("a")&&
$(this).collapse("hide")}),
$("#navbarCollapse").scrollspy({offset:70}),
$(".img-zoom").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),
$(window).on("load",function(){var t=
$(".history"),o=
$("#menu");t.isotope({filter:"*",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear"}}),o.find("a").on("click",function(){var e=
$(this).attr("data");return o.find("a").removeClass("active"),
$(this).addClass("active"),t.isotope({filter:e,animationOptions:{animationDuration:750,easing:"linear",queue:!1}}),!1})}),
$("#owl-demo").owlCarousel({autoPlay:1e4,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]});var a=0;
$(window).on("scroll",function(){var t=
$("#counter").offset().top-window.innerHeight;0==a&&
$(window).scrollTop()>t&&(
$(".lan_lm_value").each(function(){var t=
$(this),o=t.attr("data-count");
$({countNum:t.text()}).animate({countNum:o},{duration:2e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})}),a=1)}),
$(".video_about").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),
$(window).on("scroll",function(){
$(this).scrollTop()>100?
$(".back_top").fadeIn():
$(".back_top").fadeOut()}),
$(".back_top").on("click",function(){return 
$("html, body").animate({scrollTop:0},1e3),!1}),
$(".text-typed").each(function(){var t=
$(this);t.typed({strings:t.attr("data-elements").split(","),typeSpeed:100,backDelay:3e3})}),
$(".simple-text-rotate").textrotator({animation:"fade",speed:3500}),
$(".youtube-bg").mb_YTPlayer(),AOS.init({easing:"ease-in-out-sine",duration:1e3});