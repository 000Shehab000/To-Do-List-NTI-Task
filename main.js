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

  const toDoTask = document.createElement('span')
  toDoTask.textContent = toDoText

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'delete'
  deleteButton.addEventListener('click', () => {
    toDoCard.remove()
    alert('to do deleted!')
  })

  const doneButton = document.createElement('button')
  doneButton.textContent = 'done'
  doneButton.addEventListener('click', () => {
    toDoTask.style.textDecoration = 'line-through'
    doneButton.remove()
  })

  toDoCard.appendChild(toDoTask)
  toDoCard.appendChild(doneButton)
  toDoCard.appendChild(deleteButton)

  toDoContainer.appendChild(toDoCard)

  toDo.value = '' // remove text after adding
}

addButton.addEventListener('click', addToDo)
