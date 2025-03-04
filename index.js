const express =require("express")
const dotenv = require("dotenv");
dotenv.config()
const app = express();


// app.use("/", require("./routes"));

const APP_PORT = process.env.APP_PORT || 8080;

app.listen(APP_PORT , ()=>{
    console.log("server started" ,APP_PORT)
})