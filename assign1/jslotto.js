        /*
		Pedro Augusto Alarcao de Paula
		pedroaugusdepaula@my.smccd.edu
		114 OL
		jslotto.html
		2/4/2018
		Random Lotto numbers
		*/
var entry;
var lottoNumbers = [];
var counter = 0;
var random;
var megaRandom;
    
entry = prompt("Enter number of lotto tickets (1-10)");
      
	while(entry < 1 || entry > 10){
		entry = prompt("Enter number of lotto tickets (1-10)");
		entry = parseInt(entry)
	}
	var result = Math.random();
      
    var getRandomNumber = function(max){
		var random;
        if (!isNaN(max)){
          random = Math.random();
          random = Math.floor(random * max);
          random = random + 1;
        }
    return random;
    };
    var comparison = function(x, y){
		return x - y;
    }
    while(counter < entry){
		var showLottoNumbers = "";
        for (var i = 0; i < 5; i++){
			random = getRandomNumber(9);
			while (lottoNumbers.indexOf(random) != -1){
				random = getRandomNumber(9);
			}
			lottoNumbers[i] = random;
        }
		lottoNumbers.sort(comparison);
		for (var i = 0; i < lottoNumbers.length; i++) {
			showLottoNumbers += lottoNumbers[i] + " ";
		}
		document.write("************************" + "<br>");
		megaRandom = getRandomNumber(27);
		document.write(showLottoNumbers + megaRandom + " MEGA " + "<br>");
		counter += 1;
    }
document.write("************************" + "<br>");