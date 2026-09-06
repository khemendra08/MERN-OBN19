const express = require("express")
const router = express.Router( )


const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 69999,
    brand: "Apple",
    stock: 25,
    rating: 4.5
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "Mobile",
    price: 74999,
    brand: "Samsung",
    stock: 18,
    rating: 4.4
  },
  {
    id: 3,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 99999,
    brand: "Apple",
    stock: 12,
    rating: 4.8
  },
  {
    id: 4,
    name: "Dell Inspiron 15",
    category: "Laptop",
    price: 64999,
    brand: "Dell",
    stock: 20,
    rating: 4.2
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    brand: "Sony",
    stock: 10,
    rating: 4.7
  },
  {
    id: 6,
    name: "AirPods Pro",
    category: "Headphones",
    price: 24999,
    brand: "Apple",
    stock: 30,
    rating: 4.6
  },
  {
    id: 7,
    name: "Logitech MX Master 3S",
    category: "Mouse",
    price: 8999,
    brand: "Logitech",
    stock: 15,
    rating: 4.5
  },
  {
    id: 8,
    name: "Samsung 27-inch Monitor",
    category: "Monitor",
    price: 18999,
    brand: "Samsung",
    stock: 8,
    rating: 4.3
  }
];


router.get("/", (req, res) => {

    try{
        res.json({
            data : products
        })
    } catch (error) {
        res.json({
            err : error.massage
        })
    }

})


router.delete("/", (req, res) => {
    try {
        const removedVal = products.pop()
        res.json({
            msg : "Product deleted",
            deletedData : removedVal
        })
    } catch (error) {
        res.json({
            err : error.massage
        })  
    }
})


module.exports = {
    ProductRouter : router
}