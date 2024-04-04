console.log("Hi") 
function sum(a,b){
    return a+b
}

const value = sum(1,2)
console.log(value)

//**CALLBACKS */
// The function is just like an object, and an object is a variable that you can pass around


function print(value){
    console.log(value)
}

function useCallback(callback){
    callback("Hello")
}

useCallback(print)

// Function is just a variable
const callback = print
callback("Hello")


//function store value
print.hi = "test"
console.dir(print)

//
function useCallback(callback) {
    console.log(callback)
    callback("Helloo")
}

useCallback((value) => console.log(value))

//**ARROW FUNCTIONS */
function sum(a,b){
    return a+b
}

let sum2 = (a,b) => {
    return a +b
}

let sum4 = (a,b) => a + b
function isPositive(number){
    return number >=0
}

let isPositive = (number) => number >=0

function randomNumber(){
    return Math.random
}

let randomNumber2 = () =>  Math.random

document.addEventListener('click', function(){
    // funtion no name
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))
