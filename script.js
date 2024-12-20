// Select elements from HTML
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function createTask(taskContent) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const taskText = document.createElement('span');
  taskText.textContent = taskContent;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Event listener to mark task as completed
  taskText.addEventListener('click', () => {
    taskText.classList.toggle('completed');
  });

  // Event listener to delete task
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append elements to the list item
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);
}

// Add new task when the button is clicked
addButton.addEventListener('click', () => {
  const taskContent = taskInput.value.trim();
  
  if (taskContent) {
    createTask(taskContent);
    taskInput.value = ''; // Clear input field
  }
});

// Optional: Add task by pressing Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addButton.click();
  }
});
