const Express=require("express");
const app=Express();
const bodyParser = require("body-parser");
const cors=require("cors")
const mongoose=require("mongoose");
const User=require("./model/model")
const uri="mongodb://localhost:27017/Cardata"
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));

app.use(Express.json())
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(uri).then(()=>
{
    console.log("Database connected!!!")
}).catch((err)=>
{
    console.log("Database not connected!!1")
})
app.post("/login", async (req, res) => {
    try {
      const { Name, email, password} = req.body;
      console.log(req.body.admin) ;
      console.log(req.body);
      const newUser = new User({ name:Name, email, password});
      const savedUser = await newUser.save();
      console.log("Successfully added to our store");
  
      const token =await savedUser.generatetoken();
      console.log("Token is generated");
      console.log(token)
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 600000), // Expires in 10 minutes
        httpOnly: true,
        // sameSite: 'None',
        // secure: false // Ensure this is false for localhost
      });
      // res.cookie("jwt", token, {
      //   expires: new Date(Date.now() + 600000), // Expires in 10 minutes
      //   httpOnly: true,
      //   sameSite: 'None',
      //   secure: false // Set to true if running over HTTPS in production
      // });
      res.json({ registration: "Successful", token });
    } catch (error) {
      console.error(error);
      res.json({ status: "Error", error: error.message });
    }
  });


//*****************Login**********************************************

  app.post("/signin", async (req, res) => {
    try {
      const {email,password} = req.body;
      const user=await User.findOne({email});
      const token =await user.generatetoken();
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 600000), // Expires in 10 minutes
        httpOnly: true,
        // sameSite: 'None',
        // secure: false // Ensure this is false for localhost
      });
      
     
      console.log("Successfully added to our store");
  
    //  const token =await savedUser.generatetoken();
      console.log("Token is generated");
      console.log(token)
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 600000), // Expires in 10 minutes
        httpOnly: true,
        // sameSite: 'None',
        // secure: false // Ensure this is false for localhost
      });
      res.json({ ValidUser: "Successful", token });
      // res.cookie("jwt", token, {
      //   expires: new Date(Date.now() + 600000), // Expires in 10 minutes
      //   httpOnly: true,
      //   sameSite: 'None',
      //   secure: false // Set to true if running over HTTPS in production
      // });
     
    } catch (error) {
      console.error(error);
      res.json({ status: "Error", error: error.message });
    }
  });
///////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000,(err)=>
{
    try {
        console.log("Conncection Successful")
        } catch (error) {
        console.log("Error")
    }
})