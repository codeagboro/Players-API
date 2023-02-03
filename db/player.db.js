
const mongoose = require("mongoose");

//connect to database
mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/playerdb");
       console.log("connected to playerdb"); 
    } catch (error) {
        console.error(error);
    }
};

// export connectDB
module.exports = connectDB;
