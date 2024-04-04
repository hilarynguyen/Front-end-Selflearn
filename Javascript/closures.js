// function outerFuntion(outerVariable) {
//     const outer2 = "Hi"
//     return function innerFunction(innerVariable) {
//         console.log("Outer Variable: " + outerVariable )
//         console.log("Outer Variable: " + innerVariable )
//         console.log(outer2)

//     }
// }

// const newFunction = outerFuntion('outside')
// newFunction("inner")



function outerFuntion(outerVariable, innerVariable) {
    const outer2 = "Hi"
    return (innerVariable) => {
        console.log("Outer Variable: " + outerVariable )
        console.log("Outer Variable: " + innerVariable )
        console.log(outer2)

    }
}

const newFunction_1 = outerFuntion('outside','inner')
console.log(newFunction_1)

// -> để run thì cần newFuntion_1()