
// const redux = require("redux")

const fs = require("fs")


//writefile is async method  
// fs.writeFile("dummy.txt", "Hello World", () =>{
//     console.log("File written sucessfully")
// })


// fs.writeFileSync ("dummy2.txt", "Lorem ipsum")

//readFile is async method
// fs.readFile("dummy.txt", "utf-8" , (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//readFileSync : ye jo v file ko read krega use return krega as a  string 
// const val = fs.readFileSync("dummy2.txt", "utf-8")
// console.log(val)


//appendFile(): is async method
// fs.appendFile("dummy2.txt", "\nFish", ()=>{
//    console.log("ok")
// })

// fs.appendFileSync("dummy2.txt", "\nEgg")

//delete  file  method 
//unlink(): void type function
// fs.unlink("dummy3.txt", ()=>{
//     console.log("ok")
// })

// fs.unlinkSync("dummy.txt")

//Create a folder : mkdir
// fs.mkdir("demo", ()=>{
//     console.log("ok")
// })

// fs.mkdirSync("demo2")


//Delete a foleder
fs.rmdirSync("demo")


console.log("Done")
