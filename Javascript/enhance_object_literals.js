//Enhanced object literals
//Định nghĩa key:value cho object
var name = "Javascript";
var price = 1000;

var course = {
    name: name,
    price: price
};
console.log(course)


var project = "Javascript";
var quantity = 1000;

var course_1 = {
    project,
    quantity
};
console.log(course_1)

/// Sẽ lấy key là tên của biến
/// Định nghĩa method cho object 
//An object is a collection of key-value pairs where each key is a unique identifier for a value.
//Objects can hold various types of data, including other objects, arrays, functions, and primitive data types.
var course_2 = {
    project,
    quantity,
    getName() {
        return `${this.project} is processing`
    }
}
console.log(course_2.getName())

var fieldName = 'new-name'
var fieldPrice = 'price'
const course_3 = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}
console.log(course_3)