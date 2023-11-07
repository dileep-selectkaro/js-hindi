//console.log(new Date())//2023-11-06T04:48:17.447Z

const mydate=new Date()
//console.log(mydate);
//console.log(mydate.toString());//Mon Nov 06 2023 10:21:22 GMT+0530 (India Standard Time)
//console.log(mydate.toDateString());//    Mon Nov 06 2023
//console.log(mydate.toLocaleString());//  6/11/2023, 10:24:48 am

//console.log(typeof mydate);

let myCreateDate=new Date(2023,11,6,3,5,1);
//console.log(myCreateDate);//2023-12-05T18:30:00.000Z

//console.log(myCreateDate.toLocaleDateString());//6/12/2023
//console.log(myCreateDate.toLocaleString());//6/12/2023, 3:05:01 am
//console.log(myCreateDate.toLocaleDateString());//6/12/2023
let myCreateDate2=new Date("6-11-2023");
//console.log(myCreateDate2.toLocaleDateString());//6/11/2023

let new2=new Date();
//console.log(new2);//2023-11-06T05:20:09.052Z

console.log(new2.getMonth()+1);
console.log(new2.getDate());
console.log(new2.getFullYear());




