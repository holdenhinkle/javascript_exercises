let Account = (function() {
  let userPassword;
  let userEmail;
  let userFirstName;
  let userLastName;

  function validPassword(input) {
    return userPassword === input;
  }

  function getRandomLetterNumber() {
    var randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  function createDisplayName() {
    var result = '';
    var i;

    for (i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init: function(email, password, firstName, lastName) {
      userPassword = password;
      userEmail = email;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = createDisplayName()
      return this;
    },

    reanonymize: function(currentPassword) {
      if (validPassword(currentPassword)) {
        this.displayName = createDisplayName();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword: function(currentPassword, newPassword) {
      if (validPassword(currentPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName: function(currentPassword) {
      if (validPassword(currentPassword)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName: function(currentPassword) {
      if (validPassword(currentPassword)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email: function(currentPassword) {
      if (validPassword(currentPassword)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    displayName: function() {
      console.log(this.displayName);
    },
  };
})();

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // returns true

console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(displayName === fooBar.displayName);   // logs false