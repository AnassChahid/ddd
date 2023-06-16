const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const User = mongoose.model('user', UserSchema);


const URL = process.env.DB_URL;

exports.RegisterUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return User.findOne({ email: email });
        }).then((doc) => {
            if (doc) {
                mongoose.disconnect();
                reject('This User is Aleardy Exist!');
            } else {

                bcrypt.hash(password, 10).then((HPassword) => {
                    const user = new User({
                        username: username,
                        email: email,
                        password: HPassword
                    })

                    user.save().then((user) => {
                        mongoose.disconnect();
                        resolve(user);
                    }).catch((err) => {
                        mongoose.disconnect();
                        reject(err);
                    })
                }).catch((err) => {
                    mongoose.disconnect();
                    reject(err);
                })
            }
        })
    })
}

const privateKey = process.env.PRIVATE_KEY;


exports.LoginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            return User.findOne({ email: email });
        }).then((user) => {
            if (!user) {
                mongoose.disconnect();
                reject('Email or Password Incorrect!!')

            } else {
                bcrypt.compare(password, user.password).then((same) => {
                    if (same) {

                        const token = jwt.sign({ id: user.id, username: user.username }, privateKey,
                            { expiresIn: '1h' })
                        mongoose.disconnect();
                        resolve(token)
                    } else {
                        mongoose.disconnect();
                        reject('Email or Password Incorrect!!');
                    }
                }).catch((err) => {
                    mongoose.disconnect();
                    reject(err);
                });
            }
        });
    });
}
