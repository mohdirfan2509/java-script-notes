const orderDetails={
    orderId:123121,
    food:["Pizza","Biryani","Puri"],
    cost:650,
    customer_name:"Irfan",
    customer_location:"Siddipet",
    restaurant_location:"Hyderabad",
}

function placeOrder(orderDetails,callBack){
    console.log(`${orderDetails.cost} Payment is in process--> 1`);

    setTimeout(()=>{
        console.log("Payment has been received and order has been placed--> 2");
        orderDetails.status=true;
        callBack(orderDetails)
    },3000) 
}


function prepareFood(orderDetails,callBack){
    console.log(`Your food is being prepared. the items are ${orderDetails.food}--> 3`);

    setTimeout(()=>{
        console.log("Your order is now prepared--> 4");
        orderDetails.token=123;
        callBack(orderDetails)
    },3000)
    
}

function pickupOrder(orderDetails,callBack){
    console.log(`Delivery boy is on the way to pickup order from ${orderDetails.restaurant_location}--> 5`);

    setTimeout(()=>{
        console.log("Order has been picked up by the delivery boy--> 6");
        orderDetails.received=true;
        callBack(orderDetails)
    },3000)
    
}

function deliverOrder(){
    console.log(`Delivery boy  is on the way to deliver at ${orderDetails.customer_location} --> 7`);

    setTimeout(()=>{
        console.log("Order delivered successfully--> 8");
        orderDetails.delivery=true
        console.log(orderDetails);
        
    },3000)
    
}

placeOrder(orderDetails,(orderDetails)=>{
    prepareFood(orderDetails,(orderDetails)=>{
        pickupOrder(orderDetails,(orderDetails)=>{
            deliverOrder(orderDetails)
        })
    });
})


