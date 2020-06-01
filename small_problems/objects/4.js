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

foo = createStudent('Foo', '1st');
foo.info(); // 'Foo is a 1st year student'
foo.listCourses(); // []
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses(); //[{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes(); // "Math: Fun Course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// = "Math: Fun Course; Remember to study for algebra"
// = "Advance Math: Difficult Subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// = "Math: Fun Course"
// = "Advance Math: Difficult Subject"