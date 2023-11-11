/* Filter: Filter is a higher order function that helps you  create a new array by selecting 
specific elements from an existing array based on a given condition or criteria.*/


const myArr=[1,2,3,4,5,6,7,8,9,10];
const newArr=myArr.filter((n)=>n>4);
//console.log(newArr);

const new1=myArr.filter((n)=>{
    return n%2==0
})

console.log(new1)