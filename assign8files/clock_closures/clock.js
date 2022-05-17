/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
clock.js
Assignment 8
5/15/2018
*/
"use strict";
$(document).ready(function() {
    //stop watch timer variable and elapsed time object
    var stopwatchTimer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 

    var padSingleDigit = function(num) {
        return (num < 10) ? "0" + num : num;
    };

    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
   var obj = createClock();
   obj.start();
   
   var stopwatch = createStopwatch();
	// set up stopwatch event handlers
	$("start").onclick = stopwatch.start;
	$("stop").onclick = stopwatch.stop;
	$("reset").onclick = stopwatch.reset;

}); // end ready()
