$(document).ready(function() { 
		


		//QR code button animation

	var closeButton = function(){
		$('.QRcode').removeClass('slideAnimation').addClass('slideAnimationDown');
	}	

	var closeButtonTimer;
	
    $('button').on('click',function(){
    if ($('.QRcode').hasClass('slideAnimation')){
    	$('.QRcode').removeClass('slideAnimation').addClass('slideAnimationDown');
    	clearTimeout(closeButtonTimer);
    } else {
    	$('.QRcode').removeClass('slideAnimationDown').addClass('slideAnimation');
    	closeButtonTimer = setTimeout(closeButton,12000);
    }
    });

// 	$(document).ready(function () {
    
//     $('button').click( function () {
//         $('#message-box').delay(300).slideDown('slow');
//         $('.QRcode').delay(700).css('display','block');
//     });
    
// });



    

	 });

	

