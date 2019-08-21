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
    // How to commit to Github
    // How to clear radio selection when page refreshes
    // Change style of selected radio button
    // Why can users only select one option???? Happy coincidince
    // Is it OK that I didn't do a list? When would I do a list??

// STRETCH GOALS: 
    // Add a second field set
    // Results based on combination of field sets
    // Richer CSS i.e. creative layouts, transitions and animations
    // Richer copywriting i.e. humour, depth