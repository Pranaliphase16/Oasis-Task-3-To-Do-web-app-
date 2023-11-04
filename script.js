const taskInput = document.getElementById('taskInput');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-actions">
                <button class="edit-button" onclick="editTask(this)">Edit</button>
                <button class="delete-button" onclick="deleteTask(this)">Delete</button>
                <button class="complete-button" onclick="completeTask(this)">Complete</button>
            </div>
        `;
        pendingTasks.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(editButton) {
    const li = editButton.parentElement.parentElement;
    const taskText = li.querySelector('span').textContent;
    const updatedTaskText = prompt('Edit task:', taskText);
    if (updatedTaskText !== null) {
        li.querySelector('span').textContent = updatedTaskText;
    }
}

function deleteTask(deleteButton) {
    const li = deleteButton.parentElement.parentElement;
    li.remove();
}

function completeTask(completeButton) {
    const li = completeButton.parentElement.parentElement;
    li.querySelector('.task-actions').remove();
    li.classList.add('completed');
    completedTasks.appendChild(li);
}
