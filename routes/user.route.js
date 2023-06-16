const router = require('express').Router();
const UserModel = require('../models/user.model')


router.post('/register', (req, res) => {
    UserModel.RegisterUser(req.body.username, req.body.email, req.body.password).then((user) => {
        res.status(200).json(user)
    }).catch((err) => {
        res.status(400).json({ error: err });
    })
});


router.post('/login', (req, res) => {
    UserModel.LoginUser(req.body.email, req.body.password).then((token) => {
        res.status(200).json({ token: token });
    }).catch((error) => {
        res.status(400).json({ err: error });
    })
});



module.exports = router;