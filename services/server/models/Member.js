const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
  name: String,
  email: {
    unique: true,
    type: String
})

const Member = mongoose.model('User', memberSchema)

module.exports = Member
