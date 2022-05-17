/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@me.smccd.edu
CIS 114 OL
image_swap.js
Assignment 4
3/19/2018
*/

$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		
		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");
		
		$("#image").fadeTo(2000, .01,
			function(){
				$(this).attr("src", imageURL).fadeTo(2000, 1);
			}
		);
		$("#caption").fadeTo(2000, .01,
			function(){
				$(this).text(caption).fadeTo(2000, 1);
			}
		);

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready