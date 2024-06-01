//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()



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
