/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
rollover.js
Assignment 3
2/23/2018
*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");

	var image = new Image();
		
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
	for ( i = 0; i < links.length; i++){
		link = links[i];
		image = new Image();
		image.src = link.href;
	}
    

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        link = this;
		
		image1.src = links[0];
    };
    image1.onmouseout = function() {
        link = this;
		
		image1.src = links[2];
    };
    
    image2.onmouseover = function() {
        link = this;
		
		image2.src = links[1];
    };
    image2.onmouseout = function() {
		link = this;
		
		image2.src = links[3];
        
    };
};
