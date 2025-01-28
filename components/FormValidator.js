class FormValidator {
    constructor(settings, formElement) {
        this._formElement = formElement;
        this._settings = settings;

        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
  
    }

    _disableButton(buttonElement) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
      }

    resetValidation() {
        const buttonElement = this._formElement.querySelector(
          this._submitButtonSelector
        );
        this._disableButton(buttonElement);
    
        const inputList = Array.from(
          this._formElement.querySelectorAll(this._inputSelector)
        );
        inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
          inputElement.value = "";
        });
      }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
      }

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(
          `#${inputElement.id}-error`
        );
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
      }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
          this._disableButton(buttonElement);
        } else {
          buttonElement.classList.remove(this._inactiveButtonClass);
          buttonElement.disabled = false;
        }
      }

    _setEventListeners() {
        const inputList = Array.from(
            this._formElement.querySelectorAll(this._inputSelector));

          const buttonElement = this._formElement.querySelector(
            this._submitButtonSelector);
      
          this._toggleButtonState(inputList, buttonElement);
      
          inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState(inputList, buttonElement);
            });
          });
        }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
          evt.preventDefault();
        });
    
        this._setEventListeners();
      }

}

export default FormValidator;