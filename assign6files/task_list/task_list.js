/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
task_list.js
Assignment 6
5/04/2018
*/

"use strict";
var now = new Date();

$(document).ready(function(){
	var displayTasks = function() {
        //$("#task_list").val( localStorage.E15tasks );
		var date = new Date(localStorage.getItem("expiration"));
		
		if(now.getTime() > date.getTime()){
			localStorage.removeItem( "E15tasks" );
			localStorage.removeItem( "expiration" );
		}
		else{
			$("#task_list").val( localStorage.E15tasks );
		}
		
        $("#task").focus();
    };
	
    $("#add_task").click(function() {   
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {  
            // add task to web storage 
            var tasks = localStorage.E15tasks || "";  // default value of empty string
            localStorage.E15tasks = tasks.concat( task, "\n" );      
			var expireDate = new Date (now);
			expireDate.setDate(expireDate.getDate() + 21);
			var expiration = localStorage.expiration || ""; 
			var expire = expireDate.toDateString();
			localStorage.expiration = expiration.concat (expire, "\n");
			
			

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTasks();
        }
    });
    
    $("#clear_tasks").click(function() {
        localStorage.removeItem( "E15tasks" );
		localStorage.removeItem( "expiration" );
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    displayTasks();
});