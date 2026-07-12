let arr = [10, 20, 30, 40, 50]

// arr.forEach((num,i,j)=>{
//     console.log(num,i,j)
// });

// let newArr= arr.filter((num)=>num>30)
// console.log(newArr);

// Array.prototype.filtering = function (compare) {
//     let temp = []
//     for (let elem of this) {
//         if (compare(elem)) {
//             temp.push(elem)
//         }
//     }
//     return temp;
// }

// let newArr = arr.filtering((num) => num % 2 == 1)
// console.log(newArr);

// lst1=[20,25,30,35,40,45]
// let ans=lst1.filtering((num)=> num>30)
// console.log(ans);

let arr2= arr.map((num)=> num*2)
console.log(arr2);




