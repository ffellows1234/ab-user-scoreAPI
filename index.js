// const express = require("express");
// const mongoose = require('mongoose');
// const passport = require('passport');
// const bodyParser = require('body-parser')
// const morgan = require('morgan');
// const path = require('path');
//
// const app = express();
// const PORT = process.env.PORT || 8080;
//
// const routes = require('./routes/api');
// const users = require('./routes/api/users')
//
//
// mongoose.connect('mongodb://localhost/ab_db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//
// // Verify Mongoose connection
// mongoose.connection.on('connected', () => {
//     console.log("Mongoose is connected")
// });
//
// // Parses incoming JSON data
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//
// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require('./config/passport')(passport);
//
// // HTTP Request Logger
// app.use(morgan('tiny'));
// app.use('/api', routes);
// app.use('/api/users', users)
//
// app.listen(PORT, console.log(`Server is running on Port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();
const leaderboardRoute = require('./routes/leaderboardRouter');
const usernameRouter = require('./routes/userRouter');

// Express Setup
const app = express();
app.use(express.json());
app.use(cors());

// Port Setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on Port: ", PORT));

//connect to mongoDB URL with username/password for cluster
const MONGODB_URI = 'mongodb+srv://me:123@cluster0.le1kv.mongodb.net/users?retryWrites=true&w=majority';


// Mongoose/MongoDB Setup
mongoose.connect(MONGODB_URI || 'mongodb://localhost/ab_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if(err) throw err;
    console.log("MongoDB Connection Successful");
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

// Routing Setup
const users = require("./routes/userRouter");

//make REQUESTS available to POST...request.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", users);



