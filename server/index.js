import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import userroutes from "./Routes/User.js"
import videoroutes from "./Routes/video.js"

dotenv.config()

const app=express();
app.use(cors());
app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use('./uploads', express.static(path.join('uploads')));

app.get('/', (req, res) => {
    res.send("UTube is working");
})

// app.use(bodyParser.json()); It's unnecessary since express.json() is already used.
app.use('/user', userroutes)
app.use()
const PORT = process.env.PORT || 5000

const DB_URL = process.env.DB_URL 
mongoose.connect(DB_URL).then(() => {
    console.log("Mongodb Database connected");
}).catch((error) => {
    console.log(error)
}
 )

app.listen(PORT, () => {
    console.log(`server running on Port ${PORT}`)
})



