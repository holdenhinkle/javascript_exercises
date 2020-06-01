document.addEventListener('DOMContentLoaded', function() {
  let request = new XMLHttpRequest();
  request.open('get', 'http://localhost:3000/api/schedules');
  request.timeout = 5000;
  request.responseType = 'json';
  request.send();

  function getNumberOfSchedulesByStaff(schedules) {
    let numberOfSchedulesByStaff = {};

    for (let i = 0; i < schedules.length; i += 1) {
      if (schedules[i].student_email) continue;
      let id = (schedules[i].staff_id).toString();
      numberOfSchedulesByStaff[id] = numberOfSchedulesByStaff[id] + 1 || 1;
    }

    return numberOfSchedulesByStaff;
  }

  function alertSchedulesByStaff(schedules) {
    let message = '';
  
    for (staff in schedules) {
      message += `Staff ${staff}: ${schedules[staff]} schedule(s) \n`;
    }

    alert(message);
  }
  
  request.addEventListener('load', function(e) {  
    request = this;
  
    if (request.response.length > 0) {
      alertSchedulesByStaff(getNumberOfSchedulesByStaff(request.response));
    } else {
      alert('There are currently no schedules available for booking');
    }
  });
  
  request.addEventListener('timeout', function(e) {
    alert('Try again');
  });

  request.addEventListener('loadend', function() {
    console.log('The request has completed.')
  });
});
