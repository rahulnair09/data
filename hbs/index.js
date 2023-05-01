const express=require('express')
const path=require('path')
const app=express()
const hbs=require("hbs")
const requests = require("requests");
const port=8000;
const templatepath=path.join(__dirname, "../hbs/template")
const partialpath=path.join(__dirname, "../hbs/partials")
console.log(templatepath);
//to set the view engine
app.set('view engine',"hbs");
app.set("views",templatepath)
hbs.registerPartials(partialpath)
app.get("",(req,res)=>
{
    res.render('index',
    {
    homename:"rahul",
    });
   
})


app.get("/about",(req,res)=>
{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=bf6009e9ec8eea55559f4ffc7a56ac26`)
    .on('data',  (chunk) =>{
      const objData=JSON.parse(chunk)
      const arrData=[objData];
      console.log(`city name is  ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);

      //const realTimeData=arrData.map((val)=>replaceVal(homeFile,val)).join("");
        
      
      res.write(arrData[0].name);
    })
    .on('end', function (err) {
      if (err) return console.log('connection closed due to errors', err);

      console.log('end');
      res.end();
    });
}) 
app.get("*",(req,res)=>
{
    res.render("404",
    {
      errorcommment:"oops page not found",
    })
})                                                           
app.listen(port,()=>
{
    console.log(`listening to port ${port}`);
});