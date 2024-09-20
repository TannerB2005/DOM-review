//Exercise 5
// Wrap the code inside a window.onload event listener to ensure the document object is available
window.onload = function () {
    // Get references to the input and p elements
    const textInput = document.getElementById('textInput');
    const textDisplay = document.getElementById('textDisplay');

    // Add an event listener to the input element to capture input changes
    textInput.addEventListener('input', function () {
        // Update the text content of the p element with the input value
        textDisplay.textContent = textInput.value;
    });
};

//Exercise 6 
