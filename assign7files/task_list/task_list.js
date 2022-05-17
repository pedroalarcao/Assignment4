/*
Pedro Augusto Alarcao de Paula
pedroaugusdepaula@my.smccd.edu
CIS 114 OL
task_list.js
Assignment 7
5/11/2018
*/
"use strict";

$(document).ready(function(){
    var tasks = [];

    var displayTaskList = function() {
        tasks.sort();
        
        $("#task_list").val( tasks.join("\n") );
        $("#task").focus();
    };
    
    $("#add_task").click(function() {   
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            $("#task").focus();
        } else {  
            // add new task to tasks array 
            tasks.push( task ); 

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTaskList();
        }
    });
    
    $("#delete_task").click(function() {   
		var deleteTask = parseInt(prompt("Enter index number of task to delete : "));
		if(!(isNaN(deleteTask)) && deleteTask <= (tasks.length - 1) && !(deleteTask < 0)){
			tasks.sort();
			tasks.splice(deleteTask, 1);
			displayTaskList();
		}
		else{
			alert("Number needs to be valid.");
		}
		
        
    });
    
    $("#clear_tasks").click(function() {
        tasks = [];
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // set focus on initial load
    $("#task").focus();
});
