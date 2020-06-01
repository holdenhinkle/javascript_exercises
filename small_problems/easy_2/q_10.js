function century(year) {
  var century = Math.floor(year / 100);
  if (year % 100 >= 1) century += 1;
  return century + suffix(String(century));
}

function suffix(century) {
  if (century.endsWith('11') || century.endsWith('12') ||
        century.endsWith('13')) return 'th';
  if (century.endsWith('1')) return 'st';
  if (century.endsWith('2')) return 'nd';
  if (century.endsWith('3')) return 'rd';
  return 'th';
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"