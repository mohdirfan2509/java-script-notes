
const sym = Symbol("id");
let user = {
    "name": "Irfan",
    "age": 21,
    "gmail": "hello@123",
    "isOnline": false,
    "amount":32000,
    // greeting:function(){
    //     console.log(`Strike is coming on oct 28 ${this.name}`);
    //     return 25;
    // },
    address:{
        city:"Siddipet",
        state:"Telangana"
    },
    [sym]:"Hello PW IOI"
}

// const name=user.name
// const age=user.age
// console.log(name,age);

// const {name:useName,age:userAge}=user
// console.log(useName,userAge);

// let arr=[10,20,30,40];
// const [a,b]=arr;
// console.log(a,b);
// for(let key of Object.keys(user)){
//     console.log(key,":",user[key]);
    
// }

// console.log(Object.entries(user));

// for(const items of Object.entries(user)){
//     console.log(items);
    
// }

// let val=user.greeting();
// console.log(user.address.state);
// console.log(user.address.city);

// user2={...user}
// user.name="Mohan"
// user.address.city="Bengaluru"
// console.log(user);
// console.log(user2);

// const user2=structuredClone(user)
// user.address.city="Bengaluru"
// console.log(user);
// console.log(user2);

console.log(user[sym]);








