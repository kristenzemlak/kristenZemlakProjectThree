$(document).ready(function(){

    // listen for click on form submit button
    $('.submitButton').click(function(){

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

});


// TO DO: 
    // Weird behavior when submitting - sometimes doesn't work?
    // Change style of selected radio button

// STRETCH GOALS: 
    // Add a second field set
    // Results based on combination of field sets
    // Richer CSS i.e. creative layouts, transitions and animations
    // Richer copywriting i.e. humour, depth