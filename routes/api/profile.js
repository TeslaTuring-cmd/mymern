const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Test route
// @access  Puclic
router.get('/', (req,res)=> res.send('Profile route'));

module.exports = router;