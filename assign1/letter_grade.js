        /*
		Pedro Augusto Alarcao de Paula
		pedroaugusdepaula@my.smccd.edu
		114 OL
		letter_grade.html
		2/4/2018
		Number Grade to Letter Grade program
		*/
	var scoreNumber;
		var letterGrade;
        
		do {
            scoreNumber = prompt("Enter number grade from 0 through 100\n" +
                           "Or enter -1 to end entries", -1);
            scoreNumber = parseInt(scoreNumber);
			if(scoreNumber >=93 && scoreNumber <=100){
				letterGrade = "A";
			}
			if(scoreNumber >=90 && scoreNumber <=92){
				letterGrade = "A-";
			}
			if(scoreNumber >=87 && scoreNumber <=89){
				letterGrade = "B+";
			}
			if(scoreNumber >=83 && scoreNumber <=86){
				letterGrade = "B";
			}
			if(scoreNumber >=80 && scoreNumber <=82){
				letterGrade = "B-";
			}
			if(scoreNumber >=77 && scoreNumber <=79){
				letterGrade = "C+";
			}
			if(scoreNumber >=70 && scoreNumber <=76){
				letterGrade = "C";
			}
			if(scoreNumber >=67 && scoreNumber <=69){
				letterGrade = "D+";
			}
			if(scoreNumber >=63 && scoreNumber <=66){
				letterGrade = "D";
			}
			if(scoreNumber >=60 && scoreNumber <=62){
				letterGrade = "D-";
			}
			if(scoreNumber >=0 && scoreNumber <=59){
				letterGrade = "F";
			}
			if(scoreNumber == -1){
				letterGrade = "No valid entry";
			}
			alert("\nNumber grade = " + scoreNumber + "\nLetter Grade = " + letterGrade);
        }
        while (scoreNumber != -1); 