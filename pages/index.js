import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import TodoCounter from '../components/TodoCounter.js';


const addTodoButton = document.querySelector('.button_action_add')
const addTodoPopup = document.querySelector('#add-todo-popup')
const addTodoForm = addTodoPopup.querySelector('.popup__form')

const todoCounter = new TodoCounter(initialTodos, '.counter')
const newTodoValidator = new FormValidator(validationConfig, addTodoForm)


function generateTodo(data) {
  const todo = new Todo(
    data,
    '#todo-template',
    updateTodoCounter,
    deleteTodoInCounter
  )
  const todoElement = todo.getView()

  todoCounter.updateTotal(true)

  section.addItem(todoElement)
}

function handleAddTodoFormSubmit(inputValues) {
  const id = uuidv4()

  const newTodoData = {id, ...inputValues}

  generateTodo(newTodoData)
  newTodoValidator.resetValidation()
}

function updateTodoCounter(checked) {
  todoCounter.updateCompleted(checked)
}

function deleteTodoInCounter(checked) {
  if (checked) {
    todoCounter.updateCompleted(false)
    todoCounter.updateTotal(false)
  } else {
    todoCounter.updateTotal(false)

  }
}

addTodoButton.addEventListener('click', () => {
  popupWithForm.open()
})

const section = new Section({
  items: initialTodos,
  renderer: item => {
    generateTodo(item)
  },
  containerSelector: '.todos__list',
})

const popupWithForm = new PopupWithForm(
  '#add-todo-popup',
  handleAddTodoFormSubmit
)

newTodoValidator.enableValidation()
popupWithForm.setEventListeners()
section.renderItems()
