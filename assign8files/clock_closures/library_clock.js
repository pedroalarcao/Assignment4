/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
library_clock.js
Assignment 8
5/15/2018
*/
"use strict";

var createClock = function(hourSpan, minuteSpan, secondSpan, ampmSpan) {
    // private state
    var displayCurrentTime = function() {
        var now = new Date();
        var hours = now.getHours();
        var ampm = "AM"; // set default value

        // correct hours and AM/PM value for display
        if (hours > 12) { // convert from military time
            hours = hours - 12;
            ampm = "PM";
        } else { // adjust 12 noon and 12 midnight
             switch (hours) {
                case 12: // noon
                    ampm = "PM";
                    break;
                case 0:  // midnight
                    hours = 12;
                    ampm = "AM";
            }
        }

        $("#hours").text( hours );
        $("#minutes").text( padSingleDigit(now.getMinutes()) );
        $("#seconds").text( padSingleDigit(now.getSeconds()) );
        $("#ampm").text( ampm );
    };

    var padSingleDigit = function(num) {
        return (num < 10) ? "0" + num : num;
    };

    
    // public methods
	var myObj = new Object();// created object
	
	myObj.start=function(){
		displayCurrentTime();
		setInterval(displayCurrentTime, 1000);
	}
return myObj;// returns object
};