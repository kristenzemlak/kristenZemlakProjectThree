$(document).ready(function(){

    // listen for click on form submit button
    $('.submitButton').click(function(event){
        event.preventDefault(); // prevent default form refresh

        //store radio button selection
        const selection = $('input[type="radio"]:checked');

        //prevent empty form submission
        if (selection.length > 0) {
            
            //display value of selection in answer section
            $('.answer').html(selection.val());
        }
        else {
            //display error message if no selection is made
            $('.answer').html("Please select an option!");
        }
    });

    
    $('.resetButton').click(function(e){
        e.preventDefault(); // prevent default form refresh

            $('.answer').html(" ");
    });

});