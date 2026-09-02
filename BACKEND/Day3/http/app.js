const http = require("http")

const server = http.createServer((req, res) =>{
    console.log(req.url)
    //res.end("Hello World")

    if(req.url == "/users" && req.method == "GET")
    {
        res.end("Users api")
    }
    else if(req.url == "/users" && req.method == "DELETE"){
        res.end("users api 2")
    }

    else if(req.url == "/products")
    {
        res.end("Products api")
    }
    else if(req.url == "/about")
    {
        res.writeHead(2000, {'Content-Type' : 'text/html'})
        res.end(`<h1>Hello World </h1>`)
    }
    else{
        res.end("404 -> Not found")
    }
})

server.listen(8080 ,() =>{
   console.log("Serveruningr ")
})

//console.log("Server running on port 8080")