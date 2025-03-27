const mongoose = require('mongoose');

const URI = `mongodb+srv://${process.env.USER}:${process.env.CON}@adso2903013.xhi2c.mongodb.net/${process.env.DB}`

mongoose.connect(URI)

module.exports = mongoose;