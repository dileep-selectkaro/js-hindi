
/*Hoisting is the default behaviour of js where all the variable and function declarations are moved on top */

console.log(add(5))

function add(num){
    return num+1
}



var x
console.log(x)
x=16


// console.log(my)//Cannot access 'my' before initialization
// let my=30

console.log(num)//undefined
var num=10


console.log(n)// Cannot access 'n' before initialization
const n=12;