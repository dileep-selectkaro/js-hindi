// console.log(2/3);
// console.log(2%3);

// console.log(1+"2");
// console.log(1+2+"6");

//*********prefix and postfix****************

// prefix increment/decrement

let a=10
//console.log(++a);
//console.log(--a);




//postfix increment/decrement

let b=12
b++
//console.log(b);

let c=23
c--
//console.log(c)



//=======  stack(Primitive):pass by values =============

// let myName="Dileep";
// let anotherName=myName
// //console.log(anotherName);
// anotherName="chaiAurCode";
// console.log(myName);
// console.log(anotherName);

//Heap(Non Primitive):Pass by reference

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

//console.log(userOne.email)
let userTwo=userOne
userTwo.email="dilepp@google.com"
console.log(userOne.email)
console.log(userOne.upi);
console.log(userTwo.email)
console.log(userTwo.upi)


