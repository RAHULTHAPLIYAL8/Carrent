const Express=require("express");
const app=Express();
const carRouter=require("./router/car_router.js")
const cartRouter=require("./router/cart_router.js")
const bodyParser = require("body-parser");
const cors=require("cors")
const mongoose=require("mongoose");
const User=require("./model/model")
const mid=require("./middleware/auth")
const uri="mongodb://localhost:27017/Cardata"
/**********Middlewore use for cors********** */
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
/*******************************************/
/********Middleware use for cors ******** */
app.use(Express.json())
app.use(bodyParser.urlencoded({extended:true}));
/*******************************************/
mongoose.connect(uri).then(()=>
{
    console.log("Database connected!!!")
}).catch((err)=>
{
    console.log("Database not connected!!1") 
})


app.use("/cars",carRouter);
app.use("/cart",cartRouter);
/*******************Signup************************************/
app.post("/signup", async (req, res) => {
    try {
      const {name,email,password} = req.body;
      console.log(req.body);
      const unique=await User.findOne({email});
      if(unique)
      res.json({status:"email",message:"Email already exist"});
      const newUser =new User({ name,email,password,status});
      const savedUser=await newUser.save();
      console.log("Successfully added to our user");
      const token =await savedUser.generatetoken();
      console.log("Token is generated");
      console.log(token)
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 600000), // Expires in 10 minutes
        httpOnly: true,
        sameSite: 'None',
        secure: false // Ensure this is false for localhost
      });
      res.json({ status: "ok", message:"Registraiton successful"});
    } catch (error) {
      console.error(error);
      res.json({ status: "error", error: error.message });
    }
  });


//*******************************Login**********************************************

  app.post("/signin", async (req, res) => {
    try {
      console.log(req.body)

      const user=await User.findOne({email:req.body.email});
      await user.generatetoken().then((data)=>
      {
        res.cookie("jwt", data, {
          expires: new Date(Date.now() + 600000), // Expires in 10 minutes
          httpOnly: true,
          // sameSite: 'None',
          // secure: false // Ensure this is false for localhost
        });
      }).catch((err)=>
      {
        console.log(err)
      })  
      console.log("Successfully  find  User");
      res.json({ status:"ok", name:"successfully login"});
    } catch (error) {
      console.error(error);
      res.json({ status: "Error", error: error.message });
    }
  });


app.listen(8000,(err)=>
{
  console.log("Server connected");
});

