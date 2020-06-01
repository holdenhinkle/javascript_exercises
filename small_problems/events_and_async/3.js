function makeBold(el, func) {
  el.style.fontWeight = 'bold';
  func(el);
}

let elem = document.querySelector('section');
makeBold(elem, function(elem) {
  elem.classList.add('highlight');
});

// LS version:
function makeBold(el, callback) {
  el.style.fontWeight = 'bold';

  if (callback && typeof callback === 'function') {
    callback(el);
  }
}

// Futher exploration

let makeBold = function(elem) {
  elem.style.fontWeight = 'bold';

  let event = new CustomEvent('bolded');

  elem.dispatchEvent(event);
}

let elem = document.querySelector('section');

elem.addEventListener('bolded', function(event) {
  event.target.classList.add('highlight');
});

makeBold(elem);


