const express = require('express');
const router = express.Router();
const User = require('../schema/user');

//Get Users From the db
router.get('/user', (req, res) =>{
    User.create({
        name: req.body.name,

    })
    
})

module.exports = router;