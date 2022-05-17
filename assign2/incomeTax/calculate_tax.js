/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
calculate_tax.js
Assignment 2
2/9/2018
*/



"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

  
var calculateTax = function(income){
  
  var tax;
  
  if(income <= 9275){
    tax = income * (10/100)
  }
  else if(income <= 37650 && income > 9275){
    tax = (income - 9275) * (15/100) + 927.50;
  }
  else if(income <= 91150 && income > 37650){
    tax = (income - 37650) * (25/100) + 5183.75;
  }
  else if(income <= 190150 && income > 91150){
    tax = (income - 91150) * (28/100) + 18558.75;
  }
  else if(income <= 413350 && income > 190150){
    tax = (income - 190150) * (33/100) + 46278.75;
  }
  else if(income <= 415050 && income > 413350){
    tax = (income - 413350) * (35/100) + 119934.75;
  }
  else if(income > 415050){
    tax = (income - 415050) * (39.6/100) + 120529.75;
  }
  
  tax = tax.toFixed(2);
  return tax;
};
 
var processEntry = function(){
  
  var income = parseInt($("income").value);
  var errorMessage = "";
  
  if(!(income > 0)){
    errorMessage = "Your income must be gratear than $0.";
    $("income").focus();
  
    alert(errorMessage);
  }

  else{
    $("tax").value = calculateTax(income);
  }
  
  $("income").focus();
  
};

window.onload = function (){
    $("calculate").onclick = processEntry;
    $("income").focus();
};
