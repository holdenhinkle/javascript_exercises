// PERSON
let Person = function(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

// DOCTOR
let Doctor = function(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

// PROFESSOR
let Professor = function(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
}

// STUDENT
let Student = function(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('Studying');
}

let GraduateStudent = function(first, last, age, gender, degree, graduateDegree) {
  Student.call(this, first, last, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

// LS:
// function delegate(callingObject, methodOwner, methodName) {
//   // var args = Array.prototype.slice.call(arguments, 3);

//   // console.log(`args: ${args}`);
  
//   return function() {
//     return methodOwner[methodName].apply(callingObject);
//     // return methodOwner[methodName].apply(callingObject, args);
//   };
// }

// Modified LS:
function extend(object, mixin) {
  var methodNames = Object.keys(mixin);

  methodNames.forEach(name => {
    object[name] = function() {
      return mixin[name].call(object);
    }
  });

  return object;
}

let professional = {
  invoice: function() {
    console.log(`${this.fullName()} is billing a customer.`)
  },
  payTax: function() {
    console.log(`${this.fullName()} is paying taxes.`)
  },
}

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'