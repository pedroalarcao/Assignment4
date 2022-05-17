/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
itunes.js
Finals
5/25/2018
*/
$(document).ready(function(){
   	var searchTerm;
   	$("#btnSearch").click(function() {
		searchTerm = "";

		searchTerm = $("#search").val();
		
		var url = "http://itunes.apple.com/search?" +
    			  "term=" + searchTerm + "&country=us&limit=20&media=music&entity=musicTrack" + "&callback=?";

		$.getJSON(url, function(data){
			$.each(data.results, function(key, value){
				$("#result").append(
					"<div style='width: 100%'>" + 
					"<p><div class='result-div'>Track: </div> <span>" + value.trackCensoredName + " " + 
					"<a href=" + value.previewUrl + ">" + "Preview" + "</a>" +" " + "<a href=" +
					value.previewUrl + ">" + "Full Song" + "</a>"+"</span><img style='float: right' src=" 
					+ value.artworkUrl100 + ">"+ "</p>" +
					"<p><div class='result-div'>Track Price: </div> <span>" + value.trackPrice 
					+ " " + value.currency + "</span></p>" +
							
					"<p><div class='result-div'>Artist:</div> <span>" 
					+ "<a href=" + value.artistViewUrl + ">" + value.artistName + "</a>" + "</p>" +
							
					"<p><div class='result-div'>Collection: </div> <span>" 
					+ "<a href=" + value.collectionViewUrl + ">" + value.collectionCensoredName +
					"</a>" + "</span></p>" +
							
					"<p><div class='result-div'>Collection Price:  </div> <span>" + value.collectionPrice +							"</span></p>" +
							
					"<p><div class='result-div'>Primary Genre: </div> <span>" + value.primaryGenreName +
					"</span></p></div>"
				);
					
			});
		}); 
	});
});