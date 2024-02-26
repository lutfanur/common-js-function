function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'Halim mama'
// const numbers = [45, 54, 98];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}
function greetingHandler(name) {
    console.log('good morning', name)
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');