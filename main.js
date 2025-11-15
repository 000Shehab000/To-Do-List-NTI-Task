const toDo = document.getElementById('to-do')
const addButton = document.getElementById('add-button')
const toDoContainer = document.getElementById('to-dos-container')

function addToDo() {
  const toDoText = toDo.value.trim()

  if (toDoText === '') {
    alert('Please Write a to Do Task!')
    return
  }

  const capLetterReg = /^[A-Z]/
  if (!toDoText.match(capLetterReg)) {
    alert('You Should Start With a Capital Letter')
    return
  }

  const toDoCard = document.createElement('div')

  const toDoTask = document.createElement('span')
  toDoTask.textContent = toDoText

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', () => {
    toDoCard.remove()
    alert('To Do Deleted!')
  })
  deleteButton.className = 'delete-button'

  const doneButton = document.createElement('button')
  doneButton.textContent = 'Done'
  doneButton.addEventListener('click', () => {
    toDoTask.style.textDecoration = 'line-through'
    doneButton.remove()
  })
  doneButton.className = 'done-button'

  toDoCard.appendChild(toDoTask)
  toDoCard.appendChild(doneButton)
  toDoCard.appendChild(deleteButton)

  toDoContainer.appendChild(toDoCard)

  toDo.value = '' // remove text after adding
}

addButton.addEventListener('click', addToDo)
