import Popup from './Popup.js'

class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector)
        this._formElement = this._popupElement.querySelector('.popup__form')
        this._handleFormSubmit = handleFormSubmit;
        this._inputElements = this._popupElement.querySelectorAll('.popup__input')
    }

    _getInputValues() {
        const inputValues = {}
        this._inputElements.forEach((input) => {
            inputValues[input.name] = input.value
        });

        return inputValues
    }

    setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const inputValues = this._getInputValues();
            this._handleFormSubmit(inputValues);

            this.close()        
        });

        super.setEventListeners();
    }
}

export default PopupWithForm;