

const express = require("express")
const router = express.Router()
const {v4 : uuid} = require("uuid")


let todos = []

//params : its one method to send the data on backend  
//router.post("/create/:title/:desc", (req, res) => { frontend : domain/api/todos/create/study/react

//query    
//router.post("/create", (req, res) => {  frontend : domain/api/todos/create?title=study?desc=react
router.post("/", (req, res) => {        

    try {
        // const {title, desc} = req.params
        // const {title, desc} = req.query
        const {title, desc} = req.body
        //console.log(req.body)
        todos.push({
            title,
            desc, 
            id: uuid()
        })

        res.json({
            msg : "Done",
            data : todos
        })
        
    } catch (error) {

        res.json({
            msg : error.message
        })
        
    }
})

router.get("/:id", (req, res) => {
    try {

        res.json({
            msg : "Done",
            data : todos
        })
        
    } catch (error) {
        res.json({
            err : error.massage
        })
        
    }

})

router.get("/", (req, res) =>{

    try {
        const id = req.params
        const foundTask = todos.find((item) =>{
            return item.id == id
        })
        if(!foundTask){
            throw new Error("Task not found ...")
        }
        res.json({
            msg : "done",
            data : foundTask
        })
        
    } catch (error) {
        res.json({
            err : error.massage
            
        })
        
    }

})


router.delete("/:id", (req, res ) =>{
    try {
        const { id } = req.params
        const nArr = todos.filter((item) =>{
            return item.id !== id
        })

        todos = nArr

        res.json({
            msg : "Done",
            data : todos
        })

        
    } catch (error) {

        res.json({
            err : error.massage
        })
    }

})

router.patch("/:id", (req, res) =>{
    try {
        const { id } = req.params
        const {title, desc } = req.body
        let flag = false

        for(let item of todos){
            if(item.id == id){
                item.title = title
                item.desc = desc
                flag = true
            }
        }

        if(!flag){
            throw new Error("tasak not found")
        }

        res.json({
            msd : "Done",
            data : todos
        })
        
    } catch (error) {
        res.json({
            err : error.massage
        })
    }

})


 

router.get("/testing", (req, res) =>{
    res.json({
        msg : "Server healthy"
    })
})



module.exports = {
    todoRouter : router
} 