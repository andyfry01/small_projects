const mongoose = require('mongoose')
const request = require('request')
const util = require('util')

const songSchema = mongoose.Schema({
  url: String,
  defaultThumbnail: String,
  mediumThumbnail: String,
  largeThumbnail: String,
  videoTitle: String,
  artist: String,
  songName: String
}, {timestamps: true});

const Song = mongoose.model('Song', songSchema, 'savedSongs');

let YoutubeApiKey = process.env.YoutubeApiKey

module.exports = {
  list: function() {},
  fetchYoutubeData: function(params) {
    return new Promise((resolve, reject) => {
      request(`https://content.googleapis.com/youtube/v3/search?q=${params.artist}%20${params.songName}=&maxResults=25&part=snippet&key=${YoutubeApiKey}`, (err, res, body) => {
        let response = JSON.parse(res.body)
        let videos = response.items
        let data = videos.map(video => {
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
  save: function(songData, db) {
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
