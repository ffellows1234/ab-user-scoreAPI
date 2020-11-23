const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const auth = require('../middleware/auth');

//update players score
router.put('/user', async function(req, res) {
    let { username, score } = req.body;
    // check if the username already exists
    const alreadyExisting = await db
        .collection('user')
        .findOne({ username: username });
    if (alreadyExisting) {
        // Update player object with the username
        await db
            .collection('user')
            .updateOne({ username }, { $set: { username, score } });
        console.log(`Player ${username} score updated to ${score}`);
        res.send({ status: true, msg: 'player score updated' });
    } else {
        res.send({ status: false, msg: 'player username not found' });
    }
 });