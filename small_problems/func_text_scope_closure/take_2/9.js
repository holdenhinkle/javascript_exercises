var greeter = {
  message: (function() {
    let name = 'Naveed';
    let greeting = 'Hello';
    return name + ' ' + greeting;
  })(),
  sayGreetings: function() {
    console.log(this.message);
  }
};

greeter.sayGreetings();