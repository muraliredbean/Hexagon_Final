

$(".getintouch_button").click(function(){
	$("#get-section").css('display','block');
});
$("#subject").change(function(){
	var a =$(this).val();
	if(a=="Other"){
		$(".other_div").css('display','block');
		$(".other_div1").css('display','block');
		$("textarea.form-control").css('height','265px');
	}
	else{
		$(".other_div").css('display','none');
		$(".other_div1").css('display','none');
		$("textarea.form-control").css('height','376px');
	}
});

$("input").keydown(function() {
	var input = $(this);
	if( input.val() == "" ) {
	  input.css( "border", "1px solid #EC3535" );
	   $('label[for="'+$(this).attr('id')+'"]').css("color","#ED1C24");
	} 
	else {
	input.css( "border", "none" );
	$('label[for="'+$(this).attr('id')+'"]').css("color","#4d4d4d");
	}	
});

$("textarea").keydown(function() {
	var input = $(this);
	if( input.val() == "" ) {
	  input.css( "border", "1px solid #EC3535" );
	  $('label[for="'+$(this).attr('id')+'"]').css("color","#ED1C24");
	  $('label[for="'+$(this).attr('data-id')+'"]').css("color","#ED1C24");
	} 
	else {
	input.css( "border", "none" );
	$('label[for="'+$(this).attr('id')+'"]').css("color","#4d4d4d");
	$('label[for="'+$(this).attr('data-id')+'"]').css("color","#4d4d4d");	
	}	
});

$("select").change(function() {
	var input = $(this);
	if( input.val() == null ) {
	  input.css( "border", "1px solid #EC3535" );
	  $('label[for="'+$(this).attr('id')+'"]').css("color","#ED1C24");
	  
	} 
	else {
	input.css( "border", "none" );
	$('label[for="'+$(this).attr('id')+'"]').css("color","#4d4d4d");
	}	
});

$(".email").blur(function() {
	var input = $(this);
	var te = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(this.value);
	if (!te)
	{
		input.css( "border", "1px solid #EC3535" );
		$('label[for="'+$(this).attr('id')+'"]').css("color","#ED1C24");
		
	}
	 
	else {
		 input.css( "border", "none" );
		  $('label[for="'+$(this).attr('id')+'"]').css("color","#4d4d4d");
	}	
});

$("#close").click(function(){
	$("#get-section").css('display','none');
});


$(document).ready(function(){
	$(".submit-button").click(function(){
		var val1 =$("#first_name").val();
		var val2=$("#last_name").val();
        var val3=$("#subject").val(); 
        var val4=$("#email").val();
		var val5=$("#contact_number").val();
		var val6=$("#organisation").val();
		var val7=$(".msg").val();	
		var val8=$("#Other").val();	
		
	if(val3=="Other"){
		if(val1.length == 0 || val2.length == 0 || val3.length == 0 || val4.length == 0 || val5.length == 0 || val6.length== 0 || val7.length== 0 || val8.length==0)
		{ 
	        if(val1.length == 0 )
			{
				document.getElementById('first_name').style.borderColor = "#EC3535";
				$('label[for="first_name"]').css("color","#ED1C24");
			}
		
			if(val2.length == 0 )
			{ 
				document.getElementById('last_name').style.borderColor = "#EC3535";
				$('label[for="last_name"]').css("color","#ED1C24");
			}
			if(val3.length == 0 )
			{
				document.getElementById('subject').style.borderColor = "#EC3535";
				$('label[for="subject"]').css("color","#ED1C24");
			}
			if(val4.length == 0 )
			{
				document.getElementById('email').style.borderColor = "#EC3535";
				$('label[for="email"]').css("color","#ED1C24");
			}
			if(val5.length == 0 )
			{
				document.getElementById('contact_number').style.borderColor = "#EC3535";
				$('label[for="contact_number"]').css("color","#ED1C24");
			}
			if(val6.length==0)
			{
				document.getElementById('organisation').style.borderColor = "#EC3535";
				$('label[for="organisation"]').css("color","#ED1C24");
			}
			if(val7.length==0)
			{
				$('label[for="msg1"]').css("color","#ED1C24");
				document.getElementsByClassName('msg')[0].style.borderColor = "#EC3535";
				
			}
			if(val8.length==0)
			{
				document.getElementById('Other').style.borderColor = "#EC3535";
				$('label[for="Other"]').css("color","#ED1C24");
			}			
				
		}
		else{
			 $.ajax({
			  url:"add_form_details.php",
			  type:"post",
			  dataType: 'json', 
			  data:{
				  form_details1:"form_details1",
				  firstname:val1,
				  lastname:val2,
				  subject:val3,
				  email:val4,
				  contact_number:val5,
				  organisation:val6,
				  message:val7,
				  Other:val8,
				  
				},
			  success:function(data){
				   
			  }
			
		  });	
		
		}
	}

	else {
		if(val1.length == 0 || val2.length == 0 || val3.length == 0 || val4.length == 0 || val5.length == 0 || val6.length== 0 || val7.length== 0)
		{ 
	        if(val1.length == 0 )
			{
				document.getElementById('first_name').style.borderColor = "#EC3535";
				$('label[for="first_name"]').css("color","#ED1C24");
			}
		
			if(val2.length == 0 )
			{ 
				document.getElementById('last_name').style.borderColor = "#EC3535";
				$('label[for="last_name"]').css("color","#ED1C24");
			}
			if(val3.length == 0 )
			{
				document.getElementById('subject').style.borderColor = "#EC3535";
				$('label[for="subject"]').css("color","#ED1C24");
			}
			if(val4.length == 0 )
			{
				document.getElementById('email').style.borderColor = "#EC3535";
				$('label[for="email"]').css("color","#ED1C24");
			}
			if(val5.length == 0 )
			{
				document.getElementById('contact_number').style.borderColor = "#EC3535";
				$('label[for="contact_number"]').css("color","#ED1C24");
			}
			if(val6.length==0)
			{
				document.getElementById('organisation').style.borderColor = "#EC3535";
				$('label[for="organisation"]').css("color","#ED1C24");
			}
			if(val7.length==0)
			{
				$('label[for="msg1"]').css("color","#ED1C24");
				document.getElementsByClassName('msg')[0].style.borderColor = "#EC3535";
				
			}
				
		}
		else{
			 $.ajax({
			  url:"add_form_details.php",
			  type:"post",
			  dataType: 'json', 
			  data:{
				  form_details1:"form_details1",
				  firstname:val1,
				  lastname:val2,
				  subject:val3,
				  email:val4,
				  contact_number:val5,
				  organisation:val6,
				  message:val7,
				  Other:val8,
				  
				},
			  success:function(data){
				   
			  }
			
		  });	
		
		}
	}	
		})
		});
		
$(".close-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#get-in-touch").offset().top-70
}, 1000);
  return false;
});	
