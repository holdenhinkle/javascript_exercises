document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let json = JSON.stringify(new FormData(form));
    let request = new XMLHttpRequest();
    request.open(form.method, form.action);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(json);

    request.addEventListener('load', function(e) {
      switch(request.status) {
        case 201:
          alert(`Successfully created staff with id: ${request.response.id}`);
          form.reset();
          break;
        case 400:
          alert(request.responseText);
      }
    });
  });
});