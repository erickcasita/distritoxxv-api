import mongoose from "mongoose";
import config from "./config/mongo.config"
(async () =>{
    try{
        const db = await mongoose.connect(config.mongodbURL);
        console.log('Connect db to ',db.connection.name);

    }catch(error){
        console.log(error);
    }
})();
