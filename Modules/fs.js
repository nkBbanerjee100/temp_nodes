const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(first);
console.log(second);
// the below code will create a new text file with concatenation of 2 txt files   
writeFileSync('./content/result-sync.txt',
    `result -> ${first} , ${second}`,
    { flag: 'a' }
)
// by default we are overriding everything and by that append we are basically appending one text to other and that's why a new line is being created
