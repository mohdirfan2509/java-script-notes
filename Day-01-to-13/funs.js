// addNumbers(10,20,30)

// function addNumbers(...nums){
//     let sum=0;
//     for(let i of nums){
//         sum+=i
//     }
//     console.log(sum);

// }

// rest operator
// const [fst,sec,...arr]=[10,20,30,40,50]
// console.log(arr);

// lst1=[10,20,30,40,50]
// lst2=[60,70,80,90,100]


// Spread operator
// lst3=[...lst1,...lst2]
// console.log(lst3);

// const multiplyNumbers= function(num1,num2){
//     return num1*num2;
// }
// console.log(multiplyNumbers(10,2));

// const subNumbers= (num1,num2)=> num1-num2;

// console.log(subNumbers(20,5));

// const square= num=> num*num;

// console.log(square(12));

// const funData= ()=>({name:"Irfan",age:20})
// console.log(funData());

// IIFE

// (function greeting(){
//     console.log("Hello World !!");

// })()
// let a=(num=> num*num)(10)
// console.log(a);

// function dance(){
//     console.log("this is dance(): I am not going to dance !!");
    
// }
// function greeting(callBack1,callBack2) {
//     console.log("this is greeting(): Hello, How are you ?");
//     callBack1()
//     console.log("this is greeting() : meeting is completed !!");
    
// }

// function meet() {
//     console.log(" this is meet():I am going to meet someone !!");

// }

// greeting(meet)
// greeting(dance)

function blinkitOrderPlaced(){
    console.log("Your order has placed, order is being packed !!");
    
}

function zomatoOrderPlaced(){
    console.log("Your order has placed, food preparation started !!");
    
}

function payment(amount,callBack){
    console.log(`${amount} payment has initialized !!`);
    console.log("payment has received !!");
    callBack();
}

payment(600,blinkitOrderPlaced)



