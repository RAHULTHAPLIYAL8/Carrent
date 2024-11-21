const cartModel=require("../model/cartmodel")
const {carModel}=require("../model/cartmodel")
const addCart=async(req,res)=>
    {
       const carDetail= new cartModel(req.body);
       await carDetail.save();
       console.log(carDetail);
       res.json({staus:"ok",message:"add Cart details from Cart"});
    }

const allCart=async(req,res)=>
{
    const allCart=await cartModel.find({}).populate('carId');
    res.json({status:"ok",message:allCart});
}

  const removeCart=async(req,res)=>
 {
    
    const removeCart=await cartModel.findByIdAndDelete(req.body._id);
    removeCart.save();
    res.json({status:"ok",message:"Remove details from Cart"})
 }
module.exports={addCart,allCart,removeCart};