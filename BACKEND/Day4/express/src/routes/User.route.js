 const express = require("express")
 const router = express.Router()

 const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 22,
    email: "rahul@gmail.com",
    city: "Delhi",
    role: "user",
    isActive: true
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 24,
    email: "priya@gmail.com",
    city: "Mumbai",
    role: "admin",
    isActive: true
  },
  {
    id: 3,
    name: "Aman Verma",
    age: 21,
    email: "aman@gmail.com",
    city: "Noida",
    role: "user",
    isActive: false
  },
  {
    id: 4,
    name: "Sneha Gupta",
    age: 26,
    email: "sneha@gmail.com",
    city: "Bangalore",
    role: "user",
    isActive: true
  },
  {
    id: 5,
    name: "Vikas Kumar",
    age: 23,
    email: "vikas@gmail.com",
    city: "Pune",
    role: "user",
    isActive: false
  },
  {
    id: 6,
    name: "Neha Patel",
    age: 25,
    email: "neha@gmail.com",
    city: "Ahmedabad",
    role: "admin",
    isActive: true
  },
  {
    id: 7,
    name: "Rohit Mehta",
    age: 28,
    email: "rohit@gmail.com",
    city: "Jaipur",
    role: "user",
    isActive: true
  },
  {
    id: 8,
    name: "Anjali Joshi",
    age: 20,
    email: "anjali@gmail.com",
    city: "Lucknow",
    role: "user",
    isActive: true
  }
];




//endpoint : localhost:8080/api/Users


 

router.get("/" , (req, res) => {
    try {
        res.json({
            data : users
        })
        
    } catch (error) {
        res.json({
            err : error.massage
        })
        
    }
}) 


router.delete("/", (req, res)=>{
    try {
        const removedVal = users.pop()
        res.json({
            msg : "user deleted",
            deletedData : removedVal
        })
        
    } catch (error) {
        res.json({
            err : error.massage
        })
        
    }

})


//named export
module.exports = {
    UserRouter : router
}





