const mongoose = require('mongoose');
const request = require('request');
const SongSchema = require('../Schemas/Song.js');
const PlaylistSchema = require('../Schemas/Playlist.js');
const youtubeStream = require('youtube-audio-stream');

const Song = mongoose.model('Song', SongSchema, 'savedSongs');
const Playlist = mongoose.model('Playlist', PlaylistSchema, 'playlists');

let YoutubeApiKey = process.env.YoutubeApiKey;

module.exports = {
  list(playlistName) {
    Playlist.findOne({ name: playlistName });
  },
  fetchYoutubeData(params) {
    return new Promise((resolve, reject) => {
      request(`https://content.googleapis.com/youtube/v3/search?q=${params.artist}%20${params.songName}=&maxResults=25&part=snippet&key=${YoutubeApiKey}`, (err, res) => {
        const response = JSON.parse(res.body);
        const videos = response.items;
        const data = videos.map((video) => {
          return {
            url: video.id.videoId,
            defaultThumbnail: video.snippet.thumbnails.default.url,
            mediumThumbnail: video.snippet.thumbnails.medium.url,
            largeThumbnail: video.snippet.thumbnails.high.url,
            videoTitle: video.snippet.title,
            artist: params.artist,
            songName: params.songName,
          }
        })
        resolve(data)
      })
    })
  },
  save: function(songData, playlistName, db) {
    return new Promise((resolve, reject) => {
      let newSong = new Song(songData)
      newSong.updatedAt = new Date()
      newSong.save((err, result) => {
        if (err) {
          console.log(err);
          reject(err)
        }
        resolve('success')
      })
    })
  }
}
