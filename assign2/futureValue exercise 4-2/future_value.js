/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
future_value.js
Assignment 2
2/9/2018
*/  

    "use strict";
      var $ = function(id) {
        return document.getElementById(id);
      };
      var calculateFV = function(investment, interest, years){
        var futureValue = investment + (investment * interest / 100);
        futureValue = futureValue.toFixed(2);
        return futureValue;
      };

      var processEntries = function(){
        var investment = parseFloat($("investment").value);
        var interest = parseFloat($("rate").value);
        var years = parseInt($("years").value);
        var errorMessage = "";
        
        if(!(investment > 0 && investment <= 100000)){
          errorMessage = "Investment must be 1-100000.";
          $("investment").focus();
          
        }
        else if(!(interest > 0 && interest <= 15)){
          errorMessage = "Interest rate must be 1-15.";
          $("rate").focus();
        }
        else if(!(years > 0 && years <= 50)){
          errorMessage = "Years must be 1-50.";
          $("years").focus();
        }
        if (errorMessage != ""){
          alert(errorMessage);
        }
        else{
          $("future_value").value = calculateFV(investment, interest, years);
        }
      };
      
      window.onload = function(){
        $("calculate").onclick = processEntries;
        $("investment").focus();
      };
      