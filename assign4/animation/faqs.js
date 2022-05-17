/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@me.smccd.edu
CIS 114 OL
faqs.js
Assignment 4
3/19/2018
*/

$(document).ready(function() {
	
	// runs when an h2 heading is clicked
    $("#faqs h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
		   	$(this).next().slideUp(500, "easeInBack");		//.fadeOut(1000);
	   	}
	   	else {
	        $(this).next().slideDown(1000, 	"easeOutBack");	//.fadeIn(1000);
	   	}
    }); // end click
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			   .animate( { fontSize: "175%", left: "0" }, 1000 );
	}); // end click
    
}); // end ready
