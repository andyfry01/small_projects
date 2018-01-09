const axios = require('axios')
module.exports = {
  getSong(params) {
    return axios.get( 'http://localhost:3001/songs/fetch', {
      params: {
        artist: params.artist,
        songName: params.songName
      }
    })
  },
  saveSong(songData) {
    return axios.post( 'http://localhost:3001/songs/save', {
      songData
    })
  },
  getPlaylist(playlistName){
    return axios.get( 'http://localhost:3001/songs/list', {
      params: {
        playlistName: playlistName
      }
    })
  }
}
