const jwt=require("jsonwebtoken")
const Register=
const auth= async (req,res,next)=>
{
    try {
        const token=req.cookies.jwt;
        const verifier=jwt.verify(token,Secret_Key)
        const verifier
        const user=await Register.findOne({_id:verifier._id})
        console.log("Verify user")
        next()
    } catch (error) {
        res.status(401).send(error);
    }
}