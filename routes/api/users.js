const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   POST api/users
// @desc    Register User
// @access  Puclic
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email','Please include the valid mail').isEmail(),
    check('password', 'Minimum length should be 6').isLength({ min: 6 })
],(req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    res.send('It works Macha');
});

module.exports = router;