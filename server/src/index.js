import express from "express"
import dotenv from "dotenv"
import { DB_CONNECTION } from "../db/DB_CONNECTION.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { indexRouter } from "../routes/index.js"
import cloudinary from "cloudinary"


const app = express()
dotenv.config()
app.use(express.json())


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))


DB_CONNECTION()

app.use("/api", indexRouter)



app.listen(4000, () => {
    console.log("server started at port 4000");


})
