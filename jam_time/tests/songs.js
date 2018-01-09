const mongoose = require('mongoose')
const mocha = require('mocha')

var songs = require('../api/Route_Handlers/songs.js')
var SongSchema = require('../api/Schemas/Song.js')
var PlaylistSchema = require('../api/Schemas/Playlist.js')

var Song = mongoose.model('Song', SongSchema, 'savedSongs');
var Playlist = mongoose.model('Playlist', PlaylistSchema, 'playlists');

var testSong = { url: "FGT1AcMRV9w",
  defaultThumbnail: "https://i.ytimg.com/vi/FGT1AcMRV9w/default.jpg",
  artist : "meatloaf",
  defaultThumbnail : "https://i.ytimg.com/vi/FGT1AcMRV9w/default.jpg",
  largeThumbnail : "https://i.ytimg.com/vi/FGT1AcMRV9w/hqdefault.jpg",
  mediumThumbnail : "https://i.ytimg.com/vi/FGT1AcMRV9w/mqdefault.jpg",
  playlistName :"songsToLearn",
  songName :"two out of three",
  url :"FGT1AcMRV9w",
  videoTitle :"Meat Loaf-Two Out Of Three Ain't Bad"
}

describe('Songs', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost:27017/jam_time_test');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {

      done()
    });
  })

  after((done) => {
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('#save()', function() {
    it('should save successfully', (done) => {
      let song = new Song(testSong);
      song.save(function(err, result) {
        if (err) {
          done(err);
        } else {
          if (result.videoTitle !== testSong.videoTitle) {
            done('video title of db item doesn\'t match input')
          }
          done()
        }
      })
    })

    it('should save a new playlist if the song\'s playlist isn\'t in the db', function(done) {
      let song = new Song(testSong);
      song.save(function(err, result) {
        if (err) {
          done(err);
        } else {
          let songPlaylist = Playlist.findOne({ 'playlistName': result.playlistName }, (err, playlist) => {
            if (err) {
              done(err)
            } else {
              if (playlist.playlistName === result.playlistName) {
                done()
              } else {
                console.log('err');
                done('err: playlistName does not match')
              }
            }
          })
        }
      });
    });

    it('should not save a new playlist if the song\s playlist already exists in the db', (done) => {
      let song = new Song(testSong);
      song.save(function(err, result) {
        if (err) {
          done(err);
        } else {
          song.save(function(err, result) {
            Playlist.find({ 'playlistName': result.playlistName }, (err, playlists) => {
              if (err) {
                done(err)
              } else {
                if (playlists.length > 1) {
                  done('err: multiple playlists with the same name')
                } else {
                  done()
                }
              }
            })
          })
        }
      });
    })

    it('should add a createdAt date on creation', (done) => {
      let song = new Song(testSong);
      song.save(function(err, result) {
        if (err) {
          done(err)
        }
        if (result.createdAt !== undefined) {
          done()
        }
      })
    })
  });
});
