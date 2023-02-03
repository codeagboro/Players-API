const Players = require("../model/Players.model");

Players();

const createPlayer = async (req, res) => {
    try {
        const { firstName, lastName, playerPosition, jerseyNumber } = req.body;
        if (!(firstName && lastName && playerPosition && jerseyNumber)){
            return res.status(400).json({
                error : "All fields are required"
            });
        }

        const IfPlayerExists = await Players.findOne({jerseyNumber});

        if (IfPlayerExists){
            return res.status(409).json({
                error: `player with the ${jerseyNumber} exists`,
            });
        }

        const savedPlayer = await Players.create({
            firstName,
            lastName,
            playerPosition,
            jerseyNumber
        });

        return res.status(201).json({
            status: "success",
            message: `player with name ${firstName} has been registered successfully`,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
}

const getAllPlayers = async (req, res) => {
    try {
        const players  = await Players.find().sort({ jerseyNumber: -1});
        return res.status(200).json({
            message: "players",
            players,
        })
    } catch (error) {
        console.log(error);
        return re.status(500).json({
            error: error,
        })
    }
}

const updatePlayers = async (req, res) => {
    try {
        const id = req.params.id;
        const { firstName, lastName, playerPosition, jerseyNumber} = req.body;
        const player = await Players.findById({_id: id});

        if (!player) return res.status(404).json({error: `player with ${id} not found`,});

        const updatePlayers = await Players.findOneAndUpdate(
            id,
            {
                firstName,
                lastName,
                playerPosition,
                jerseyNumber,
            },
            { new: true }
        );

        return res.status(200).json(updatePlayers);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
};

module.exports = {
    createPlayer,
    getAllPlayers,
    updatePlayers,
};

