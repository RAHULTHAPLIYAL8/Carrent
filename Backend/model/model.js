const mongoose = require('mongoose');
const jwt=require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: { 
      
            type: String,
            required: false,
        
    }
});
// *****************generate token*****************************************
userSchema.methods.generatetoken=async function()
{
    try{
        const token=jwt.sign({_id:this._id},"rahul123",{ expiresIn:"10 minutes"});
        this.tokens=token;
        await this.save();
        return token;
    }catch(error){
      res.send("the jwt erro"+error);
      }
}
// ***************************************************************************

const model = mongoose.model('user', userSchema);
module.exports = model;
