const Express = require("express");
const app = Express();
const carRouter = require("./router/car_router.js");
const cartRouter = require("./router/cart_router.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/model");
const mid = require("./middleware/auth");
const uri = "mongodb://localhost:27017/Cardata";

/********** Middleware for CORS **********/
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allowed HTTP methods
  credentials: true // Allow cookies to be sent with requests
}));

/******** Middleware for JSON Parsing ********/
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/********** MongoDB Connection **********/
mongoose.connect(uri).then(() => {
  console.log("Database connected!!!");
}).catch((err) => {
  console.log("Database not connected!!", err);
});

/********** Routers **********/
app.use("/cars", carRouter);
app.use("/cart", cartRouter);

/********** Routes **********/
// Welcome Route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const unique = await User.findOne({ email });
    if (unique) {
      res.json({ status: "email", message: "Email already exists" });
      return;
    }
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    console.log("Successfully added to our user");
    const token = await savedUser.generatetoken();
    console.log("Token is generated");
    console.log(token);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 600000), // Expires in 10 minutes
      httpOnly: true,
      sameSite: 'None',
      secure: false // Ensure this is false for localhost
    });
    res.json({ status: "ok", message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.json({ status: "error", error: error.message });
  }
});

// Login Route
app.post("/signin", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.findOne({ email: req.body.email });
    await user.generatetoken().then((data) => {
      res.cookie("jwt", data, {
        expires: new Date(Date.now() + 600000), // Expires in 10 minutes
        httpOnly: true,
      });
    }).catch((err) => {
      console.log(err);
    });
    console.log("Successfully found User");
    res.json({ status: "ok", message: "Successfully logged in" });
  } catch (error) {
    console.error(error);
    res.json({ status: "Error", error: error.message });
  }
});

// Server Initialization
app.listen(8000, () => {
  console.log("Server connected on port 8000");
});
