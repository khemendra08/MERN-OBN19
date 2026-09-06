
require("dotenv").config()
const express = require("express")
const app = express()
const {UserRouter} = require("./routes/User.route")
const {ProductRouter} = require("./routes/Product.route")

//localhost:8080/api/users 
app.use("/api/products", ProductRouter)
app.use("/api/users",UserRouter)

app.use((req, res) => {
    res.json({
        err : "Not found"
    })

})



const PORT = process.env.PORT 


app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})



// console.log(server.address)