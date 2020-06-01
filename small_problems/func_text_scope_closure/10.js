function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    listCourses: function() {
      console.log(this.courses);
    },

    addNote: function(code, note) {
      for (let i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].code === code) {
          if (this.courses[i].note) {
            this.courses[i].note += '; ' + note;
          } else {
            this.courses[i].note = note;
          }

          break;
        }
      }
    },

    updateNote: function(code, note) {
      for (let i = 0; i < this.courses.length; i += 1) {
        if (this.courses[i].code === code) {
          this.courses[i].note = note;
          break;
        }
      }
    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  }
}

function createSchool() {
  let students = [];
  
  function validYear(year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
    return VALID_YEARS.includes(year);
  }  

  return {
    addStudent: function(student) {
      if (validYear(student.year)) {
        let newStudent = createStudent(student.name, student.year);

        if (student.courses) {
          student.courses.forEach(course => {
            this.enrollStudent(newStudent, { name: course.name, code: course.code });
    
            if (course.grade) {
              this.addGrade(newStudent, course.code, course.grade);
            }
          });
        }

        students.push(newStudent);
        return newStudent;
      } else {
        return 'Invalid Year';
      }
    },

    enrollStudent: function(student, course) {
      student.addCourse(course);
    },

    addGrade: function(student, code, grade) {
      for (let i = 0; i < student.courses.length; i += 1) {
        if (student.courses[i].code === code) {
          student.courses[i].grade = grade;
          break;
        }
      }
    },

    getReportCard: function(student) {
      student.courses.forEach(course => {
        console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
      });
    },

    courseReport: function(courseName) {
      let studentsInCourse = 
        students.filter(student => student.courses
                     .some(course => course.name === courseName && course.grade));
      
      if (studentsInCourse.length === 0) return undefined;
      
      console.log(`=${courseName} Grades=`);
      let grades = 0;

      studentsInCourse.forEach(student => student.courses.forEach(course => {
        if (course.name === courseName) {
          grades += course.grade;
          console.log(`${student.name}: ${course.grade}`);
        }
      }));

      console.log('---');
      console.log(`Course Average: ${grades / studentsInCourse.length}`);
    },
  }
}

foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

let school = createSchool();
school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);
school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
