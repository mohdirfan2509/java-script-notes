// console.log("Hello World First");

// const p1=fetch("https://api.github.com/users")
// // console.log(p1);
// const p2=p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);

// })

fetch("https://api.github.com/users").then((response) => {
    return response.json();
}).then((data) => {
    const parent = document.getElementById('first');

    for (let i = 0; i < 30; i++) {
        const image = document.createElement('img');
        image.src = data[i].avatar_url;
        image.style.height = "400px"
        image.style.width = "400px"
        parent.append(image)

    }


}).catch((error) => {
    const parent = document.getElementById('first');
    parent.textContent=error.message;

})

// console.log("Hello World Last");

// let a1={
//     "Name":"Irfan",
//     age:21,
//     isOnline:true,
//     status:undefined,
// }
// console.log(a1);
// const jsonFormat=JSON.stringify(a1);
// console.log(jsonFormat);

// jsonFmt=`{
//     "Name":"Irfan",
//     "age":21,
//     "isOnline":true
// }`

// let javaScriptObj =JSON.parse(jsonFmt)
// console.log(javaScriptObj);



