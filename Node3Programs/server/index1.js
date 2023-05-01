const http=require("http");
const server=http.createServer((req,res)=>
{
    console.log(req.url)
    if(req.url=="/")
    {
        res.end("hello from other1 side")
      
    }
    else if(req.url=="/about")
    {
        res.end("Hello from about")
    }
    else{
        res.writeHead(404,{ "Content-Type":"text/html"})
        res.end("<h1>404.error</h1>");


    }
    
});
server.listen(3000,"127.0.0.1",()=>
    {
        console.log("listening")
    });