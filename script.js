const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

function createTask(taskText) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.className = 'taskCheckbox';
    span.textContent = taskText;
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'deleteBtn';

    // Checkbox orqali matnni "completed" qilish
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    });

    // O'chirish tugmasi uchun
    deleteBtn.addEventListener('click', () => li.remove());

    li.append(checkbox, span, deleteBtn);
    todoList.append(li);
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        createTask(taskText);
        taskInput.value = '';
    }
});

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeBtn.textContent = body.classList.contains('dark-theme') ? '☀' : '🌙';
});

document.querySelectorAll('li').forEach((li) => {
    const checkbox = li.querySelector('.taskCheckbox');
    const deleteBtn = li.querySelector('.deleteBtn');
    const span = li.querySelector('span');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    });

    deleteBtn.addEventListener('click', () => li.remove());
});
