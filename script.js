// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', addGoal);

// Get the ul element where goals will be displayed
const goalsList = document.getElementById('goalsList');

// Function to handle form submit and add goal to the database
function addGoal(event) {
  event.preventDefault();
  
  // Get the input values
  const goalNameInput = document.getElementById('goalName');
  const descriptionInput = document.getElementById('description');
  const deadlineInput = document.getElementById('deadline');
  const goalName = goalNameInput.value;
  const description = descriptionInput.value;
  const deadline = deadlineInput.value;

  // Create a new goal object
  const goal = { goalName, description, deadline };

  // Make a POST request to the server to add the goal to the database
  fetch('http://localhost:3000/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goal)
  })
  .then(response => response.json())
  .then(data => {
    // Add the new goal to the list
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${data.goalName}</h3>
      <p>${data.description}</p>
      <p>${data.deadline}</p>
    `;
    goalsList.appendChild(li);

    // Clear the input fields
    goalNameInput.value = '';
    descriptionInput.value = '';
    deadlineInput.value = '';
  })
  .catch(error => console.error(error));
}

// Function to get all goals from the database and display them on the page
function getGoals() {
  fetch('http://localhost:3000/goals')
  .then(response => response.json())
  .then(goals => {
    // Loop through the goals and add them to the list
    goals.forEach(goal => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${goal.goalName}</h3>
        <p>${goal.description}</p>
        <p>${goal.deadline}</p>
      `;
      goalsList.appendChild(li);
    });
  })
  .catch(error => console.error(error));
}

// Call the getGoals function when the page loads to display existing goals
getGoals();
