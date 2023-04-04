// define form elements
const goalNameInput = document.getElementById('goalName');
const descriptionInput = document.getElementById('description');
const deadlineInput = document.getElementById('deadline');
const addButton = document.querySelector('button[type="submit"]');

// add event listener to form submit button
addButton.addEventListener('click', (event) => {