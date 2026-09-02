
const figlet = require("figlet")
const chalk = require("chalk")
const cowsay = require("cowsay")
var giveMeAJoke = require('give-me-a-joke')

// figlet("Hello ji", (error , data)=>{
//     console.log(chalk.blue(data))
// })



// console.log(cowsay.say({
//     text : "Hello",
//     e : "oO",
//     T : "U"
// }))


giveMeAJoke.getRandomDadJoke ((j) =>{
    console.log(j )
})