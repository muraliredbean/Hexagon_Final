// Single scroll based page move function
$(function() {
    $('.container').fixedScroll();
	$(".my_scroll").css({"height":$(window).height()});

function load_js()
   {
      var head= document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type= 'text/javascript';
      script.src= 'js/scroll&menu_active.js';
      head.appendChild(script);
   }
   
	$.scrollify({
        section : ".my_scroll",
        sectionName : ".my_scroll",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
		maxHeight:'100%',
        before:function() {
            var currentSlide = $.scrollify.current();
			var windowWidth = jQuery(window).width();
			
			if (windowWidth > 959) {
				if (currentSlide.context.id == "section-one"){
					$("#page_nav").hide();
					$(".first_nav").hide();
				} else {
					$("#page_nav").show();
					$(".first_nav").hide();
				}
				if (currentSlide.context.id == "section-eight" || currentSlide.context.id == "about-section-2"  || currentSlide.context.id == "about-section-three" ){				
					$("#page_nav").hide();
				}
			}
			else{
					$("#page_nav").hide();
					$(".first_nav").hide();				
			}			
		},
        after:function() {
		},
        afterResize:function() {},
        afterRender:function() {}
    });	
	
$(".menu-icon1").click(function(){
	load_js();
});

if($(".main-menu-ul").hasClass("is-visible"))
{
	$.scrollify.disable();

}	
else{
	$.scrollify.enable();
}
});

// Page scroll based Menu activation functions


/* $(document).on("scroll", onScroll);

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('#menu-center a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('#menu-center ul li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
} */