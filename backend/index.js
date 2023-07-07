const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");

const app = express()
dotenv.config();
mongoose.set("strictQuery", false);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to DB");
    } catch (error) {
        throw error
    }

}

// route and middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/images", express.static("public/images"))
app.use('/auth', authController)
app.use('/product', productController)
app.use("/upload", uploadController)

app.listen(process.env.PORT, () => {
    connect();
    console.log("server has been started")
})