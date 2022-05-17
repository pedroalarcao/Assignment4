/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
test_scores.css
Assignment 3
2/23/2018
*/
"use strict";

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var highestScore = 0;
var nameHighestScore = "";


var $ = function (id) { return document.getElementById(id); };

var displayResults = function(){
	var averageScore = 0;
	var total = 0;
	for (var i = 0; i < scores.length; i++) {
		total = total + scores[i];
		if (highestScore < scores[i]) {
			highestScore = 0;	
			nameHighestScore = names[i];
			highestScore = highestScore + scores[i];	//assign new score to it
		}
	}
	averageScore = parseInt(total/scores.length);

	$("results").innerHTML += "<h2>Results</h2>";
	$("results").innerHTML += "<p>Average score = " + averageScore + "</p>";
	$("results").innerHTML += "<p>Highest Score = " + nameHighestScore
							+ " with a score of " + highestScore + "</p>";
	$("name").focus();
};

var displayScores = function(){
	
	$("scores_table").innerHTML += "<h2>Scores</h2>";
	$("scores_table").innerHTML += "<td><strong>Name</strong></td>" 
								+ "<td><strong>Score</strong></td>";
	for (var i = 0; i < scores.length; i++) {
		$("scores_table").innerHTML += "<tr><td>" + names[i] + "</td>"
									+ "<td>" + scores[i] + "</td></tr>";
									
	}
	$("name").focus();
};

var addScore = function(){
	var scoreEntry = parseInt($("score").value);
	var nameEntry = $("name").value;
	
	if(scoreEntry >= 0 && scoreEntry <= 100 && nameEntry != "") {
		scores[scores.length] = scoreEntry;
		names[names.length] = nameEntry;
	}
	else{
		alert("Name and Score entry must be valid!");
	}
	
	$("name").focus();
};
window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
	
};


