
// function createCounter(){
//     let count=0;
//     function increment(){
//         count++;
//         return count;
//     }

//     return increment;
// }

// const counter=createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function bankAccount() {
//     let balance = 0;
//     const user = {
//         deposit: function (amount) {
//             if (typeof amount === 'number' && amount > 0) {
//                 balance += amount;
//                 return `Deposit of Rs ${amount} completed successfully !!
//                 Your current balance is Rs ${balance} `;
//             }else{
//                 return "You have entered an Invalid amount, so amount cannot be deposited"
//             }
//         },
        
//         withdraw: function(amount){
//             if(typeof amount ==='number' && amount >0 && balance-amount >=0){
//                 balance-=amount
//                 return `Withdraw of Rs ${amount} completed successfully !!
//                 Your current balance is Rs ${balance} `;
//             }

//         },

//         getBalance:function(){
//             return `Your current balance is Rs ${balance}`;
//         }
//     }
//     return user;
// }

// let customer= bankAccount()

// console.log(customer.deposit(10000));
// console.log(customer.withdraw(5000));

// Higher order function

function fun1(value){

    function fun2(num){
        return value*num;
    }
    return fun2
}

let inner=fun1(10)(3)
console.log(inner);


