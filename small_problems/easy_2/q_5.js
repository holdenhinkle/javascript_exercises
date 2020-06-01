function triangle(width) {
  for (var stars = 1; stars <= width; stars += 1) {
    console.log(`${' '.repeat(width - stars)}${'*'.repeat(stars)}`);
  }
}

triangle(5);
triangle(9);