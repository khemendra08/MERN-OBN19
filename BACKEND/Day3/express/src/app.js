const express = require("express")
const app = express()

 const users = [
  {
    id: 1,
    name: "Rahul",
    age: 22,
    email: "rahul@gmail.com",
    city: "Delhi",
    isActive: true
  },
  {
    id: 2,
    name: "Priya",
    age: 24,
    email: "priya@gmail.com",
    city: "Mumbai",
    isActive: false
  },
  {
    id: 3,
    name: "Aman",
    age: 21,
    email: "aman@gmail.com",
    city: "Noida",
    isActive: true
  },
  {
    id: 4,
    name: "Sneha",
    age: 26,
    email: "sneha@gmail.com",
    city: "Bangalore",
    isActive: true
  },
  {
    id: 5,
    name: "Vikas",
    age: 23,
    email: "vikas@gmail.com",
    city: "Pune",
    isActive: false
  },
  {
    id: 6,
    name: "Neha",
    age: 25,
    email: "neha@gmail.com",
    city: "Jaipur",
    isActive: true
  }
];
      

app.get("/users", (req , res) =>{
    try{
        res.json(users)

    } catch (error) {
        res.json({
            err : error.massage
        })


    }
})


app.delete("/users", (req, res) =>{
    try{

        const obj = users.pop()
        res.json({
        msg : "done",
        delUser : obj
    })
    } catch(error){

        res.json({
            err : error.massage
        })

    }
    
})






app.listen(8080, () =>{
    console.log("Server running on port 8080")
})

