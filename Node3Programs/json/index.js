const fs=require('fs');


const a={
    name:"rahul",
    rollno:10,
    year:"FYMCA"
}
/*
    console.log(a.name);
    const data=JSON.stringify(a);
    console.log(data);
    const data1=JSON.parse(data);
    console.log(data1);
    */
    const data3=JSON.stringify(a);
   

    console.log(data3)
    fs.writeFile("op.json",data3,((err)=>
    {
        
    }
    ))

    fs.readFile("op.json","utf-8",(err,data)=>
    {
       console.log(data);
        const data1=JSON.parse(data);
        console.log(data1)
    })

   