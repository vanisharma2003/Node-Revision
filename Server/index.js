const http = require("http")
const myCustomServer = http.createServer((req,res)=>{
   switch(req.url){
   case "/":res.end("Welcome")
   break;
   case "/about":res.end("Hello I am Vani sharma")
   break;
   default:res.end("404 not found")
   break;
   }

    // res.end("Hello Vani")
})
myCustomServer.listen(8000,()=>{
    console.log("server started")
})