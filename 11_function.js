function add(num1,num2){
    console.log(num1+num2);//8
}
//add(3,5);


function addTwo(num1,num2){
  let result=num1+num2;
  return result;
}
//console.log(addTwo(9,3));//12

const sum=function(n1,n2){
    return n1+n2
}
//console.log(sum(5,5));//10

//==========using rest operator =======

function cal(...num){
    return num

}

//console.log(cal(200,100,300,400));


//=============Arrow function ==============

const addNum=(n1,n2)=>{
    return n1+n2;
}
//console.log(addNum(3,4));

const sum1=(n1,n2)=>n1+n2
console.log(sum1(5,6));  //11