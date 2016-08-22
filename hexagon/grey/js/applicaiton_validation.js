(function ($) {
    $(document).ready(function () {
        jQuery.validator.setDefaults({
            highlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                    $(element).closest('.form-group').find('i').remove();
                }
            },
            unhighlight: function (element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
					$(element).closest('.form-group').find('i').remove();
                }
            }
        });

        $("#app_form").validate({
	            rules: {
                'first_name': {
                    required: true                  
                },
                'last_name': {
                    required: true                  
                },	
                'city': {
                    required: true                   
                },	
                'months': {
                    required: true                  
                },
                'days': {
                    required: true                  
                },	
                'years': {
                    required: true                   
                },	
                'overall-exp': {
                    required: true                   
                },	
                'relevant-exp': {
                    required: true                  
                },
                'current-ctc': {
                    required: true                  
                },	
                'expected-ctc': {
                    required: true                   
                },	
                'notice-period': {
                    required: true                   
                },				
                'email': {
                    required: true,
                    email: true,                  
                    maxlength: 100
                },				
                'contact_number': {
					required:true,
                    matches:"[0-9]+",
					minlength:10, 
					maxlength:10
                }
                   
            }
        });
    });
})(jQuery)