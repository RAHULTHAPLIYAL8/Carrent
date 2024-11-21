const {carModel}=require("../model/Carmodel")

const addCar=async(req,res)=>
    {
       
       const carDetail= await carModel.create(req.body);
       console.log(carDetail);
       res.json({staus:"ok",message:"Car deatails add successfully"});
    }
const showCar=async(req,res)=>
    {
        console.log(req.body);
        const allDetail= await carModel.findAll();
        res.json({status:"ok",message:"Car deatails add successfully"});
     }

const deleteCar=async(req,res)=>
   {
       console.log(req.body);
       const car=await carModel.findByIdAndDelete(req.body.id);
       car.save();
       res.json({status:"ok",message:"Car delete Successfully"});
   }
const updateCar=async(req,res)=>
{
    console.log(req.body);
    const updateCar=await carModel.findByIdAndUpdate(req.body.id,req.body)
    updateCar.save();
    res.json({status:"ok",message:"Car updated Successfully"});
}
module.exports={addCar,showCar,deleteCar,updateCar}
