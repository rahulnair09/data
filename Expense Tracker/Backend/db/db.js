const mongoose=require('mongoose');
const db=async()=>
{
    
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Conncted');
   
    
    
}

module.exports={db}