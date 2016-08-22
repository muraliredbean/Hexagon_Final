$(document).ready(function(){
var windowWidth = jQuery(window).width();			
if (windowWidth > 1199) {			
	addLanguageScript = function(lang) {
		var script = document.createElement('script');
		script.type = 'text/javascript'
		script.src = lang + '.js'
		$('body').append(script);
	}
	addLanguageScript('js/jquery.oneScrollHeader');
}
else{
	$("script[src='js/jquery.oneScrollHeader.js']").remove();
}
}); 