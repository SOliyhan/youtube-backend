//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {

    app.on("error", (error)=> {
        console.log(`Error connecting with app: ${error}`);
        throw error
    })

    app.listen(process.env.PORT || 8000, ()=> {
        console.log(` Server is running at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(`DB Connection failed: ${error}`);
})



/*
;( async () => {   // semicolon for cleanup in iife
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
})()
*/
