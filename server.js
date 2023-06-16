const express = require('express');
const UserRouter = require('./routes/user.route');
const ContactRouter = require('./routes/contact.route')


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Headers', "*")
    res.setHeader('Access-Control-Request-Methods', "*")
    res.setHeader('Access-Control-Allow-Methods', "*")
    next()
});



app.use('/', UserRouter);
app.use('/', ContactRouter)



app.listen(8000, () => console.log('Sever Run Successfuly')); 