let newScheduleForm = document.getElementById('form_schedule');

let scheduleRequest = new XMLHttpRequest();
scheduleRequest.open('get', 'http://localhost:3000/api/schedules');
scheduleRequest.responseType = 'json';
scheduleRequest.send();

function getAvailableSchedules(schedules) {
  return schedules.filter(schedule => schedule.student_email === null);
}

function getStaffNameFromStaffId(id, staff) {
  for (let i = 0; i < staff.length; i += 1) {
    if (staff[i].id === id) return staff[i].name;
  }
}

function insertSchedules(schedules, staff) {
  let selectMenu = document.getElementById('id');
  let div = document.createElement('div');

  schedules.forEach(schedule => {
    let option = new Option(`${getStaffNameFromStaffId(schedule.staff_id, staff)} | ${schedule.date} | ${schedule.time}`, schedule.id);
    div.append(option);
  });

  Array.prototype.slice.call(div.children).forEach(option => {
    selectMenu.append(option);
  })
}

function insertNewStudentForm(message) {
  let newStudentForm = document.getElementById('new_student_template');
  let newSection = createNewSectionFromString(newStudentForm.textContent);
  document.querySelector('section').insertAdjacentElement('afterend', newSection);

  let studentEmail = newScheduleForm.querySelector('input[name=student_email').value;
  let bookingSequence = message.match(/\d+/)[0];
  document.getElementById('email').value = studentEmail;
  document.getElementById('sequence').value = bookingSequence;

  return document.getElementById('new_student');
}

function serializeNewScheduleData() {
  let id = newScheduleForm.querySelector('select').value;
  let studentEmail = newScheduleForm.querySelector('input[type=email]').value;
  return {id: id, student_email: studentEmail, };
}

function serializeNewStudentData(form) {
  let email = form.querySelector('input[name=email]').value;
  let name = form.querySelector('input[name=name]').value;
  let bookingSequence = form.querySelector('input[name=sequence]').value;
  return {email: email, name: name, booking_sequence: bookingSequence, };
}

function createNewSectionFromString(string) {
  let section = document.createElement('section');
  section.innerHTML = string.trim();
  return section;
}

function bookedSuccessResponse() {
  alert('Booked');
  newScheduleForm.reset();
  let newStudentForm = document.getElementById('new_student');
  
  if (newStudentForm) {
    newStudentForm.previousElementSibling.remove();
    newStudentForm.remove();
  }
}

function bookedErrorResponse(r) {
  let message = r.response;
  alert(message);

  if (message.includes('booking_sequence')) {
    let newStudentForm = insertNewStudentForm(message);
    newStudentForm.addEventListener('submit', function(e) {
      e.preventDefault();

      let data = JSON.stringify(serializeNewStudentData(newStudentForm));
      request = new XMLHttpRequest();
      request.open(newStudentForm.method, newStudentForm.action);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(data);

      request.addEventListener('load', function(e) {
        if ([201, 400, 403].includes(request.status)) {
          alert(request.response);
        }

        if (request.status === 201) {
          newScheduleForm.dispatchEvent(new Event('submit'));
        }
      });
    });
  } else {
    newScheduleForm.reset();
  }
}

scheduleRequest.addEventListener('load', function(e) {
  let availableSchedules = getAvailableSchedules(scheduleRequest.response);

  if (availableSchedules.length > 0) {
    let staffRequest = new XMLHttpRequest();
    staffRequest.open('get', 'http://localhost:3000/api/staff_members');
    staffRequest.responseType = 'json';
    staffRequest.send();

    staffRequest.addEventListener('load', function(e) {
      insertSchedules(availableSchedules, staffRequest.response);
    });
  } else {
    alert('There are currently no schedules available for booking');
  }
});

newScheduleForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let data = JSON.stringify(serializeNewScheduleData());
  request = new XMLHttpRequest();
  request.open(newScheduleForm.method, newScheduleForm.action);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(data);

  request.addEventListener('load', function(e) {
    if (request.status === 204) {
      bookedSuccessResponse()
    } else if (request.status === 404) {
      bookedErrorResponse(request)
    }
  });
});