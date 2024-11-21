const jwt=require("jsonwebtoken")
const User=require("../model/model")
const auth= async (req,res,next)=>
{
    try {
        const token=req.cookies.jwt;
        const verifier=jwt.verify(token,"rahulthapliyal")
        console.log(verifier);
        const user=await User.findOne({_id:verifier._id})
        console.log("Verify user")
        next()
    } catch (error) {
        res.redirect("/signin");
    }
}
module.exports=auth;