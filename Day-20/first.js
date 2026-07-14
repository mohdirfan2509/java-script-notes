// async await 

// async function greet(){
//     return "Hello !!"
// }

// const response= greet();
// // console.log(response);
// response.then((data)=>console.log(data))

// async function greet(){
//     return new Promise((resolve,reject)=>{
//         reject("Hello")
//     })
// }

// const response= greet();
// response.then((data)=>console.log(data)).catch((error)=>console.log("Error : ",error)
// )

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data)
// )

// async function github() {
//     try {
//         const response = await fetch("https://api.github.com/users");
//         if(!response.ok){
//             throw new Error("Data is not present");
//         }
//         const data = await response.json();
//         // console.log(data);
//         const parent = document.getElementById("first")
//         for (let user of data) {
//             const element = document.createElement("div");
//             element.classList.add("user");

//             const image = document.createElement('img');
//             image.src = user.avatar_url;

//             const userName = document.createElement('h2');
//             userName.textContent = user.login;

//             const anchor = document.createElement('a');
//             anchor.href = user.html_url;
//             anchor.textContent = "Visit Profile"

//             element.append(image, userName, anchor);
//             parent.append(element)
//         }
//     } catch (error) {
//         console.log("Error Occured !!");

//     }
// }

// github()

const orderDetails = {
    orderId: 123121,
    food: ["Pizza", "Biryani", "Puri"],
    cost: 650,
    customer_name: "Irfan",
    customer_location: "Siddipet",
    restaurant_location: "Hyderabad",
}

function placeOrder(orderDetails) {
    console.log(`${orderDetails.cost} Payment is in process--> 1`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("Payment has been received and order has been placed--> 2");
                orderDetails.status = true;
                resolve(orderDetails);
            } else {
                reject("Payment is failed !!--> 2")
            }
        }, 3000)
    })


}


function prepareFood(orderDetails) {
    console.log(`Your food is being prepared. the items are ${orderDetails.food}--> 3`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                console.log("Your order is now prepared--> 4");
                orderDetails.token = 123;
                resolve(orderDetails)
            } else {
                reject("Food item is not present at resturant --> 4")
            }
        }, 3000)
    })



}

function pickupOrder(orderDetails) {
    console.log(`Delivery boy is on the way to pickup order from ${orderDetails.restaurant_location}--> 5`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                console.log("Order has been picked up by the delivery boy--> 6");
                orderDetails.received = true;
                resolve(orderDetails)
            } else {
                reject("Delivery boy unable to reach restaurant!!--> 6")
            }
        }, 3000)
    })
}

function deliverOrder(orderDetails) {
    console.log(`Delivery boy  is on the way to deliver at ${orderDetails.customer_location} --> 7`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order delivered successfully--> 8");
            orderDetails.delivery = true
            resolve(orderDetails)
        }, 3000)
    })


}

async function ordering() {
    try {
        const response1 = await placeOrder(orderDetails);
        const response2 = await prepareFood(response1);
        const response3 = await pickupOrder(response2);
        const response4 = await deliverOrder(response3);
        console.log(response4);

    } catch (error) {
        console.log("Error : ", error);

    }
}
ordering()


async function userInfo() {
    //  const comment=await fetch("userComment")
    //  const photos=await fetch("userPhoto")
    //  const chat=await fetch("chat")

    const [comment, photos, chat] = await Promise.all([fetch("userComment"), fetch("userPhoto"), fetch("chat")])
}





