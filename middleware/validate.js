const moment = require('moment');

module.exports = (req,res,next)=>{
    try {
        next();
    } catch (error) {
        res.status(500).json({code: 2, msg : "Something went wrong"})
    }
}