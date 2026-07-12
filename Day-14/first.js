const newElem= document.createElement("h2");
newElem.textContent="Strike is Coming";
newElem.id="second";

const element= document.getElementById("first");
element.after(newElem)

const newElem2=document.createElement("h3");
newElem2.textContent="August is coming !!"
newElem2.id="third";
newElem2.classList.add("august")
newElem2.classList.add("september")
newElem2.classList.remove("august")

newElem2.style.backgroundColor="brown";
newElem2.style.fontSize="20px"

newElem2.setAttribute("ename","osama");
element.before(newElem2)


// const li1=document.createElement("li");
// li1.textContent="Milk";

// const li2=document.createElement("li");
// li2.textContent="Cake";
// const li3=document.createElement("li");
// li3.textContent="Bread";

// const li4=document.createElement("li");
// li4.textContent="Butter";

// const li5=document.createElement("li");
// li5.textContent="Paneer";

// const ulElement= document.getElementById("listing");
// ulElement.append(li1,li2)
// ulElement.prepend(li3)
// li1.after(li4)

// ulElement.children[2].after(li5)
// console.log(newElem2.getAttribute("ename"));

const ulElement= document.getElementById("listing");

const arr=["Halwa","Biryani","Cake","Egg","Bread","Poha"]
// const fragment= document.createDocumentFragment();
const buffer= Array();
for(let food of arr){
    lst=document.createElement("li");
    lst.textContent=food;
    buffer.push(lst);

    // fragment.append(lst);
    
}
// ulElement.append(fragment)
ulElement.append(...buffer)

// element.remove()