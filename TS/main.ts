const toDo = document.getElementById('to-do') as HTMLInputElement
const addButton = document.getElementById('add-button') as HTMLButtonElement
const toDoContainer = document.getElementById('to-dos-container') as HTMLElement

function addToDo(): void {
  let toDoText: string = toDo.value.trim()

  if (toDoText === '') {
    alert('Please Write a to Do Task!')
    return
  }

  const capLetterReg: RegExp = /^[A-Z]/
  if (!toDoText.match(capLetterReg)) {
    alert('You Should Start With a Capital Letter')
    return
  }

  const toDoCard: HTMLElement = document.createElement('div')

  const toDoTask: HTMLElement = document.createElement('span')
  toDoTask.textContent = toDoText

  const deleteButton: HTMLButtonElement = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', (): void => {
    toDoCard.remove()
    alert('To Do Deleted!')
  })
  deleteButton.className = 'delete-button'

  const doneButton: HTMLButtonElement = document.createElement('button')
  doneButton.textContent = 'Done'
  doneButton.addEventListener('click', (): void => {
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
