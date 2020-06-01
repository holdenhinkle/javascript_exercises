let divRed = document.getElementById('red');
let divBlue = document.getElementById('blue');
let divOrange = document.getElementById('orange');
let divGreen = document.getElementById('green');

let Tracker = (function() {
  let events = [];

  return {
    list: function() {
      return events.slice();
    },

    elements: function() {
      return this.list().map(event => event.target)
    },

    add: function(event) {
      events.push(event);
    },

    clear: function() {
      events = [];
      return events.length;
    },
  }
})();

function track(callback) {
  return function() {
    if (!tracker.list().includes(event)) {
      tracker.add(event);
    }

    callback(event);
  }
}

divRed.addEventListener('click', track(function(event) {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(function(event) {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(function(event) {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(function(event) {
  document.body.style.background = 'green';
}));

let tracker = Object.create(Tracker);

