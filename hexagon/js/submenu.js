var windowWidth = jQuery(window).width();
if (windowWidth > 1200) {

$(".m1,.solution-menu").hover(
function(){
	$(".solution-menu").css('display','block');
},
function(){
	$(".solution-menu").css('display','none');
});

$(".m2,.product-menu ").hover(
function(){
	$(".product-menu").css('display','block');
},
function(){
	$(".product-menu").css('display','none');
});

$(".m3,.team-menu ").hover(
function(){
	$(".team-menu").css('display','block');
},
function(){
	$(".team-menu").css('display','none');
});

$(".m4,.partners-menu ").hover(
function(){
	$(".partners-menu").css('display','block');
},
function(){
	$(".partners-menu").css('display','none');
});

}