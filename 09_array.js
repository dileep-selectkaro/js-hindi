const myArr=[0,1,6,8,2,3,4,7,9];
//console.log(myArr)
//const myHero=["Dileep","Deep","Anu"]
//console.log(myHero);

//console.log(myArr[3]);

//==============  Array Method  ===================

const arrPush=myArr.push(12);
//console.log(arrPush);//return length
//console.log(myArr);//update arrays

// const arrPop=myArr.pop()
// console.log(arrPop);
// console.log(myArr);

// const arrUnshift=myArr.unshift(10);
// console.log(arrUnshift);//return length
// console.log(myArr);//update array

//console.log(myArr)
// const arrShift=myArr.shift()
// console.log(arrShift);
// console.log(myArr);

//console.log(myArr.includes(7));

//console.log(myArr.indexOf(9));

//console.log(myArr);
//======slice===============
// const sliceArr=myArr.slice(0,4);
// console.log(sliceArr)
// console.log(myArr);

//=====splice=================
// console.log(myArr);
// const spliceArr=myArr.splice(2,3,6);//(index,how many delete element,want to add new element)
// console.log(spliceArr);
// console.log(myArr)

//=========Sort==============

// console.log(myArr);
// const sortArrByDec=myArr.sort((a,b)=>b-a)
// console.log(sortArrByDec);

// const sortArrByAsc=myArr.sort((a,b)=>a-b); 
// console.log(sortArrByAsc);


//========== Add two Array ================

const marvel_heros=["Thor","IronMan","Spiderman"];
//console.log(marvel_heros)
const dc_heros=["Superman","flash","batman"]
//console.log(dc_heros);
//marvel_heros.push(dc_heros);
// const newArr1=marvel_heros.concat(dc_heros);
// console.log(newArr1);

// const allHeros=[...marvel_heros,...dc_heros];
// console.log(allHeros);


const anotherArr=[1,2,3,[4,5,6],[8,9],7,[6,7,[4,5]]];
const realArr=anotherArr.flat(Infinity);
//console.log(realArr);
const arr=[2,3,4,5,5,6]
const checkArr=Array.isArray(arr);
//console.log(checkArr);


let score1=100;
let score2=200;
let score3=300;
console.log(score1+score2+score3)//600

console.log(Array.of(score1,score2,score3));











