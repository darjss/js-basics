let products=[
    {
        name: "iphone 14",
        price: 700,
        category: "Electronics",
        brand: "Apple",
        stock: 5
    },
    {
        name: "macbook pro 16",
        price: 1300,
        category: "Electronics",
        brand: "Apple",
        stock: 2
    },    {
        name: "winter puffer jacket",
        price: 300,
        category: "Clothing",
        brand: "North face",
        stock: 4
    },    
    {
        name: "Chuck 70",
        price: 100,
        category: "Shoes",
        brand: "Converse",
        stock: 3
    },
    {
        name: "air jordan 1",
        price: 150,
        category: "Shoes",
        brand: "Nike",
        stock: 2
    },
    {
        name: "skinny jeans",
        price: 70,
        category: "Clothing",
        brand: "Levi's",
        stock: 10
    },
    {
        name: "display 27 uhd",
        price: 400,
        category: "Electronics",
        brand: "LG",
        stock: 1
    },
    {
        name: "ny baseball cap",
        price: 10,
        category: "Clothing",
        brand: "New Era",
        stock: 12
    },
    {
        name: "galaxy s22",
        price: 999,
        category: "Electronics",
        brand: "New Era",
        stock: 5
    },
    {
        name: "power adapter",
        price: 30,
        category: "Electronics",
        brand: "Anker",
        stock: 12
    }
]
// function filter(array, department){
//     for(let i=0; i<array.length; i++){
//         if(array[i].category==department){
//             console.log(array[i].name)
//         }
//     }
// }
// function discount(array){
//     for(let i=0; i<array.length; i++){
//         array[i].price= array[i].price*0.9;
//         console.log(array[i].price);
//     }
// }
// discount(products);
// filter(products, "Electronics")
const filterByBrand=(arr,bName)=>{
    let newArr=arr.filter((a)=>{
            return a.brand==bName;
    }) 
    return newArr;
}
let filteredArr=filterByBrand(products,"Anker");
console.log(filteredArr);

const filterByPrice=(arr,min, max)=>{
    let filArr=arr.filter((a)=>{
        return a.price>=min && a.price<=max;
    })
    return filArr;
}
let filprice=filterByPrice(products, 100, 1500);
console.log(filprice);

const sortStock=(arr)=>{
    arr.sort((a,b)=>{
        return a.stock-b.stock;
    })
    return arr;
}
console.log(sortStock(products))
const onlyPrice=(arr)=>{
    let priceArr=arr.map((a)=>{
        return a.price
    })
    return priceArr;
}
let arrPrice=onlyPrice(products);
console.log(arrPrice);