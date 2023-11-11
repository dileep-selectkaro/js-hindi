/*This keyword refers to the object that the function is a property of*/

const user={
    userName:"Dileep",
    price:99,

    welcome:function(){
        console.log(`${this.userName},welcome to website`);
    }
}

user.welcome()