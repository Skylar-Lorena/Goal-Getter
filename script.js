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
  fetch('http://localhost:3000/goals')
  .then(response => response.json())
  .then(data => {
    // add new goal to goals array
    data.goals.push(goal);
     // update database with new goals array
     return fetch('http://localhost:3000/goals', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
// function to clear form inputs
function clearForm() {
    goalNameInput.value = '';
    descriptionInput.value = '';
    deadlineInput.value = '';
  }