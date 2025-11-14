const toDo = document.getElementById('to-do')
const addButton = document.getElementById('add-button')
const toDoContainer = document.getElementById('to-dos-container')

function addToDo() {
  const toDoText = toDo.value
  const toDoCard = document.createElement('div')
  toDoCard.textContent = toDoText

  toDoContainer.appendChild(toDoCard)
}

addButton.addEventListener('click', addToDo)
