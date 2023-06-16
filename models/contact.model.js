const mongoose = require('mongoose');




const ContactSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const contacts = mongoose.model('contact', ContactSchema);
const URL = process.env.DB_URL;


exports.PostNewContact = (fullname, email, subject, message) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
            const Contact = new contacts({
                fullname: fullname,
                email: email,
                subject: subject,
                message: message,
            });

            return Contact.save()
        }).then(() => {
            mongoose.disconnect();
            resolve('sent Successfuly!');
        }).catch((err) => {
            mongoose.disconnect();
            reject(err);
        })
    })
}