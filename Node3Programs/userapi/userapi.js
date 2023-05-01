const fs= require("fs");
const http=require("http");

const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.end("main page");
    }
    else if(req.url=="/about")
    {
        res.end("about page")
    }
    else if(req.url=="/url")
    {
       fs.readFile(`${__dirname}/op.json`,"utf-8",(err,data)=>
       {
        console.log(data);
        const obj=JSON.parse(data);
        res.end(data);
       });
    }
    else 
    {
        res.writeHead(404,{ "Content-type":"text/Html"});
        res.end("<h1>404. Error not found </h1>");
    }
})

server.listen(3000,"127.0.0.1",()=>
{
    console.log("listening");
})


