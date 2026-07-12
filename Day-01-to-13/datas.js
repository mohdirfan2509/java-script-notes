const products = [
    // Electronics
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
    { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
    { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

    // Books
    { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
    { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
    { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

    // Appliances
    { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
    { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
    { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
    { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

    // Clothing
    { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
    { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
    { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

    // Home Goods
    { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
    { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
    { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

    // Groceries
    { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
    { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// let ans= products.map((product)=>({name:product.name, price:product.price})).sort((a,b)=>b.price-a.price)
// console.log(ans);

// const newProducts= products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price)
// console.log(newProducts);

// totalPrice = products.reduce((accumulater, currValue) => {
//     if (currValue.inStock)
//         return accumulater + currValue.price;
//     else
//         return accumulater
// }, 0)
// console.log(totalPrice);

// let arr=[10,20,10,20,40,50,60,60]

// const uniqArr= [...new Set(arr)];
// console.log(uniqArr);
let m1= new Map([
    [true,"Irfan"],
    ["Name","Munaf"],
    [{a:1,b:2},"data"]
])
console.log(m1);

for(let [i,j] of m1){
    console.log(i,"--->",j);
    
}




