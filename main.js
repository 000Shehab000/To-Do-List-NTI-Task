const toDo = document.getElementById('to-do')
const addButton = document.getElementById('add-button')
const toDoContainer = document.getElementById('to-dos-container')

function addToDo() {
  const toDoText = toDo.value

  if (toDoText === '') {
    alert('Please write a to do task!')
    return
  }

  const toDoCard = document.createElement('div')
  toDoCard.textContent = toDoText

  toDoContainer.appendChild(toDoCard)

  toDo.value = '' // remove text after adding
}

addButton.addEventListener('click', addToDo)
