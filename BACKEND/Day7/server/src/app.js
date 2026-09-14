const express = require("express")
const { limiter } = require("./middlewares/rateLimit")
const app = express()


app.use(limiter)


// app.get("/testing", async(req , res) =>{
//     console.log("ok")
//     await new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve()
//         },3000)
//     })

//     res.json({
//         msg : "Done"
//     })
// })


app.get("/testing" ,(req, res)=>{
    console.log("Request recieved")
    let result = 0

    for(let i =0; i < 1_000_000_000; i++){
        result += i
    }
    res.json({
        msd:"Done",
        result
    })

})


app.get("/demo", (req, res)=>{
    res.json({
        msg : "Ok"
    })
})


app.listen(8080, ()=>{
    console.log("Server running")

})