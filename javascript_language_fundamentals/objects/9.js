// function timeOfDay(minutes) {
//   var hours;

//   if (minutes >= 0) {
//     hours = 0;

//     while (minutes - 60 >= 0) {
//       minutes -= 60;
//       hours += 1
//       if (hours > 23) hours = 0;
//     }
//   } else {
//     hours = 23;

//     while (minutes + 60 <= 0) {
//       minutes += 60;
//       hours -= 1
//       if (hours < 0) hours = 23;
//     }

//     minutes += 60;
//   }

//   return padWithZeros(hours) + ':' + padWithZeros(minutes);
// }

// function padWithZeros(number) {
//   return number < 10 ? '0' + String(number) : String(number);
// }

// function timeOfDay(minutes) {
//   var date = new Date(0,0,0,0,minutes);
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   return padWithZeros(hours) + ':' + padWithZeros(minutes);
// }

// function padWithZeros(number) {
//   return number < 10 ? '0' + String(number) : String(number);
// }

function timeOfDay(minutes) {
  var date = new Date(0,0,0,0,minutes);
  return String(date.getHours()).padStart(2, "0") + ':' +
         String(date.getMinutes()).padStart(2, "0")
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"