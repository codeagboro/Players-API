const express = require("express");
const connectDB = require("./db/player.db");

// import dotnev to load enviroment variables



const router = require("./routes/player.routes");

const app = express();

const port = 8090;


connectDB();


app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Grazac FC"
    });
});

app.use(router);

app.all("*", (req, res) =>{
    return res.status(404).json({
        error: `${req.url} not found` ,
    });
});

app.listen(port, () =>{
    console.log("server up and running")
});
