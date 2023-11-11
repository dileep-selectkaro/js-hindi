//========for loop=============
// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// for(let i=0;i<=10;i=i+2){
//     const element=i;
//     console.log(element);
// }

// for(let i=0;i<=10;i++){
//     const element=i;
//     if(element%2==0){
//         console.log("Even is best number",element);
//     }else{
//         console.log(element)
//     }
// }

// for(let i=0;i<=5;i++){
//     for(let j=0;j<=5;j++){
//         console.log(`${j}`);
//     }
//     console.log(" ");
// }

//======= matrix==========

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//         process.stdout.write(`${j} `);
         
//     }
//     console.log(""); 
// }


// ====== Table ==========

for(let i=0;i<=10;i++){
    //console.log(`Outer loop value : ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(i + "*" + j + " =" + i*j);
        //console.log(`${i} * ${j} = ${i*j}`);
    }
}

// let myArray=["flash","batman","superman"];
// console.log(myArray.length)
// for(let i=0;i<myArray.length;i++){
//     const element=myArray[i];
//     console.log(element)
// }

//  using break 
// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }


// using continue
for(index=1;index<=20;index++){
    if(index==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${index} `);
}
// =========while loop===============
// var i=0;
// while(i<=10){
//     console.log(i);
//      i++
// }


//===========do while loop===========

// let i=0;
// do{
//     console.log("Value of i:",i);
//     i++;
// }
// while(i<=10);

// let score=11;
// do{
//     console.log(`Score is ${score}`);
//     score++;
// }
// while(score<=9)