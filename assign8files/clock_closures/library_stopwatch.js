/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
library_stopwatch.js
Assignment 8
5/15/2018
*/
"use strict";

var createStopwatch = function(minuteSpan, secondSpan, msSpan) {
    // private state
	var stopwatchTimer;
	var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
	var padSingleDigit = function(num) {
        return (num < 10) ? "0" + num : num;
    };
	var tickStopwatch = function() {    
        // increment milliseconds by 10 milliseconds
        elapsed.milliseconds = elapsed.milliseconds + 10;

        // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        // if seconds total 60, increment minutes by one and reset seconds to zero
        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        //display new stopwatch time
        $("#s_minutes").text( padSingleDigit(elapsed.minutes) );
        $("#s_seconds").text( padSingleDigit(elapsed.seconds) );
        $("#s_ms").text( elapsed.milliseconds );
    };

    // stopwatch event handlers
    $("#start").click(function() {
        // do first tick of stop watch and then set interval timer to tick 
        // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
        // variable so next two functions can stop timer.
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }); 
    
    $("#stop").click(function() {
        // stop timer
        clearInterval(stopwatchTimer);
    }); 
    
    $("#reset").click(function() {
        // stop timer
        clearInterval(stopwatchTimer);

        // clear elapsed object and stopwatch display
        elapsed = { minutes:0, seconds:0, milliseconds:0 }; 

        $("#s_minutes").text( "00" );
        $("#s_seconds").text( "00" );
        $("#s_ms").text( "000" );
    }); 

    
    // public methods
	var myStopwatch = new Object();
	
	myStopwatch.start = function(){
		startStopwatch();
	}

	myStopwatch.stop = function(){
		stopStopwatch();
	}
	myStopwatch.reset = function(){
		resetStopwatch();
	}
	return myStopwatch;

};
