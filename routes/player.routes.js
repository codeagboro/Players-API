const express = require ("express");
const { createPlayer, 
    getAllPlayers, 
    updatePlayers } = require("../controllers/players.controllers");

const router = express.Router();

router.post("/player", createPlayer);

router.get("/player", getAllPlayers);

router.put("/player", updatePlayers);

module.exports = router;
    