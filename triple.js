// always use ===
// equal comparison does not work for non-primitive 

const first = {};
const second = first;
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}