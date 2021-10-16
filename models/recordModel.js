const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    test: String
},
{ 
    timestamps: true 
}
);

module.exports = mongoose.model('record', RecordSchema);

