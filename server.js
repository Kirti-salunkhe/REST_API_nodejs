const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectioDb")

const PORT=process.env.PORT || 5000

connectDb()
app.use(express.json())
app.use("/student",require("./routes/student"))

app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`);
})