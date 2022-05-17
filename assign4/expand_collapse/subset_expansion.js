/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@me.smccd.edu
CIS 114 OL
subset_expansion.js
Assignment 4
3/19/2018
*/
"use strict";
$(document).ready(function() {
	
	// runs when an h2 heading is clicked
    $("#jdom a").click(function() {
		$(this).toggleClass("hide");
		if ($(this).attr("class") != "hide") {
		   	$(this).prev().hide();		//.fadeOut(1000);
			$(this).text("Show more");
	   	}
	   	else {
	        $(this).prev().show();	//.fadeIn(1000);
			$(this).text("Show less");
	   	}
    }); // end click
});