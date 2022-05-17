/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
library_die.js
Assignment 7
5/11/2018
*/
"use strict";
var Die = function() {
	
};
Die.prototype.rollDie = function() {
    var random = Math.random();
    random = Math.floor(random * 6);
    return random + 1;
};