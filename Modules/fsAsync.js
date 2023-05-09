const { readFile, writeFile } = require('fs')
// for asynchronous JS we need to use a callback function be it readFile or writeFile we must use a callback function..callback hell 
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
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
                console.log(res);
            }
        )
    })
})
// alternate of toLocalString() method this utf-8 as the 2nd parameter
// readFile('./content/first.txt', 'utf-8', (err, res) => {
