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
// this replaces the following:
Doctor.prototype.constructor = Doctor;
// Object.defineProperty(Doctor.prototype, 'constructor', {
//   value: Doctor,
//   enumerable: false,
//   writable: true,
// });

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

// PROFESSOR
let Professor = function(first, last, age, gender, subject) {
  Person.call(this, first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
// this replaces the following:
Professor.prototype.constructor = Professor;
// Object.defineProperty(Professor.prototype, constructor, {
//   value: Professor,
//   enumberable: false,
//   writable: true,
// });

Professor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

// STUDENT
let Student = function(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
// this replaces the following:
Student.prototype.constructor = Student;
// Object.defineProperty(Student.prototype, constructor, {
//   value: Student,
//   enumerable: false,
//   writable: true,
// });

Student.prototype.study = function() {
  console.log('Studying');
}

let GraduateStudent = function(first, last, age, gender, degree, graduateDegree) {
  Student.call(this, first, last, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
// this replaces the following:
GraduateStudent.prototype.constructor = GraduateStudent;
// Object.defineProperty(GraduateStudent.prototype, constructor, {
//   value: GraduateStudent,
//   enumerable: false,
//   writable: true,
// });

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student); 
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'