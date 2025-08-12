const http = require("http")
const url = require("url")
const myCustomServer = http.createServer((req,res)=>{
if(req.url === "/favicon.ico") return
const myUrl = url.parse(req.url,true)
console.log(myUrl)
console.log(myUrl.query)
console.log(req.method)
   switch(myUrl.pathname){
   case "/":res.end("Welcome")
   break;
   case "/about":res.end(`Hello ${myUrl.query.username}`)
   break;
   default:res.end("404 not found")
   break;
   }

    // res.end("Hello Vani")
})
myCustomServer.listen(8000,()=>{
    console.log("server started")
})