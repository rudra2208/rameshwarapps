
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});

			$('#send').click(function(){

				

				//alert("hi there" +$ ('#name').val() + "\nyour email address is" + $('#email').val() + "\nyour entered message is" + $('#message').val())
			})
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})