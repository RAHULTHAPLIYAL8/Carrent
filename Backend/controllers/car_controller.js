const {carModel}=require("../model/Carmodel")

const addCar=async(req,res)=>
    {
       
       const carDetail= await carModel.create(req.body);
       console.log(carDetail);
       res.json({staus:"ok",message:"Car deatails add successfully"});
    }
const showCar=async(req,res)=>
    {
        const allDetail= await carModel.find();
        res.json({status:"ok",message:allDetail });
     }

const deleteCar=async(req,res)=>
   {
       console.log(req.body.id);
       const car=await carModel.findByIdAndDelete(req.body.id);
       res.json({status:"ok",message:car});
   }
const updateCar=async(req,res)=>
{
    console.log(req.body);
    const updateCar=await carModel.findByIdAndUpdate(req.body.id,req.body)
    res.json({status:"ok",message:"Car updated Successfully"});
}
module.exports={addCar,showCar,deleteCar,updateCar}
