/* ==========String==================== 
Definaton: string is a sequence of character.
syntax:  let str="Dileep" or  let str= new String("Dileep");

*/

let str="Dileep" ;
//console.log(str);
let str2= new String("Dileep");
//console.log(str2);
//console.log(str[0]);
//console.log(str.__proto__);
//console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toLocaleLowerCase())
// console.log(str.toLocaleUpperCase());
// console.log(str.toUpperCase());

//console.log(str.charAt(3));

//console.log(str.indexOf("l")); //2

const newString=str.substring(0,2);
//console.log(newString);//Di
const new1=str.slice(0,4);
//console.log(new1);//Dile

const new2="      mandal    ";
//console.log(new2);
//console.log(new2.trim());

const url="https://Dileep.com/hitesh%20";
//console.log(url.replace("%20",".com"));

// console.log(url.includes("Dileep"));
console.log(str.split(''));




