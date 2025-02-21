import dotenv from "dotenv";

import connectDB from "./Database_connector/index.js";

dotenv.config();

connectDB();

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
