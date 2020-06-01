function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    
    info: function() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    listCourses: function() {
      console.log(this.courses);
    },

    addNote: function(courseCode, note) {
      this.courses.forEach(course => {
        if (course.code === courseCode && course.note) {
          course.note += '; ' + note;
        } else if (course.code === courseCode) {
          course.note = note;
        }
      });
    },

    updateNote: function(courseCode, note) {
      this.courses.forEach(course => {
        if (course.code === courseCode) {
          course.note = note;
        }
      });
    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) console.log(`${course.name}: ${course.note}`);
      });
    },
  }
}

var school = (function() {
  let students = [];

  function validYear(year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    return validYears.includes(year);
  }

  return {
    addStudent: function(name, year){
      if (validYear(year)) {
        let newStudent = createStudent(name, year);
        students.push(newStudent);
        return newStudent;
      } else {
        console.log('Invalid Year');
      }
    },
  
    enrollStudent: function(student, course) {
      student.addCourse(course);
    },
  
    addGrade: function(student, courseCode, grade) {
      student.courses.forEach(course => {
        if (course.code === courseCode) {
          course.grade = grade;
        }
      });
    },
  
    getReportCard: function(student) {
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },
  
    courseReport: function(courseName) {
      console.log(`=${courseName} Grades=`);
      let grades = [];
      students.forEach(student => {
        student.courses.forEach(course => {
          if (course.name === courseName && course.grade) {
            grades.push(course.grade);
            console.log(`${student.name}: ${course.grade}`);
          }
        });
      });
      
      console.log('---');
      console.log(`Course Average: ${grades.reduce((sum, grade) => sum + grade, 0) / grades.length}`);
    }
  }
})();

var boo = school.addStudent('boo', '6th'); // invalid year

var foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.enrollStudent(foo, { name: 'Physics', code: 202 });
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.getReportCard(foo);

var bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);
school.getReportCard(bar);

var qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

// foo = createStudent('Foo', '1st');
// foo.info(); // 'Foo is a 1st year student'
// foo.listCourses(); // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses(); // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes(); // "Math: Fun Course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes(); // "Math: Fun Course; Remember to study for algebra" // "Advance Math: Difficult Subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes(); // "Math: Fun Course" // "Advance Math: Difficult Subject"