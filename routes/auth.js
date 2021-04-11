const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../constants");
const User = mongoose.model("User");
const router = express.Router();
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)


router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    // Verifying if one of the fields is Empty
    if (!name || !password || !email) {
        return res.json({ error: "Please submit all required field" });
    }
    // Else we search the user with the credentials submitted
    User.findOne({ Email: email })
        .then((savedUser) => {
            // Verify if the user exist in the DB
            if (savedUser) {
                return res.json({ error: "This Email Is Already Used !" });
            }
            // We Hash the pwd before save into DB, more the number is high more it's more secure
            bcrypt.hash(password, 12).then((hashedPwd) => {
                const user = new User({
                    Name: name,
                    Email: email,
                    Password: hashedPwd,
                });
                // We save our new user to DB
                user.save()
                    .then((user) => {
                        // after saving the user into DB we send a confirmation email
                        res.json({ message: "Saved successfully " });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        })
        .catch((err) => {
            console.log(err);
        });
});


// Route to handle SignIn requests
router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    // Verification for an empty field
    if (!email || !password) {
        return res.json({ error: "Please provide Email or Password" });
    }
    // Check if email exist in our DB
    User.findOne({ Email: email })
        .then((savedUser) => {
            if (!savedUser) {
                return res.json({ error: "Invalid Email or Password" });
            }
            bcrypt.compare(password, savedUser.Password).then((doMatch) => {
                if (doMatch) {
                    // we will generate the token based on the ID of user
                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                    // retrieve the user info details and send it to the front
                    const { _id, Name, Email } = savedUser;
                    res.json({ token, user: { _id, Name, Email } });
                } else {
                    return res.json({
                        error: "Invalid Email or Password",
                    });
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// Google login handle
router.post("/googleLogin", async (req, res) => {

    const { token } = req.body;
    var ticket = await client.verifyIdToken({ idToken: token, audience: process.env.CLIENT_ID })
    console.log(req.token)
    const { name, email } = ticket.getPayload();
    const jwtToken = jwt.sign({ _id: "savedUser._id " }, JWT_SECRET);
    res.json({ jwtToken, user: { name, email } });

});

module.exports = router;
