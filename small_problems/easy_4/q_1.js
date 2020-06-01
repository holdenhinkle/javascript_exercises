// function dms(angle) {
//   if (angle < 0 || angle > 360) angle = correctAngle(angle);
//   var degrees = Math.floor(angle / 1);
//   var minutes = Math.floor((angle / 1 - degrees) * 60);
//   var seconds = Math.floor((((angle / 1 - degrees) * 60) - minutes) * 60);
//   console.log(`${degrees}\xB0${padNumber(minutes)}'${padNumber(seconds)}"`);
// }

// function correctAngle(angle) {
//   if (angle < 0) return correspondingRoundAngle(angle) - Math.abs(angle);
//   return 0;
// }

// function correspondingRoundAngle(angle) {
//   return (Math.floor(Math.abs(angle / 360)) + 1) * 360;
// }

// function padNumber(number) {
//   return number < 10 ? '0' + String(number) : String(number);
// }

function dms(angle) {
  if (angle < 0) angle = correctAngle(angle);
  var degrees = Math.floor(angle / 1);
  var minutes = Math.floor((angle / 1 - degrees) * 60);
  var seconds = Math.floor((((angle / 1 - degrees) * 60) - minutes) * 60);
  console.log(`${degrees}\xB0${padNumber(minutes)}'${padNumber(seconds)}"`);
}

function correctAngle(angle) {
  return correspondingRoundAngle(angle) - Math.abs(angle);
}

function correspondingRoundAngle(angle) {
  return (Math.floor(Math.abs(angle / 360)) + 1) * 360;
}

function padNumber(number) {
  return number < 10 ? '0' + String(number) : String(number);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400.73);  // 0°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"
