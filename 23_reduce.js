/* Reduce: Reduce is a function that helps you combine or process the elements in an array
to produce a single result, like finding the sum of numbers or the maximum value in the array.*/

const myNum=[1,2,3];
const myTotal=myNum.reduce(function(accum,currentValue){
    return accum+currentValue
},0)
//console.log(myTotal);

const numbers=[1,2,3,4,5];
const sum=numbers.reduce((accum,currentValue)=>accum+currentValue);
console.log(sum);