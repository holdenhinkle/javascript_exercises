var phrase = prompt('Please enter a phrase:');
console.log(`There are ${phrase.replace(/\s/g, '').length} characters in "${phrase}" not including spaces.`)