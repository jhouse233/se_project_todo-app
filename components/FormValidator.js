class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings
    this._formElement = formElement

    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    )
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    )
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass)
      this._buttonElement.disabled = true
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass)
      this._buttonElement.disabled = false
    }
  }


  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement)
      inputElement.value = ''
    })
    this._toggleButtonState()
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }


  _showInputError = (inputElement, errorMessage) => {
    const errorElementId = `#${inputElement.id}-error`
    const errorElement = this._formElement.querySelector(errorElementId)
    inputElement.classList.add(this._settings.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(this._settings.errorClass)
  }

  _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`
    const errorElement = this._formElement.querySelector(errorElementId)
    inputElement.classList.remove(this._settings.inputErrorClass)
    errorElement.classList.remove(this._settings.errorClass)
    errorElement.textContent = ''
  }



  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid
    })
  }

  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    })
    this._setEventListeners()
    this._toggleButtonState()
  }


}

export default FormValidator;


// class FormValidator {
//     constructor(settings, formElement) {
//         this._formElement = formElement;
//         this._settings = settings;

//         this._inputSelector = settings.inputSelector;
//         this._submitButtonSelector = settings.submitButtonSelector;
//         this._errorClass = settings.errorClass;
//         this._inputErrorClass = settings.inputErrorClass;
//         this._inactiveButtonClass = settings.inactiveButtonClass;

//         this._inputList = Array.from(
//           formElement.querySelectorAll(settings.inputSelector)
//         )
//         this._buttonElement = formElement.querySelector(
//           settings.submitButtonSelector
//         )
  
//     }

//     _disableButton(buttonElement) {
//         buttonElement.classList.add(this._inactiveButtonClass);
//         buttonElement.disabled = true;
//     }


//     resetValidation() {
//       this._inputList.forEach(inputElement => {
//         this._hideInputError(inputElement)
//         inputElement.value = ''
//       })
//       this._toggleButtonState()
//     }
//     // resetValidation() {
//     //     const buttonElement = this._formElement.querySelector(
//     //       this._submitButtonSelector
//     //     );
//     //     this._disableButton(buttonElement);
    
//     //     const inputList = Array.from(
//     //       this._formElement.querySelectorAll(this._inputSelector)
//     //     );
//     //     inputList.forEach((inputElement) => {
//     //       this._hideInputError(inputElement);
//     //       inputElement.value = "";
//     //     });
//     //   }


//     _hideInputError(inputElement) {
//         const errorElement = this._formElement.querySelector(
//           `#${inputElement.id}-error`
//         );
//         inputElement.classList.remove(this._inputErrorClass);
//         errorElement.textContent = "";
//         errorElement.classList.remove(this._errorClass);
//     }
      
//     _checkInputValidity(inputElement) {
//         if (!inputElement.validity.valid) {
//           this._showInputError(inputElement, inputElement.validationMessage);
//         } else {
//           this._hideInputError(inputElement);
//         }
//     }

//     _hasInvalidInput() {
//         return this._inputList.some(inputElement => {
//           return !inputElement.validity.valid
//         })
//     }
//     // _hasInvalidInput = (inputList) => {
//     //     return inputList.some((inputElement) => {
//     //       return !inputElement.validity.valid;
//     //     });
//     //   };

//     _showInputError(inputElement, errorMessage) {
//         const errorElement = this._formElement.querySelector(
//           `#${inputElement.id}-error`
//         );
//         inputElement.classList.add(this._inputErrorClass);
//         errorElement.textContent = errorMessage;
//         errorElement.classList.add(this._errorClass);
//     }


//       _toggleButtonState() {
//         if (this._hasInvalidInput(this._inputList)) {
//           this._buttonElement.classList.add(this._settings.inactiveButtonClass)
//           this._buttonElement.disabled = true
//         } else {
//           this._buttonElement.classList.remove(this._settings.inactiveButtonClass)
//           this._buttonElement.disabled = false
//         }
//       }
//     // _toggleButtonState(inputList, buttonElement) {
//     //     if (this._hasInvalidInput(inputList)) {
//     //       this._disableButton(buttonElement);
//     //     } else {
//     //       buttonElement.classList.remove(this._inactiveButtonClass);
//     //       buttonElement.disabled = false;
//     //     }
//     //   }
//     _setEventListeners() {
//       this._inputList.forEach(inputElement => {
//         inputElement.addEventListener('input', () => {
//           this._checkInputValidity(inputElement)
//           this._toggleButtonState()
//         })
//       })
//     }

//     // _setEventListeners() {
//     //     const inputList = Array.from(
//     //         this._formElement.querySelectorAll(this._inputSelector));

//     //       const buttonElement = this._formElement.querySelector(
//     //         this._submitButtonSelector);
      
//     //       this._toggleButtonState(inputList, buttonElement);
      
//     //       inputList.forEach((inputElement) => {
//     //         inputElement.addEventListener("input", () => {
//     //           this._checkInputValidity(inputElement);
//     //           this._toggleButtonState(inputList, buttonElement);
//     //         });
//     //       });
//     //     }

//     enableValidation() {
//         this._formElement.addEventListener("submit", (evt) => {
//           evt.preventDefault();
//         });
    
//         this._setEventListeners();
//         this._toggleButtonState();
//       }

// }

// export default FormValidator;