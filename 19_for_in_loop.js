const myObject={
    js:"Javascript",
    cpp:"c++",
    rb:"ruby"
}

for(const name in myObject){
    //console.log(name)//value
    //console.log([name]);//key
}


//array

const pro=["js","rb","py","java"];
for(const n in pro){
    //console.log(n);//index
    //console.log(pro[n]);//values
}



for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}