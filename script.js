// Get references to the form, add button, and result list
const form = document.getElementById('form');
const add = document.getElementById('add');
const result = document.getElementById('result');

// Add event listener to the form to handle form submission
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the text input field
    const textInput = document.getElementById('text');
    const inputValue = textInput.value;

    // Create a new list item element for the new task
    const newTask = document.createElement("li");
    newTask.textContent = inputValue;

    // Append the new task to the result list
    result.appendChild(newTask);

    // Clear the text input field for new input
    textInput.value = '';
});
