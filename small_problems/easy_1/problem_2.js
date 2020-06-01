function evenNumbers() {
  for (var n = 1; n <= 99; n += 1) {
    if (n % 2 === 1) continue;
    console.log(n);
  }
}

evenNumbers();
