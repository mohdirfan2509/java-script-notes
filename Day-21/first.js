// const obj1={
//     userName:"Irfan",
//     age:21,
//    greet:function(){
//         console.log(`Hello ${this.userName}, How are you ? Your age is : ${this.age}`);
//     }
// }

// const obj2={
//     userName:"Munaf",
//     age:25,
//     greet:function(){
//         console.log(`Hello ${this.userName}, How are you ? Your age is : ${this.age}`);
//     }
// }

// const obj3={
//     userName:"Vikas",
//     age:10,
//     greet:function(){
//         console.log(`Hello ${this.userName}, How are you ? Your age is : ${this.age}`);
//     }
// }

// obj1.greet()
// obj2.greet()
// obj3.greet()

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    sayHi(){
        console.log(`Hi ${this.name}, How Are You ?`);
        
    }
}

const person1= new Person("Irfan",88);
const person2= new Person("Munaf",90);
// person1.sayHi()
// person2.sayHi()
