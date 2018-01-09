const mongoose = require('mongoose')
const PlaylistSchema = require('./Playlist.js')
const Playlist = mongoose.model('Playlist', PlaylistSchema, 'playlists');

const SongSchema = mongoose.Schema({
  url: String,
  defaultThumbnail: String,
  mediumThumbnail: String,
  largeThumbnail: String,
  videoTitle: String,
  artist: String,
  songName: String,
  playlistName: String
}, {timestamps: true});

SongSchema.pre('save', function(next) {
  let songPlaylistName = this.playlistName
  Playlist.findOne({playlistName: songPlaylistName}, (err, doc) => {
    if (err) {
      console.log('err');
      console.log(err);
    }
    if (doc === null) {
      let newPlayList = new Playlist({playlistName: songPlaylistName})
      newPlayList.save((err, success) => {
        if (err) {
          console.log(err);
          return
        } 
        next()
      })
    }
  })
  next()
});

module.exports = SongSchema
