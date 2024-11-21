const express=require("express")
const {addCar,showCar,deleteCar,updateCar}=require("../controllers/car_controller")
const carRouter=express.Router()
carRouter.post("/add",addCar);
carRouter.get("/showcars",showCar);
carRouter.delete("/deletCar",deleteCar);
carRouter.put("/updateCar",updateCar);
module.exports=carRouter;