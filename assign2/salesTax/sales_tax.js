/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
sales_tax.js
Assignment 2
2/9/2018
*/      
    var $ = function (id) {
      return document.getElementById(id); 
    };

    var processEntries = function(){
      var subtotal = parseFloat($("subtotal").value);
      var taxRate = parseFloat($("tax_rate").value);
      var errorMessage = "";
      
      if(!(subtotal > 0 && subtotal < 10000)){
          errorMessage = "Subtotal must be > 0 and < 10000.";
          $("subtotal").focus();
          alert(errorMessage);
      }
      else if(!(taxRate > 0 && taxRate < 12)){
          errorMessage = "Tax Rate must be > 0 and < 12.";
          $("tax_rate").focus();
          alert(errorMessage);
      }
      
      if (errorMessage == ""){
        var salesTax = subtotal * (taxRate/100);
        $("sales_tax").value = salesTax.toFixed(2);
        var total = salesTax + subtotal;
        $("total").value = total.toFixed(2);
      }
      
      
      $("subtotal").focus();
    };
    
    var zeroEntries = function(){
      $("subtotal").value = null;
      $("tax_rate").value = null;
      $("sales_tax").value = null;
      $("total").value = null;
      
      $("subtotal").focus();
    };
    
    var zeroSubtotal = function(){
      $("subtotal").value = null;
    };
      
        var zeroTaxRate = function(){
      $("tax_rate").value = null;
    };
      
    window.onload = function(){
        $("calculate").onclick = processEntries;
        $("clear").onclick = zeroEntries;
        $("subtotal").onclick = zeroSubtotal;
        $("tax_rate").onclick = zeroTaxRate;
        $("subtotal").focus();
    };