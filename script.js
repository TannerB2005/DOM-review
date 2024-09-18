//Exercise 5
// Add event listener to log every keypress on the input element
textInput.addEventListener('keypress', function (event) {
    console.log('Key pressed:', event.key);
});// Add event listener to update the display paragraph with the current input value
textInput.addEventListener('input', function () {
    textDisplay.textContent = textInput.value;
});

//Exercise 6
// Sample list of items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Get the ul element where the li elements will be appended
const itemList = document.getElementById('itemList');

// Loop through the list of items
items.forEach((item, index) => {
    // Create a new li element
    const liElement = document.createElement('li');

    // Set the text of the li element to the item's name
    liElement.textContent = item;

    // Check if the item index is even
    if (index % 2 === 1) {
        // Set background color to "gray" for even items
        liElement.style.backgroundColor = 'gray';
    }

    // Append the li element to the ul
    itemList.appendChild(liElement);
});