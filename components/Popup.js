class Popup {
    constructor(popupSelector) {
      this._popupElement = document.querySelector(popupSelector)
      this._popupCloseButton = this._popupElement.querySelector('.popup__close')
    }
  
    open() {
      this._popupElement.classList.add('popup_visible')
      document.addEventListener('keydown', this._handleEscapeClose)
    }
  
    close() {
      this._popupElement.classList.remove('popup_visible')
      document.removeEventListener('keydown', this._handleEscapeClose)
    }

    _handleOverlayClose (event) {
        if (event.target === this._popupElement || event.target === this._popupCloseButton) {
          this.close()
        }
      }
  
    _handleEscapeClose = event => {
      if (event.key === 'Escape') {
        this.close()
      }
    }
  
    
  
    setEventListeners() {
      this._popupElement.addEventListener('click', (event) => {
        this._handleOverlayClose(event)
      })
    }
}

  export default Popup;

// class Popup {
//     constructor({ popupSelector }) {
//         this._popupElement = document.querySelector(popupSelector);
//         this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
//         this._handleEscapeClose = this._handleEscapeClose.bind(this);
//     }
    
//     open() {
//         this._popupElement.classList.add("popup_visible");
//         document.addEventListener("keydown", this._handleEscapeClose);
//     }
    
//     close() {
//         this._popupElement.classList.remove("popup_visible");
//         document.removeEventListener("keydown", this._handleEscapeClose);
//     }
    
//     setEventListeners() {
//         this._popupCloseBtn.addEventListener("click", () => {
//           this.close();
//         });
    
//         this._popupElement.addEventListener("mousedown", (evt) => {
//           if (evt.target === this._popupElement) {
//             this.close();
//           }
//         });
//     }
    
//     _handleEscapeClose(evt) {
//         if (evt.key === "Escape") {
//           this.close();
//         }
//     }
// }

// export default Popup;



//     constructor(popupSelector) {
//         this._popupElement = document.querySelector(popupSelector);
//         this._popupCloseBtn = this._popupElement.querySelector(".popup__close");

//     }

//     open() {
//         this._popupElement.classList.add("popup_visible");
//     }

//     close() {
//         this._popupElement.classList.remove("popup_visible");
//     }
    
//     _handleEscapeClose = event => {
//         if (event.key === 'Escape') {
//             this.close()
//         }
//     }

//     _handleOverlayClose(event) {
//         if (event.target === this._popupElement || event.target === this.popupCloseButton) {
//             this.close()
//         }
//     }

//     setEventListeners() {
//         this._popupElement.addEventListener('click', (event) => {
//             this._handleOverlayClose(event)
//         })
//     }
// }

// export default Popup;