const mongoose = require('mongoose')
const mocha = require('mocha')

const songs = require('../api/Routes/songs.js')
const SongSchema = require('../api/Schemas/Song.js')
const PlaylistSchema = require('../api/Schemas/Playlist.js')

const Song = mongoose.model('Song', SongSchema, 'savedSongs');
const Playlist = mongoose.model('Playlist', PlaylistSchema, 'playlists');

const testPlaylist = { playlistName: "testList" }

describe('Playlists', () => {
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
      let playlist = new Playlist(testPlaylist);
      playlist.save(function(err, result) {
        if (err) {
          done(err);
        } else {
          if (result.playlistName !== testPlaylist.playlistName) {
            err('playlist names do not match')
          }
          done()
        }
      })
    })

    it('should add a createdAt date on creation', (done) => {
      let song = new Song(testPlaylist);
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
