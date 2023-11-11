const coding=["js","ruby","java","python","cpp"];
// coding.forEach(function(val){
//     console.log(val);
// });

// coding.forEach((val)=>{
//     console.log(val);
// })

// function dileep(item){
//     console.log(item);
// }
// coding.forEach(dileep)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// });

const myCoding=[
    {
    languageName:"Javascript",
    languageFileName:"js"
},
{
    languageName:"Python",
    languageFileName:"py"

}]

myCoding.forEach((item)=>{
    //console.log(item.languageName)
    console.log(item.languageFileName);
})