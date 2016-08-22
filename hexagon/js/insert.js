	 $(document).ready(function(){
	$(".submit-button").click(function(){
		var val1 =$("#first_name").val();
		var val2=$("#last_name").val();
        var val3=$("#subject").val(); 
        var val4=$("#email").val();
		var val5=$("#contact_number").val();
		var val6=$("#organisation").val();
		var val7=$("#msg").val();	
		var val8=$("#Other").val();	
		
		
		if(val1.length == 0 || val2.length == 0 || val3.length == 0 || val4.length == 0 || val5.length == 0 || val6== 0 || val7== 0 )
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
				document.getElementById('msg').style.borderColor = "#EC3535";
				$('label[for="msg"]').css("color","#ED1C24");
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
		})
		});