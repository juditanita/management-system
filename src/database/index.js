import mongoose from "mongoose";

const connectionToDB = async () => {
   const connectionURL = process.env.MONGODB_URI;

   mongoose
     .connect(connectionURL)
     .then(() =>
       console.log("connection successful")
     .catch((error) => console.log(error))
    );



};





export default connectionToDB;