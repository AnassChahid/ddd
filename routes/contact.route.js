const router = require('express').Router()
const ContactController = require('../controllers/Contact.controller');




// router.get('/contact', ContactController.getContactPage);
router.post('/contact', ContactController.getAddContactController);



module.exports = router;