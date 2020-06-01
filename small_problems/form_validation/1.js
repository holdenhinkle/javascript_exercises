// vanilla
let Form = (function() {
  let form = document.querySelector('form');

  let validationMessages = {
    firstName: "Invalid first name",
    lastName: "Invalid last name",
    email: "Invalid email address",
    phone: "Invalid phone number (xxx-xxx-xxxx)",
    password: "Invalid password. Must be at least 10 characters long",
    cc: "must contain 1 - 4 numbers",
  };

  function createValidationMessage(message, cssClass) {
    let div = document.createElement('div');
    let text = document.createTextNode(message);
    div.classList.add(cssClass);
    div.append(text);
    return div;
  }
  
  function getInputValidationMessage(inputName) {
    return createValidationMessage(validationMessages[inputName], 'invalid-input');
  }
  
  function getFormValidationMessage() {
    return createValidationMessage('Fix errors before submitting form', 'invalid-form');
  }
  
  function validateAllInputs() {
    let inputs = document.querySelectorAll('input[type=text');
    Array.prototype.slice.call(inputs).forEach(validateInput);
  }
  
  function validateInput(input) {
    if (input.checkValidity() === false) {
      if (!input.classList.contains('invalid')) {
        input.classList.add('invalid');
        input.closest('div').append(getInputValidationMessage(input.name))  
      }
    }
  }
  
  function checkToDisplayFormValidationMessage(formMessage) {
    let elementsWithInvalidInputClass = document.getElementsByClassName('invalid-input');
  
    if (elementsWithInvalidInputClass.length === 0) {
      formMessage.remove();
    }
  }

  function formInputBlurEvent() {
    form.addEventListener('blur', function(e) {
      validateInput(e.target);
      let formMessage = document.querySelector('.invalid-form');
      if (formMessage) checkToDisplayFormValidationMessage(formMessage);
    }, true);
  }

  function formInputFocusEvent() {
    form.addEventListener('focus', function(e) {
      let input = e.target;
    
      if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
        input.nextElementSibling.remove();
      }
    
      if (input.name === 'firstName' || input.name === 'lastName') {
        input.addEventListener('keypress', function(e) {
          /[^a-zA-Z]/.test(e.key) && e.preventDefault();
        });
      } else if (input.name === 'cc') {    
        input.addEventListener('keypress', function(e) {
          let valueLength = e.target.value.length;
          
          (/[^0-9]/.test(e.key) || valueLength === 4) && e.preventDefault();

          if (valueLength === 3 && e.target.id !== 'cc4') {
            e.target.nextElementSibling.focus();
          }
        });
      }
    }, true);
  }

  function formSubmitEvent() {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      validateAllInputs();
      let invalidFormMessage = document.querySelector('.invalid-form');
      let elementsWithInvalidInputClass = document.querySelectorAll('.invalid-input');
    
      if (elementsWithInvalidInputClass.length > 0) {
        if (!invalidFormMessage) {
          form.insertAdjacentElement('afterbegin', getFormValidationMessage());
        }
      } else {
        document.getElementById('serialized').textContent = serializeFormData();
      }
    });
  }

  function serializeFormData() {
    let data = [];
    let ccNumber = '';
    let formInputs = document.querySelectorAll('input[type=text]');
    let ccInputs = document.querySelector('input[name=cc]')
                  .parentElement.getElementsByTagName('input');;

    for (let i = 0; i < formInputs.length; i += 1) {
      if (formInputs[i].name === 'cc') continue;
      data.push(`${formInputs[i].name}=${encodeURIComponent(formInputs[i].value)}`);
    }

    for (let i = 0; i < ccInputs.length; i += 1) {
      ccNumber += ccInputs[i].value;
    }

    data.push(`cc=${ccNumber}`);

    return data.join('&');
  }

  function registerEventListeners() {
    formInputBlurEvent();
    formInputFocusEvent();
    formSubmitEvent();
  }
  
  return {
    init: function() {
      registerEventListeners();
      return this;
    }
  }
})();

Object.create(Form).init();

// // vanilla not-oo
// let form = document.querySelector('form');
// let validationMessages = {
//   firstName: "Invalid first name",
//   lastName: "Invalid last name",
//   email: "Invalid email address",
//   phone: "Invalid phone number (xxx-xxx-xxxx)",
//   password: "Invalid password. Must be at least 10 characters long",
//   cc: "must contain 1 - 4 numbers",
// };

// function createValidationMessage(message, cssClass) {
//   let div = document.createElement('div');
//   let text = document.createTextNode(message);
//   div.classList.add(cssClass);
//   div.append(text);
//   return div;
// }

// function getInputValidationMessage(inputName) {
//   return createValidationMessage(validationMessages[inputName], 'invalid-input');
// }

// function getFormValidationMessage() {
//   return createValidationMessage('Fix errors before submitting form', 'invalid-form');
// }

// function validateAllInputs() {
//   let inputs = document.querySelectorAll('input[type=text');
//   Array.prototype.slice.call(inputs).forEach(validateInput);
// }

// function validateInput(input) {
//   if (input.checkValidity() === false) {
//     if (!input.classList.contains('invalid')) {
//       input.classList.add('invalid');
//       input.closest('div').append(getInputValidationMessage(input.name))  
//     }
//   }
// }

// function name() {
//   let formMessage = document.querySelector('.invalid-form');
//   let elementsWithInvalidInputClass = document.getElementsByClassName('invalid-input');

//   if (formMessage && elementsWithInvalidInputClass.length === 0) {
//     formMessage.remove();
//   }
// }

// form.addEventListener('blur', function(e) {
//   validateInput(e.target);
//   name();
// }, true);

// form.addEventListener('focus', function(e) {
//   let input = e.target;

//   if (input.classList.contains('invalid')) {
//     input.classList.remove('invalid');
//     input.nextElementSibling.remove();
//   }

//   if (input.name === 'firstName' || input.name === 'lastName') {
//     input.addEventListener('keypress', function(e) {
//       let notAlpha = RegExp('[^a-z]', 'i');

//       if (notAlpha.test(e.key)) {
//         e.preventDefault();
//       }
//     });
//   } else if (input.name === 'cc') {
//     let notNumeric = RegExp('[^0-9]', 'i');

//     input.addEventListener('keypress', function(e) {
//       if (notNumeric.test(e.key) || e.target.value.length > 3) {
//         e.preventDefault();
//       }
//     });
//   }
// }, true);

// form.addEventListener('submit', function(e) {
//   validateAllInputs();
//   let invalidFormMessage = document.querySelector('.invalid-form');
//   let elementsWithInvalidInputClass = document.querySelectorAll('.invalid-input');

//   if (elementsWithInvalidInputClass.length > 0) {
//     e.preventDefault();
//     if (!invalidFormMessage) {
//       form.insertAdjacentElement('afterbegin', getFormValidationMessage());
//     }
//   }
// });