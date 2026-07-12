// function handleClick(){
//     const element= document.getElementById("first");
//     element.textContent="Strike is coming !!"
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick() {
//     element.textContent = "Strike is coming !!"
// }

// element.onclick = function handleClick() {
//     element.textContent = "in October Month !!"
// }.

// element.addEventListener('mouseleave',()=>{
//     element.textContent="Strike is coming !!"
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown"
// })

function handleEvent(e) {
    e.target.textContent = "I am clicked !!"
    parent.removeEventListener('click', handleEvent);

}
const parent = document.getElementById("parent");
parent.addEventListener('click', handleEvent);


// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent="I am Clicked !!"
//     })
// }

// const grandParent = document.getElementById("grandParent")
// grandParent.addEventListener('click', (e) => {
//     // console.log("grandParent is clicked !!");
//     console.log(e.target);

// })

// const parent = document.getElementById("parent")
// parent.addEventListener('click', (e) => {
//     // console.log("parent is clicked !!");
//     // console.log(e);

// })
// const child = document.getElementById("child")
// child.addEventListener('click', (e) => {
//     // console.log("child is clicked !!");
//     // e.stopPropagation();
//     // console.log(e);
// })