/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
scores.js
Assignment 7
5/11/2018
*/
"use strict";


$(document).ready(function() {
        
		var scoreValues = [];
		var studentScore = [];
		
    var displayScores = function () {
		
		var averageScore = 0;
		var total = 0;
		
		for (var i = 0; i < scoreValues.length; i++) {
			total = total + parseInt(scoreValues[i]);
		}
		
		averageScore = parseFloat(total/scoreValues.length).toFixed(1);
		

		
		$("#average_score").val(averageScore);
		
		$("#scores").val( studentScore.join("\n") );
        
    };
    
    $("#add_button").click(function() {
        
		var firstName = $("#first_name").val();
        
		var lastName = $("#last_name").val();
	
		var scoreValue = $("#score").val();
		
        if (firstName === ""){
            alert("Please enter a First Name.");
            $("#first_name").focus();
        }
		if (lastName === ""){
			alert("Please enter a Last Name.");
            $("#last_name").focus();
		}
		if (scoreValue === ""){
			alert("Please enter a Score.");
            $("#score").focus();
		}
		else{
			
			scoreValues.push(scoreValue);
			studentScore.push(lastName + ", " + firstName + ": " + scoreValue);
			
			displayScores();
		}
		
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
		
		
    }); // end click()
    
    $("#clear_button").click(function() {
		var scoreValues = [];
		var studentScore = [];


        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click(function() {
		
		studentScore.sort();
		displayScores();

    }); // end click()
    
    $("#first_name").focus();
}); // end ready()