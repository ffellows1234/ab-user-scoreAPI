const express = require("express");
var mongoose = require("mongoose");

const router = express.Router();


//require leaderboardpost from leaderboard screen within client side
//const leaderboardPost = require('../models/leaderboardPost');


router.get('/get', (req, res) => {

    leaderboardPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', daerrorta);
        });
});

//model that is posted to mognoDB
router.post('/save', (req, res) => {
    console.log('Body:', req.body)
    const data = req.body;

    const newleaderboardPost = new leaderboardPost(data);

    // .save
    newleaderboardPost.save((error) => {
        if (error){
                res.status(500).json({ msg: 'Sorry there is a server error'});
        } else {

            res.json({
                msg: 'data has been saved to db!!!!'
            });
        }
    })
});

router.get('/name', (req, res) => {

        const data = {
            username: 'fred',
            score: 340
        };

        res.json(data);
});

module.exports = router;