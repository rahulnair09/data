const fs=require('fs');
fs.writeFile("read1.txt","hello",(err)=>
{
    console.log(err);
});
fs.readFile(".\read1.txt","UTF-8",(err,data)=>
{
    console.log(data);
});

fs.appendFile("read1.txt","added",(err)=>
{   
    console.log(err)

})
