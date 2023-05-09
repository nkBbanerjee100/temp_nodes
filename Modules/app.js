// const m = 12;
// if(m<10) console.log(`${m} is a small num`);
// else console.log(`${m} is a larger num`);
// console.log(__dirname);
// console.log(__filename);
// setInterval(()=>{
//     console.log('heylow');
// },1000);
// const r = require('D:\\BackEnd\\Modules\\mod.js');
// const sayHi = require('./fun');
// const { items, singlePerson } = require('./6-alternativeSyntax');
// // console.log(sayHi);
// // console.log(r);
// require('./7-mind-grenade');
// // when in the module the function is already defined then simply write require() and then simply that functiin will be invoked...
// sayHi(r.paku);
// sayHi(r.nk);
// items.push('item5');
// console.log(items);
// console.log(singlePerson);
const _ = require('lodash');
// the _ is a convention for lodash
// now that i have loadasah I can use the methods of loadash as well
const itemsArray = [1, [2], [3, [4]]]
const newItemsArray = _.flattenDeep(itemsArray)
console.log(newItemsArray);