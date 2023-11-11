/*  Scope: scope in js determines the accessibility of variables and functions at various parts of one's code

.There are three types
1)Function scope
2)local scope
3)Global scope

*/


if(true){
    const userName="Dileep"

    if(userName==="Dileep");
    const website="Youtube";
    //console.log(userName+website)//DileepYoutube
}


var x=5;
let y=6;
const z=8;
if(true){
    let p=15
    var q=16;
    const r=17
}
console.log(q)




