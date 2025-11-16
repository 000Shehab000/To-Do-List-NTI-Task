var toDo = document.getElementById('to-do');
var addButton = document.getElementById('add-button');
var toDoContainer = document.getElementById('to-dos-container');
function addToDo() {
    var toDoText = toDo.value.trim();
    if (toDoText === '') {
        alert('Please Write a to Do Task!');
        return;
    }
    var capLetterReg = /^[A-Z]/;
    if (!toDoText.match(capLetterReg)) {
        alert('You Should Start With a Capital Letter');
        return;
    }
    var toDoCard = document.createElement('div');
    var toDoTask = document.createElement('span');
    toDoTask.textContent = toDoText;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        toDoCard.remove();
        alert('To Do Deleted!');
    });
    deleteButton.className = 'delete-button';
    var doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', function () {
        toDoTask.style.textDecoration = 'line-through';
        doneButton.remove();
    });
    doneButton.className = 'done-button';
    toDoCard.appendChild(toDoTask);
    toDoCard.appendChild(doneButton);
    toDoCard.appendChild(deleteButton);
    toDoContainer.appendChild(toDoCard);
    toDo.value = ''; // remove text after adding
}
addButton.addEventListener('click', addToDo);
