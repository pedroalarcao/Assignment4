/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
slideshow.js
Assignment 3
2/23/2018
*/

"use strict";
var $ = function (id) { return document.getElementById(id); };

var imageCache = [];
var imageCounter = 0;
var timer;

var runSlideShow = function() {

    imageCounter = (imageCounter + 1) % imageCache.length;
    var image = imageCache[imageCounter];
    $("image").src = image.src;
    $("caption").firstChild.nodeValue = image.title;
};

window.onload = function () {
    var listNode = $("image_list");    // the ul element
    var links = listNode.getElementsByTagName("a");
    
    // Preload image, copy title properties, and store in array
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.getAttribute("href");
        image.title = link.getAttribute("title");
        imageCache[imageCache.length] = image;
    }
	
    // Attach start and pause event handlers
    $("start").onclick = function() {
		runSlideShow();
		timer = setInterval( runSlideShow, 2000);
		$("start").disabled = true;
		$("pause").disabled = false;
		
		
			
    };
    $("pause").onclick = function() {
        clearInterval( timer );
		$("start").disabled = false;
		$("pause").disabled = true;
    };
};