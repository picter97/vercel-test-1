const mongoose = require('mongoose')


const leagueSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  attackType: {
    type: String
  },
  energy:{
    type: String,
    required: true,
    enum: ['mana', 'no mana', 'energy']
  }
})

module.exports = mongoose.model ('League',leagueSchema)