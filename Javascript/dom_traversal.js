// const grandparent = document.getElementById("grandparent-id")
// const grandparent = document.querySelector("#grandparent-id")
//CSS selectors
const grandparent = document.querySelector(".grandparent")

// const parents = Array.from(document.getElementsByClassName("parent"))
const parents = Array.from(grandparent.children)

const parentOne = parents[0]
const children = parentOne.children

// grand dần và tách các giá trị ra from top to children

// changeColor(grandparent)
changeColor(children[0])

parents.forEach(changeColor)

function changeColor(element) {
    element.style.backgroundColor="#333"
}

// const parent = document.querySelector(".parent")
// Select the first parent class
// const parents = document.querySelectorAll(".parent")