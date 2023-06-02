const ExpenseSchema=require("../models/ExpenseModel")
exports.addExpense=async(req,res)=>
{
  const {title,amount,category,description,date}=req.body
  const expenses=ExpenseSchema({
    title,
    amount,
    category,
    description,
    date
  })
  try{
    //validation
    if(!title||!category||!description||!date)
    {
        return res.status(400).json({message:"All fields are required"})
    }
    if(amount <=0||  !amount==='number')
    {
        return res.status(400).json({message:"Amount should be positive"})
    }
    await expenses.save()
    res.status(200).json({message:'Expense Added'})
}
    catch(error){
        res.status(500).json({message:'Server Error'})
    }
  console.log(expenses)
}
exports.getExpenses=async(req,res)=>
{
    try
    {
        const expenses=await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    }
    catch(error)
    {
        res.status(500).json({message:'Server error'})
    }
}
exports.deleteExpense=async(req,res)=>
{
    const {id}=req.params;
    console.log(req.params);
    ExpenseSchema.findByIdAndDelete(id).
    then((income)=>
    {
        res.status(200).json({message:'Expense Deleted'})
    })
    .catch((error)=>
    {
        res.status(500).json({message:'Server error'})
    })

}

