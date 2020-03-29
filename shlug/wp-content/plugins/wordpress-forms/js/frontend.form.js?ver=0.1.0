<!--
/* 
 *	WP Forms jQuery method for Frontend
 *
 */
jQuery.metadata.setType("attr", "validate");

jQuery(document).ready(function($){

	// Select input field contents when click
	$('ul.wp_form input, ul.wp_form textarea').focus(function(){
	    $(this).select();
	});
	
	// Validate Forms
	$('form.wp_form').validate({
		submitHandler: function(form){
			$(form).ajaxSubmit({
				beforeSubmit: function(arr, form, options){
					$('input.submit', form).attr('disabled','disabled');
					$('.response', form).html('<img src="'+wp_form_strings['icons']+'loading.gif'+'" />');
				},
				target: $('.response', form),
				success: function(){
					$('.response', form).fadeIn('slow');
					$('input.submit', form).removeAttr('disabled');
				}
			});
		}
	});		
});
-->
