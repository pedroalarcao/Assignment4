/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@me.smccd.edu
CIS 114 OL
book_list.js
Assignment 4
3/19/2018
*/


$(document).ready(function(evt){
	$("#categories h2").click(function() {
		$(this).toggleClass("minus");
		if($(this).attr("class") != "minus"){
			$(this).next().hide();
			$("#image").attr("src", null);
		}
		else{
			$(this).next().show();
			
		}
		evt.preventDefault();
	});
	
	$("#categories a").each(function() {
        var mainImages = new Image();
        mainImages.src = $(this).attr("href");
    });
	
    $("#categories a").click(function(evt) {
        //place image
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);
		// cancel the default action of the link
        evt.preventDefault();  // jQuery cross-browser method
    }); // end click
	
	$("#categories").find("a:first").focus();
});

