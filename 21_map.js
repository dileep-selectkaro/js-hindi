/* The map object holds key -value pairs   and remembers the original insertion order of the key*/

const map=new Map();
map.set("IN","India");
map.set("USA","United state of America");
map.set("Fr","France");
map.set("IN","India");
//console.log(map);

for(const[key,value] of map){
    //console.log(key,":",value)
}


const myName=[1,2,3,4,5,6,7,8,9,10];
const newName=myName.map((n)=>n+1)
//console.log(newName);

const arr=[4,5,6,7,3,2,7,9];
const newArr=arr.map((n)=> {return n+2});
console.log(newArr);
