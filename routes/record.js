const express = require('express');
const router = express.Router();

router.post('/', async (req,res)=>{
    try {


    } catch(error) {
        console.log("Error getting filtered records ", error);
        res.status(500).json({code: 2, msg : "Something went wrong"})
    }
});


module.exports = router;