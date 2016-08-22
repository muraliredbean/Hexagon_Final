   $(document).ready(function(){
				 $('#menu-two, #menu-two1').addClass('menu-two-fixed');
				
				 
				 });   
	   $(window).bind('scroll', function() {
	   $('#menu-two').css('position','');
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('#menu-two, #menu-two1').addClass('menu-two-fixed');
				
			 }
			 else {
				 $('#menu-two, #menu-two1').removeClass('menu-two-fixed');							 
			 }
		});
	});

$(function () {
    $('.header-home').oneScrollHeader();
    $('.header-home1').oneScrollHeader1();
});

!function ($) {

    var defaults = {
        sectionContainer: "section",
        animationTime: 1000,
        marginTop: 0,
        delayMove: 0
    };

    $.fn.oneScrollHeader = function (options) {
        var settings = $.extend({}, defaults, options);
        var $this = $(this);
        var oneTouchstart;
        var twoTouchmove = [];
        var delayMove = 0;
        var touchScrollDirection;

        var heightWindow = $(window).height();
        this.css({'height': heightWindow});

        function scrollTopAnimete(){
            $('body').stop().animate({
                scrollTop: heightWindow - settings.marginTop-130
            }, settings.animationTime);
            $('body').queue(function () {
                $this.trigger('oneScrollHeader.end');
            });
        };

        $this.on('touchstart', function (event) {
            oneTouchstart = event.originalEvent.touches[0].pageY;
        });
        $this.on('touchmove', function (event) {
            twoTouchmove = event.originalEvent.touches[0].pageY;

            touchScrollDirection =  oneTouchstart - twoTouchmove > 0 ? 'up' : 'down';

            if( touchScrollDirection === 'up') {
                event.preventDefault();
                delayMove ++;
                if ( delayMove > settings.delayMove ) {
                    scrollTopAnimete();
                    delayMove = 0;
                }
            }

        });

        $this.bind('mousewheel DOMMouseScroll', function (event) {
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            if (delta < 0) {
                event.preventDefault();
                scrollTopAnimete();
            }
        });

// Sub Menu Click based Menu Active, Page Scroll and Contents hide or display process.

		var curPage=$('#menu-two a.active').data("page");
		$('#menu-two a').click(function(){
                event.preventDefault();
				$('#menu-two a').removeClass('active');
				$(this).addClass('active');
				
				if (curPage.length) { 
					$("#"+curPage).hide();
				}
				curPage=$(this).data("page");
				$("#"+curPage).show();				
                scrollTopAnimete();			
		});
		
		
    }

}($);


!function ($) {

    var defaults = {
        sectionContainer: "section",
        animationTime: 1000,
        marginTop: 0,
        delayMove: 0
    };

    $.fn.oneScrollHeader1 = function (options) {
        var settings = $.extend({}, defaults, options);
        var $this = $(this);
        var oneTouchstart;
        var twoTouchmove = [];
        var delayMove = 0;
        var touchScrollDirection;

        var heightWindow = $(window).height();
        this.css({'height': heightWindow});

        function scrollTopAnimete(){
            $('body').stop().animate({
                scrollTop: heightWindow - settings.marginTop-10
            }, settings.animationTime);
            $('body').queue(function () {
                $this.trigger('oneScrollHeader.end');
            });
        };

        $this.on('touchstart', function (event) {
            oneTouchstart = event.originalEvent.touches[0].pageY;
        });
        $this.on('touchmove', function (event) {
            twoTouchmove = event.originalEvent.touches[0].pageY;

            touchScrollDirection =  oneTouchstart - twoTouchmove > 0 ? 'up' : 'down';

            if( touchScrollDirection === 'up') {
                event.preventDefault();
                delayMove ++;
                if ( delayMove > settings.delayMove ) {
                    scrollTopAnimete();
                    delayMove = 0;
                }
            }

        });

        $this.bind('mousewheel DOMMouseScroll', function (event) {
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            if (delta < 0) {
                event.preventDefault();
                scrollTopAnimete();
            }
        });	
		
    }

}($);
