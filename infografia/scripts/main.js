

$(document).ready(function(){


	$( "html" ).scrollTop( 100 );
	$("html, body").animate({ scrollTop: 0 }, "fast");

	$('body').css({
		'overflow': 'hidden'
	});

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);

	setTimeout(function(){
		/*$("#line-intro-1 .inner-line").animate({
			width: "199px"
		}, 2000);*/
		/*$("#line-intro-2 .inner-line").animate({
			width: "100%"
		}, "slow");*/
	}, 2400);
	
});

$('#btn-hang').click(function(){
	$('#btn-hang').hide();
  	$("#box-op").animate({ "top": "100px" }, "slow" );
  	$('#head-line .inner-line').animate({
			width: "100%"
		}, 2000);
  	
  	
  	setTimeout(function(){
  		$('#neon-box-one .inner-line').animate({"width": "350px"}, 1000);
  		setTimeout(function(){
  			$('#neon-box-two .inner-line').animate({ 
		  		width: "350px" 
		  	}, 1000 );
  		}, 900);

  		setTimeout(function(){
  			$('#line-intro-1 .inner-line').css("width", "20px");
  			$("#box-op").animate({ "top": "440px" }, 800 );
  			$('#line-intro-1').show();
  			$('#line-intro-2').show();
  			$('#line-intro-1 .inner-line').animate({ "width": "245px" }, 1000 );
  			$('#line-intro-2 .inner-line').animate({ "width": "0" }, 1000 );
  			$('.intro-section-right').animate({ "top": "-340px" }, 500 );
  		}, 1800);

  		setTimeout(function(){
  			$('#neon-box-one .inner-line').slideUp();
  			$('#neon-box-two .inner-line').slideUp();

  		}, 1800);

	}, 400);
});

$('#stepBtn-next-1').click(function(){
	$('#line-intro-1 .inner-line').animate({ "width": "100%" }, 1000 );
	setTimeout(function(){
  			$('#line-intro-end .inner-line.line-1').animate({ "width": "0" }, 1000 );
  			$('#line-intro-end .inner-line.line-2').animate({ "width": "0" }, 1000 );
  		}, 1000);

        $('html, body').animate({
        scrollTop: $(".info-box").offset().top
    	}, 2000);
        $("#box-top").animate({
        	top: "20px"
        }, 1200 );
        $("#box-op").animate({
        	top: "860px"
        }, 800 );

        setTimeout(function(){
        	$('#section-one #left .box-p').slideDown( "slow" );
        	setTimeout(function(){
        		$("#section-one #left .box-p").animate({
        			top: "60",
		        	borderWidth: "0",
		        	backgroundColor: "#414141"
		        }, 800 );
        	}, 500);

        	setTimeout(function(){
        		$("#section-one #left .box-p p").fadeIn();
        	}, 1200);
        }, 1500);


        setTimeout(function(){
        	$('#section-one #center .box-p').slideDown( "slow" );
        	setTimeout(function(){
        		$("#section-one #center .box-p").animate({
	    			top: "20",
		        	borderWidth: "0",
		        	backgroundColor: "#ECE6D3"
		        }, 800 );
        	}, 500);

        	setTimeout(function(){
        		$("#section-one #center .box-p p").fadeIn();
        	}, 1200);
        }, 1200);

        setTimeout(function(){
        	$('#section-one #right .box-p').slideDown( "slow" );
        	setTimeout(function(){
        		$("#section-one #right .box-p").animate({
	    			top: "60",
		        	borderWidth: "0",
		        	backgroundColor: "#414141"
		        }, 800 );
        	}, 500);

        	setTimeout(function(){
        		$("#section-one #right .box-p p").fadeIn();
        		$('#stepBtn-next-2').show();
        	}, 1200);
        }, 1000);
});


$('#stepBtn-next-2').click(function(){

	$("#section-one #left .box-p p").fadeOut();
	$("#section-one #center .box-p p").fadeOut();
	$("#section-one #right .box-p p").fadeOut();
	$('#stepBtn-next-2').hide();

	$("#section-one #left .box-p").animate({
		top: "400",
    	backgroundColor: "#FF0A3E"
    }, 800 );

	$("#section-one #center .box-p").animate({
		top: "400",
    	backgroundColor: "#FF0A3E"
    }, 800 );

	$("#section-one #right .box-p").animate({
		top: "400",
    	backgroundColor: "#FF0A3E"
    }, 800 );


	$('#section-one #left .box-p').hide('slide', {direction: 'down'}, 1000);
	$('#section-one #center .box-p').hide('slide', {direction: 'down'}, 1000);
	$('#section-one #right .box-p').hide('slide', {direction: 'down'}, 1000);
		//$( "#section-one #right .box-p" ).hide( 'bounce', {}, 1000, callback("#section-one #right .box-p") );

	setTimeout(function() {
		$('#line-s1-end .inner-line').show('slide', {direction: 'up'}, 400);
	}, 300);

	setTimeout(function() {
		$('html, body').animate({
        scrollTop: $("#line-s1-end .inner-line").offset().top
    	}, 2000);
    	$("#box-top").animate({
        	top: "440px"
        }, 1200 );
        $("#box-op").animate({
        	top: "1260px"
        }, 800 );

        $('#section-two #num-1').animate({
        	top: "50px"
        }, 800 );

        
	    setTimeout(function() {

		    $('#section-two #left-2 .box-p').animate({
		     	left: "0",
		     	width: "240px"
		    }, 600 );

	
		    	$('#section-two #left-2 .box-p').animate({
			        top: "80",
			        height: "300px",
			        borderWidth: "0",
			        backgroundColor: "#333333"
			    }, 800 );

	    }, 2000);

	    setTimeout(function() {

		    $('#section-two #center-2 .box-p').animate({
		     	left: "0",
		     	width: "240px"
		    }, 600 );

		    setTimeout(function() {
		    	$('#section-two #center-2 .box-p').animate({
			        top: "50",
			        height: "300px",
			        borderWidth: "0",
			        backgroundColor: "#333333"
			    }, 800 );
		    }, 1000);
	    }, 2000);

	    setTimeout(function() {

		    $('#section-two #right-2 .box-p').animate({
		     	left: "0",
		     	width: "240px"
		    }, 600 );

		    setTimeout(function() {
		    	$('#section-two #right-2 .box-p').animate({
			        top: "20",
		     		height: "300px",
		     		borderWidth: "0",
			        backgroundColor: "#333333"
			    }, 800 );
		    }, 1400);
	    }, 2000);

	    setTimeout(function() {
	    	$('#section-two #left-2 .box-p p').fadeIn();
	    }, 3000);

	     setTimeout(function() {
	    	$('#section-two #center-2 .box-p p').fadeIn();
	    }, 3500);
	     setTimeout(function() {
	    	$('#section-two #right-2 .box-p p').fadeIn();
	    }, 3700);

	    setTimeout(function() {
	    	$('#stepBtn-next-3').show();
	   	}, 4000);

	}, 300);


});

$('#stepBtn-next-3').click(function(){
	console.log("h");
	$('#line-s2-end .inner-line').animate({
 		height: "100%"
    }, 800 );
});




$('body').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})


