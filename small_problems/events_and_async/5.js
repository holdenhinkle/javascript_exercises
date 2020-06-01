document.addEventListener('DOMContentLoaded', function() {
  let main = document.querySelector('main');
  let section = document.getElementById('sub');

  main.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert(this);
    alert(main.tagName);
  });

  section.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    event.stopPropagation();
    alert(section.tagName);
  });
});