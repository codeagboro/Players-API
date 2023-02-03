const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
    {
    firstName:{
        type: String,
        required: [true, "First name is required"],
    },
    lastName:{
        type: String,
        required: [true, "Last name is required"],
    },
    playerPosition:{
        type: String,
        required: [true, "position is required"],
    },
    jerseyNumber:{
        type: Number,
        required: [true, "Jersey number is required"],
        unique: [true, "Someone else has this number"]
    },
},
    {
        timestamps: true,
    },
)

const players = mongoose.model("players", playerSchema);
module.exports = players;