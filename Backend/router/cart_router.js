const express=require("express")
const {addCart,allCart,removeCart}=require("../controllers/cart_controller")
const cartRouter=express.Router()
cartRouter.post("/add",addCart);
cartRouter.get("/showcart",allCart);
cartRouter.delete("/deletecart",removeCart);
module.exports=cartRouter;