const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
}, { timestamps: true })

module.exports = db => db.model('Task', TaskSchema)