const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first);
// console.log(second);
// the below code will create a new text file with concatenation of 2 txt files   
writeFileSync('./content/result-sync.txt',
    `result -> ${first} , ${second}`,
    { flag: 'a' }
)
// by default we are overriding everything and by that append we are basically appending one text to other and that's why a new line is being created
console.log('done with this one');
console.log('lets get to next one');

const { readFile, writeFile } = require('fs')
console.log('starting the ASYNC version');
// for asynchronous JS we need to use a callback function be it readFile or writeFile we must use a callback function..callback hell 
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        // console.log(err);
        return;
    }
    // this is where we set up the functionality
    const first = res
    // log(first);
    // when i read the second file i wanna create a new file
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res
        writeFile(
            './content/resThree.txt',
            `the result is : ${first},${second}`,
            (err, res) => {
                if (err) {
                    console.log(err); return;
                }
                console.log('done with this one');
            }
        )
    })
})
// alternate of toLocalString() method this utf-8 as the 2nd parameter
// readFile('./content/first.txt', 'utf-8', (err, res) => {
console.log('done with ASYNC');
// ASYNC
/*
    WE STARTED THE TASK AND IF THAT TASK TAKES LONGER TIME THAN USUAL THEN SIMPLY OUTLOOK THAT TASK AND GO TO THE NEXT TASK
*/