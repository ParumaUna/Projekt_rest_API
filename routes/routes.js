const express = require('express')
const router = express.Router()
const Controller = require('../controllers/UserControllers')


router.get('/contact', Controller.getUser)

router.post('/contact', Controller.postUser)

router.put('/contact/:id', Controller.updateUser)

router.delete('/contact/:id', Controller.removeUser)


module.exports = router;