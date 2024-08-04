// Get references to the form, add button, and result list
const form = document.getElementById('form');
const add = document.getElementById('add');
const result = document.getElementById('result');

form.addEventListener("submit", (aviod) => {

    aviod.preventDefault();

    const text = document.getElementById('text');
    const save = text.value;

    const task = document.createElement('li');
    task.textContent = save;

    result.appendChild(task);

    text.value = '';

});