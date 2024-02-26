// 8 ways to get undefined
/*1: variable that is not initialized will give undefined 
*2: function with no return
*3: parameter that is not passed will be undefined
*4: if return has nothing on the right side will return undefined
*5: property that doesnt exists on an object will give you undefined
*6: accessing array elements outside of the index range
*7: deleting an element inside an array
*: set a value directly undefined

*/

// 1
let first;

// 2
function second(a, b) {
    const total = a + b;

}
const result = second();

// 3
function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(2, 5)

// 4
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total)

// 5
const fifth = {id: 2, name: 'ovi', age: 23}
// console.log(fifth.age, fifth.salary)

// *6
const sixth = [23, 45, 67, 89];
// console.log(sixth[1], sixth[4], sixth[20])

// 7
const seventh = [23, 45, 67, 89];
delete seventh[1];
// console.log(seventh)

// 8
const eighth = undefined;

const nineth = null

const data = {results: [], updated: null}

console.log(typeof undefined)
console.log(typeof null)