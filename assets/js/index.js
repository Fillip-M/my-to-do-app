function addTask(text) {
  let taskList = document.getElementById('taskList');

  // Opret en ny task container
  let taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  // Tekst
  let taskText = document.createElement('div');
  taskText.textContent = text;
  taskText.classList.add('user-task');

  // Ikoner
  let iconsDiv = document.createElement('div');
  iconsDiv.classList.add('icons');

  let editBtn = document.createElement('span');
  editBtn.textContent = '✏️';
  editBtn.classList.add('edit');

  let deleteBtn = document.createElement('span');
  deleteBtn.textContent = '🗑️';
  deleteBtn.classList.add('delete');

  // klik events
  editBtn.addEventListener('click', function () {
    let newText = prompt('Rediger task:', taskText.textContent);
    if (newText) taskText.textContent = newText;
  });

  deleteBtn.addEventListener('click', function () {
    taskDiv.remove();
  });

  // saml alt
  iconsDiv.appendChild(editBtn);
  iconsDiv.appendChild(deleteBtn);

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(iconsDiv);

  // indsæt tasken OVER inputfeltet
  taskList.appendChild(taskDiv);
}

// ENTER i inputfelt
document.getElementById('newTaskInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    let text = e.target.value.trim();
    if (text !== '') {
      addTask(text);
      e.target.value = ''; // ryd input
    }
  }
});
