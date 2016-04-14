// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../projects.json', true);
    request.addEventListener('readystatechange', function() {
        // wait for file to finish loading
        if (request.readyState === 4 && request.status === 200) {
            var projects = {};

            // read in the json object
            projects = JSON.parse(request.responseText);

            // declare local paragraph array container
            var paragraphArray = [];
            
            // read in the paragraphs array from the json object
            paragraphArray = projects.paragraphs;
            
            // store length of the paragraphArray into a variable
            var paragraphArrayLength = paragraphArray.length;
            
            // loop through the paragraphArray
            for(var number=0; number < paragraphArrayLength; number++) {
                // create a reference to each html paragraph element 
                var paragraph = document.getElementById("paragraph" + (number+1) );
                
                // set the innerHTML of the paragraph to the string from the paragraphArray
                paragraph.innerHTML = paragraphArray[number];
            }

        }
    });
    request.send();

})();