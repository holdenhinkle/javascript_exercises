document.addEventListener('DOMContentLoaded', function() {
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement) {
      parentElement.addEventListener(eventType, function(e) {
        targets = parentElement.querySelectorAll(selector);

        for (let i = 0; i < targets.length; i += 1) {
          if (targets[i] === e.target) callback(e);
        }
      });

      return true;
    }
  }

  let callback = function(event) {
    alert('Target: ' + event.target.tagName + '\nCurrent Target: ' + event.currentTarget.tagName);
  };

  let element1 = document.querySelector('table');
  let element2 = document.querySelector('main h1');
  let element3 = document.querySelector('main');

  console.log(delegateEvent(element2, 'p', 'click', callback));

  var newP = document.createElement('P');
  var newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);
});