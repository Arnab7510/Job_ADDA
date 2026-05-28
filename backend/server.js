const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db")
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectdb();
app.get("/",(req,res) =>{
    res.send("api is working");
});
app.use("/api/jobs",require("./routes/jobroutes"));
app.use("/api/users",require("./routes/authroutes"));


const port =process.env.PORT || 5500;
app.listen(port,()=>{
    console.log("server is running port 5500");
});