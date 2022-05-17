/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
clock.js
Assignment 3
2/23/2018
*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

var timer;

var displayCurrentTime = function() {
	var date = new Date();
	
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if(hours > 12){
		hours = (hours - 12);
		$("ampm").innerHTML = "PM";
		$("hours").innerHTML = padSingleDigit(hours);
	}
	else if (hours == 12){
		$("ampm").innerHTML = "PM";
		$("hours").innerHTML = padSingleDigit(hours);
	}
	else if(hours == 0){
		$("hours").innerHTML = "12";
		$("ampm").innerHTML = "AM";
	}
	else{
		$("ampm").innerHTML = "AM";
		$("hours").innerHTML = padSingleDigit(hours);
	}
	$("minutes").innerHTML = padSingleDigit(minutes);
	$("seconds").innerHTML = padSingleDigit(seconds);
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
	displayCurrentTime();
	timer = setInterval(displayCurrentTime, 1000);
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
};