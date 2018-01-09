const mongoose = require('mongoose')

const PlaylistSchema = mongoose.Schema({
  playlistName: String
}, {timestamps: true});

module.exports = PlaylistSchema
