console.log("First");

setTimeout(()=>{
    console.log("setTimeout() ---> 1 executed ");
},5000)

setTimeout(()=>{
    console.log("setTimeout() ---> 2 executed ");
},6000)

console.log("Last");