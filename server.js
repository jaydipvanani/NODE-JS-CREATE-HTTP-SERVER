// let {print, printsecond} = require("./test")
// print();
// printsecond();


let http = require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
  res.end("jaydeep")
}).listen(3003,()=>{
    // console.log("hello");

})

