const mongoose=require('mongoose');
const {CarModel,carModelSchema}=require("./Carmodel")
const cartModelSchema=new mongoose.Schema(
    {
        userId:{type:String},
        carId:{type:mongoose.Schema.Types.ObjectId, ref:'CarModel'},
        quantity: { type: Number, default: 1 }, 
    }
)
const cartModel=mongoose.model('cartModel',cartModelSchema);
module.exports=cartModel;