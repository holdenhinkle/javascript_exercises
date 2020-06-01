function colorGeneration(n) {
  let elements = Array.from(document.body.children);
  let currentLevel = 1;

  while (currentLevel < n) {
    debugger;
    elements = elements.flatMap(parent => Array.from(parent.children));
    console.log(`level: ${currentLevel}`, elements);
    currentLevel += 1;
  }

  elements.forEach(e => e.classList.add('generation-color'));
}

// colorGeneration(1);
colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);