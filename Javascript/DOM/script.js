const body = document.body
body.append("Hello  World")
// Append co the append bất kỳ  còn appendchild chỉ append được một 
const div = document.createElement("div")
// div.innerText = "Hello World" lúc đầu chỉ là rỗng, sau add vô thì mới ra text
// inner text: display visual, còn textContent display hết : vd dive display none 
// div.textContent = "Hello world 2"
// div.innerHTML = "<strong>Hello world 2<strong>" => không secure

const strong = document.createElement("strong")
strong.innerText = "Hello World 2"
div.append(strong)
//append 
//Modify an html inside the element

//removeChild()
//getattribute
//setAttribute update 
//removeAttribute

// Data set
// remove class,add class
//toggle

// style of elements