const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MEUW5Y', { useNewUrlParser: true });

module.exports = mongoose;