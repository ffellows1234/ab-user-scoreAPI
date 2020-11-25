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

//model that is posted to mongoDB
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
                msg: 'data has been saved to db!'
            });
        }
    })
});

// "/users" needs to be the NAME of Database

// Access the leaderboard
router.get('/users', async function(req, res) {
    
    // retrieve ‘lim’ from the query string info
    let { lim } = req.query;
    
    db.collection('users')
        .find()
        // -1 is for descending leaderboard position
        .sort({ score: -1 })
        // Show only [lim] players
        .limit(lim)
        .toArray(function(err, result) {
            if (err)
                res.send({ status: false, msg: 'failed to retrieve scores' });
            console.log(Array.from(result));
            res.send({ status: true, msg: result });
        });
 });


module.exports = router;