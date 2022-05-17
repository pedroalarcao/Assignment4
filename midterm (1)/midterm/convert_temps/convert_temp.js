/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
convert_temp.js
Midterms
2/28/2018
*/
"use strict";
var $ = function(id) { return document.getElementById(id); };

var toCelsius = function(){
	
	clearTextBoxes();
	$("degree_label_1").innerHTML = "Enter Fahrenheit: ";
	$("degree_label_2").innerHTML = "Degrees Celsius: ";
	
	};

var toFahrenheit = function(){
	
	clearTextBoxes();
	$("degree_label_1").innerHTML = "Enter Celsius: ";
	$("degree_label_2").innerHTML = "Degrees Fahrenheit: ";
};

var convertTemp = function(){
	var degrees = $("degrees_entered").value;
	if(!(isNaN(degrees))){
		if($("to_celsius").checked){
			$("degrees_computed").value = ((degrees - 32)*(5/9)).toFixed(0);
		}
		if($("to_fahrenheit").checked){
			$("degrees_computed").value = ((degrees * (9/5)) + 32).toFixed(0);
		}
	}
	else{
		alert("You must enter a valid number for degrees.");
	}
	$("degrees_entered").focus();
};

var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};