const fs=require('fs');
/*
fs.mkdir("folder",(err)=>
{
    console.log(err);
})

//for creating new file
*/


fs.writeFile("./folder/bio.txt","bbb",(err)=>
{
    console.log(err);

});

//append//

fs.appendFile("./folder/bio.txt","appp",(err)=>
{
    console.log(err);
})

//read//

const data=fs.readFile("./folder/bio.txt","utf-8",(err,data)=>
{
    console.log(data);
})

fs.rename("./folder/bio.txt","./folder/bio1.txt",(err)=>
{
    console.log(err);
});

fs.unlink("./folder/bio1.txt",(err)=>

{

    console.log(err);
})

fs.rmdir("dfh",(err)=>
{
    console.log(err)
})