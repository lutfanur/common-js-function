function sum(a, b, c){
   const args = [...arguments]
    const result = a + b + c;
    return result;
}
// console.log(arguments)
const total = sum(45,89,12, 45, 98,56);
console.log(sum.length)