const express = require('express');
const router = express.Router();

//Get Users From the db
router.get('/user', (req, res) =>{
    console.log(req.params);
    res.send("<h1>Hello</h1>");
})

module.exports = router;