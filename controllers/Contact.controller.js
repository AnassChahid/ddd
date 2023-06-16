const ContactModel = require('../models/contact.model');
const nodemailer = require('nodemailer')



exports.getAddContactController = (req, res, next) => {

    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mohammedbendahrass@gmail.com',
            pass: 'odcauhynnrhktoni'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'mohammedbendahrass@gmail.com',
        subject: `Message From ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent : ' + info.response);
            res.send('success');
        }
    })

    ContactModel.PostNewContact(req.body.fullname, req.body.email, req.body.subject, req.body.message).then((msg) => {
        console.log('SuccessMessage', msg);
    }).catch((err) => {
        console.log('ErrorMessage', err);
    })


}