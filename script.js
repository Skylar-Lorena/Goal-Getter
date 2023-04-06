const goals = {
  "goals": [
    {
      "goalName": "Keep fit",
      "description": "Eat well and drink water. Work out",
      "deadline": "2023-04-28",
      "id": 1
    },
    {
      "goalName": "Keep sane",
      "description": "Go out. Take walks. Travel and Be Happy",
      "deadline": "2023-04-28",
      "id": 2
    }
  ]
};

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
  // Since we're not using a server-side database, we'll just add the new goal to our `goals` object
  goal.id = goals.goals.length + 1;
  goals.goals.push(goal);

  // Add the new goal to the list
  const li = document.createElement('li');
  li.classList.add('card');
  li.innerHTML = `
    <h3>${goal.goalName}</h3>
    <p>${goal.description}</p>
    <p>${goal.deadline}</p>
  `;
  goalsList.appendChild(li);

  // Clear the input fields
  goalNameInput.value = '';
  descriptionInput.value = '';
  deadlineInput.value = '';
}

// Function to get all goals from the database and display them on the page
function getGoals() {
  // Since we're not using a server-side database, we'll just loop through our `goals` object
  goals.goals.forEach(goal => {
    const li = document.createElement('li');
    li.classList.add('card');
    li.innerHTML = `
      <h3>${goal.goalName}</h3>
      <p>${goal.description}</p>
      <p>${goal.deadline}</p>
    `;
    goalsList.appendChild(li);
  });
}

// Call the getGoals function when the page loads to display existing goals
getGoals();
