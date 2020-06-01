document.addEventListener('DOMContentLoaded', function() {
  let request = new XMLHttpRequest();
  request.open('get', 'http://localhost:3000/api/staff_members');
  request.responseType = 'json';
  request.send();

  request.addEventListener('load', function(e) {
    let form = document.querySelector('form');
    let staff = e.target.response;
    let scheduleFieldset = document.querySelector('#schedule_fieldset');
    let scheduleFieldsetNumber = 0;
  
    let insertNewFieldset = function() {
      let fieldset = createNewHTMLElementFromString(getNewFieldset());
      let fieldsetSelect = fieldset.querySelector('select');
      let selectOptions = createStaffOptionElements();

      Array.prototype.slice.call(selectOptions).forEach(option => {
        fieldsetSelect.append(option);
      });

      document.querySelector('input[type=submit').insertAdjacentElement('beforebegin', fieldset);
    }

    function getNewFieldset() {
      return scheduleFieldset.textContent.replace(/NUMBER/g, scheduleFieldsetNumber += 1);
    }
  
    function createNewHTMLElementFromString(string) {
      let div = document.createElement('div');
      div.innerHTML = string.trim();
      return div.firstChild;
    }
  
    function createStaffOptionElements() {
      let div = document.createElement('div');

      staff.forEach(staff => {
        let option = new Option(staff.name, staff.id);
        div.append(option);
      });
  
      return div.children;
    }

    function serializeInput() {
      let fieldsets = document.querySelectorAll('fieldset');
      let data = [];

      Array.prototype.slice.call(fieldsets).forEach(fieldset => {
        schedule = {};
        schedule.staff_id = fieldset.querySelector('select').value;
        schedule.date = formatDate(fieldset.querySelector('input[type=date]').value);
        schedule.time = formatTime(fieldset.querySelector('input[type=time]').value);
        data.push(schedule);
      });

      return {schedules: data};
    }

    function formatDate(date) {
      let month;
      let day;
      let year;

      [year, month, day] = date.slice(2).split('-');

      return `${month}-${day}-${year}`;
    }

    function formatTime(time) {
      return time.replace(/:/, '-');
    }

    insertNewFieldset();

    document.getElementById('another').addEventListener('click', function(e) {
      e.preventDefault();
      insertNewFieldset();
    })

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let data = JSON.stringify(serializeInput());
      let request = new XMLHttpRequest();
      request.open(form.method, form.action);
      request.setRequestHeader('Content-Type', 'application/json');
      
      request.send(data);
      request.addEventListener('load', function(e) {
        switch(request.status) {
          case 201:
            alert(request.responseText);
            form.reset();
            break;
          case 400:
            alert(request.responseText);
        }
      });
    });
  });
});

// my data:
// "{"schedules":[{"staff_id":"3","date":"11-20-19","time":"10-10"}]}"

// ls data:
// "{"schedules":[{"staff_id":"1","date":"11-19-19","time":"11-19-19"}]}"
// "{"schedules":[{"staff_id":"5","date":"11-19-19","time":"12-00"}]}"