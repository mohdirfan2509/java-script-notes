// 'use strict'
function greet(){
    console.log(`Hi ${this.name}, How Are You !!`);
}

function incrementAge(value,name){
    this.age+=value;
    this.name=name;
    console.log(this.age);  
    console.log(this.name);  
}

const user1={
    name:"Irfan",
    age:21
}

const user2={
    name:"Munaf",
    age:23
}

// greet.call(user1)
// greet.call(user2)

// incrementAge.call(user1,10,"Vikas")
// incrementAge.call(user2,10,"Varun")

// console.log(user1.name);
// console.log(user2.name);

// incrementAge.apply(user1,[10,"Vikas"])
// incrementAge.apply(user2,[1,"Rakesh"])

const temp= incrementAge.bind(user2,10,"Varun")
temp();
