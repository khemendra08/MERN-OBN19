const {rateLimit} = require("express-rate-limit")



const limiter = rateLimit({
    limit : 3,
    windowMs : 10 * 1000,
    message :{
        status : 429,
        error : "To many Requests ",
        message : "Bhai ruk ja "
    }
})


module.exports = {
    limiter
}