import dotenv from "dotenv";
import express from "express";
import connectDB from "./Database_connector/index.js";

const app = express();
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running in ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed!!!! ", err);
    process.exit(1);
  });

/* 
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.p("error",()=>{
            console.log("ERRR:",error)})
            throw error
        }
            app.listen(process.env.PORT,()=>{
                console.log(`app is listening to $(process.env.PORT))})
    catch(error){
    console.log("ERROR: ",error)}        })
        
()
 */

/* effiy function that is called immediately after definition */
