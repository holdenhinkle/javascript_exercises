function countOccurrences(array) {
  var vehicleCount = {};
  array.forEach((vehicle) => {
    vehicleCount[vehicle] ? vehicleCount[vehicle] += 1: vehicleCount[vehicle] = 1;
  });
  for (vehicle in vehicleCount) {
    console.log(`${vehicle} => ${vehicleCount[vehicle]}`);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4
truck => 3
SUV => 1
motorcycle => 2