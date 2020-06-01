document.addEventListener('DOMContentLoaded', function() {
  function removeHighlight() {
    let highlightedElements = document.getElementsByClassName('highlight');

    for (let i = 0; i < highlightedElements.length; i += 1) {
      highlightedElements[i].classList.remove('highlight');
    }
  }

  function addHighlight(el) {
    el.classList.add('highlight');
  }

  function getParent(el, parentTagName) {
    let parent = el.parentElement;

    while (parent.tagName !== parentTagName) {
      parent = parent.parentElement;
    }

    return parent;
  }

  document.querySelector('body').addEventListener('click', function(e) {
    let targetName = e.target.tagName;

    if (targetName === 'A') {
      let sectionId = e.target.getAttribute('href').slice(1);
      removeHighlight();
      addHighlight(document.getElementById(sectionId))
    } else if (targetName === 'ARTICLE' || targetName === 'H2' || targetName === 'P') {
      removeHighlight();
      addHighlight(getParent(e.target, 'ARTICLE'));
    } else {
      removeHighlight();
      addHighlight(document.querySelector('main'));
    }
  })
});