// define form elements
const goalNameInput = document.getElementById('goalName');
const descriptionInput = document.getElementById('description');
const deadlineInput = document.getElementById('deadline');
const addButton = document.querySelector('button[type="submit"]');

// add event listener to form submit button
addButton.addEventListener('click', (event) => {
    // prevent default form submission behavior
  event.preventDefault();
    // get form values
    const goalName = goalNameInput.value;
    const description = descriptionInput.value;
    const deadline = deadlineInput.value;
   // create goal object
  const goal = {
    name: goalName,
    description: description,
    deadline: deadline
  };
   // add goal to database
   addGoal(goal);
  // clear form inputs
  clearForm();
});

// function to add a goal to the database
function addGoal(goal) {
    // get current goals from database
  fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // add new goal to goals array
    data.goals.push(goal);