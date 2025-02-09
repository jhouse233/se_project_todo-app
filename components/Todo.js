class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    // console.log("Constructor Received Data:", data); // Debugging

    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleDelete = handleDelete;
    this._handleCheck = handleCheck;
    this._setInitialComplete()

    // console.log("After Setting Data:", this._data); // Debugging
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener('change', () => {
      this._data.completed = !this._data.completed
      this._handleCheck(this._todoCheckboxEl.checked)
    });

    this._todoDeleteBtn.addEventListener('click', () => {
      this._todoElement.remove()
      this._handleDelete(this._todoCheckboxEl.checked)
    });
  }

  _setInitialComplete() {
    if (this._data.completed) {
      return
    } else {
      this._data.completed = false
    }
  }

  _generateCheckbox() {
    this._todoCheckboxEl = this._todoElement.querySelector('.todo__completed');
    this._todoLabel = this._todoElement.querySelector('.todo__label');
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute('for', `todo-${this._data.id}`);
  }

  _generateDueDate() {
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  getView() {
    console.log("Generating View - Data:", this._data); // Debugging

    this._todoElement = this._templateElement.content
      .querySelector('.todo')
      .cloneNode(true)

    this._todoNameEl = this._todoElement.querySelector('.todo__name');

    this._todoDate = this._todoElement.querySelector('.todo__date');
    this._todoDeleteBtn = this._todoElement.querySelector('.todo__delete-btn');

    console.log("Todo Name Element:", this._todoNameEl); // Debugging
    console.log("Todo Name (before setting textContent):", this._data.name); // Debugging


    this._todoNameEl.textContent = this._data.name
    console.log("Todo Data:", this._data);
    console.log("Todo Name:", this._data.name);

    this._generateCheckbox()
    this._setEventListeners()
    this._generateDueDate()

    return this._todoElement
  }
}

export default Todo;


  // getView() {
  //   this._todoElement = this._templateElement.content
  //     .querySelector(".todo")
  //     .cloneNode(true);

  //   const todoNameEl = this._todoElement.querySelector(".todo__name");
  //   const todoDateEl = this._todoElement.querySelector(".todo__date");
  //   const checkbox = this._todoElement.querySelector(".todo__completed");
  //   const label = this._todoElement.querySelector(".todo__label");

  //   const uniqueId = `todo-${this._data.id}`;
  //   this._todoNameEl = this._todoElement.querySelector('.todo__name')

  //   this._todoDate = this._todoElement.querySelector('.todo__date')
  //   this._todoDeleteBtn = this._todoElement.querySelector('.todo__delete-btn')

  //   this._todoNameEl.textContent = this._data.name

  //   this._generateCheckbox()
  //   this._setEventListeners()
  //   this._generateDueDate()

  //   checkbox.id = uniqueId;
  //   label.setAttribute("for", uniqueId);

  //   todoNameEl.textContent = this._data.name;
  //   todoDateEl.textContent = this._generateDueDate();

  //   this._setEventListeners();

  //   return this._todoElement;
  // }
// }


// class Todo {
//     constructor(data, templateSelector, handleCheck, handleDelete) {
//         this._data = data;
//         this._templateElement = document.querySelector(templateSelector);
//         this._handleCheck = handleCheck;
//         this._handleDelete = handleDelete;
//         this._completed = data.completed || false;
//       }
    
//       _generateDueDate() {
//         const dueDate = new Date(this._data.date);
//         if (!isNaN(dueDate)) {
//           return `Due: ${dueDate.toLocaleString("en-US", {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//           })}`;
//         }
//         return "";
//       }
    
//       _toggleCompletion = () => {
//         this._completed = !this._completed;
//         this._handleCheck(this._completed);
//       };
    
//       _handleDeleteClick = () => {
//         this._todoElement.remove();
//         this._handleDelete(this._completed);
//       };
    
//       _setEventListeners() {
//         const checkbox = this._todoElement.querySelector(".todo__completed");
//         const deleteButton = this._todoElement.querySelector(".todo__delete-btn");
//         checkbox.checked = this._completed;
//         checkbox.addEventListener("change", this._toggleCompletion);
//         deleteButton.addEventListener("click", this._handleDeleteClick);
//       }
    
      // getView() {
      //   this._todoElement = this._templateElement.content
      //     .querySelector(".todo")
      //     .cloneNode(true);
    
      //   const todoNameEl = this._todoElement.querySelector(".todo__name");
      //   const todoDateEl = this._todoElement.querySelector(".todo__date");
      //   const checkbox = this._todoElement.querySelector(".todo__completed");
      //   const label = this._todoElement.querySelector(".todo__label");
    
      //   const uniqueId = `todo-${this._data.id}`;
      //   this._todoNameEl = this._todoElement.querySelector('.todo__name')

      //   this._todoDate = this._todoElement.querySelector('.todo__date')
      //   this._todoDeleteBtn = this._todoElement.querySelector('.todo__delete-btn')

      //   this._todoNameEl.textContent = this._data.name

      //   this._generateCheckbox()
      //   this._setEventListeners()
      //   this._generateDueDate()
    
      //   checkbox.id = uniqueId;
      //   label.setAttribute("for", uniqueId);
    
      //   todoNameEl.textContent = this._data.name;
      //   todoDateEl.textContent = this._generateDueDate();
    
      //   this._setEventListeners();
    
      //   return this._todoElement;
      // }
    // }

//     constructor(data, selector, handleCheck, handleDelete) {
//         this._data = data;
//         this._templateElement = document.querySelector(selector);

//         this._handleCheckbox = handleCheck;
//         this._handleDelete = handleDelete;
//     }

//     _setEventListener() {
//         this._todoCheckboxEl.addEventListener("change", () => {
//             this._data.completed = !this._data.completed;
//             this._handleCheckbox(this._data.completed)
//         });

//         this._todoDeleteBtn.addEventListener("click", () => {
//             this._todoElement.remove();
//             this._handleDelete(this._todoCheckboxEl.checked)
//         });
//     }

    

//     // _deleteTodo() {
//     //     this._todoElement.remove();
//     // }

//     _generateDate() {
//         const dueDate = new Date(this._data.date);
//         if (!isNaN(dueDate)) {
//             return `Due: ${dueDate.toLocaleString("en-US", {
//                 year: "numeric",
//                 month: "short",
//                 day: "numeric",
//             })}`;
//         }
//         return "";
//     }

//     _generateCheckBoxEl() {
//         this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
//         this._todoLabel = this._todoElement.querySelector(".todo__label");
//         this._todoCheckboxEl.checked = this._data.completed;
//         this._todoCheckboxEl.id = `todo-${this._data.id}`;
//         this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
//     }

//     getView() {
//         this._todoElement = this._templateElement.content
//             .querySelector(".todo")
//             .cloneNode(true);

//         this._todoNameEl = this._todoElement.querySelector(".todo__name");

//         this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
//         this._todoNameEl.textContent = this._data.name;
        
//         this._generateCheckBoxEl();
//         this._setEventListener();
//         this._generateDate();

//         return this._todoElement;
//     }
// }

