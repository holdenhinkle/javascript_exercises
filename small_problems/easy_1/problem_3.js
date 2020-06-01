// Further Exploration

function roomSize() {
  const SQMETERS_TO_SQFEET = 10.7639;
  const SQFEET_TO_SQMETERS = 0.3048;
  var input;
  var areaInSquareFeet;
  var areaInSquareMeters;

  do {
    input = prompt('Would you like to enter the room dimensions in feet or meters?');
    var validation = (['feet', 'f', 'meters', 'm'].includes(input));
    if (!validation) alert("Your input was invalid. Please enter 'feet' or meters'.");
  } while (!validation);

  var length = Number(prompt('Enter the length of the room:'));
  var width = Number(prompt('Enter the width of the room:'));

  if (['feet', 'f'].includes(input)) {
    areaInSquareFeet = length * width;
    areaInSquareMeters = areaInSquareFeet * SQFEET_TO_SQMETERS;
    console.log(`The area of the room is ${areaInSquareFeet} square feet (${areaInSquareMeters} square meters).`)
  } else {
    areaInSquareMeters = length * width;
    areaInSquareFeet = areaInSquareMeters * SQMETERS_TO_SQFEET;
    console.log(`The area of the room is ${areaInSquareMeters} square meters (${areaInSquareFeet} square feet).`)
  } 
}

roomSize();
