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
    admin:
    {
        type : Boolean,
        require:true,
    },
    tokens: [{ 
        token: {
            type: String,
            required: true
        }
    }]
});
// *****************generate token************************************
userSchema.methods.generatetoken=async function()
{
    try{
        const token=jwt.sign({_id:this._id},"mynameisrahulthapliyal",{ expiresIn:"10 minutes"});
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
      res.send("the jwt erro"+error);
      
    }
}
// ***************************************************************************

const model = mongoose.model('Carauth', userSchema);

module.exports = model;
