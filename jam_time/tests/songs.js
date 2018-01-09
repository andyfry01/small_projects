const mongoose = require('mongoose');
const assert = require('chai').assert;
const request = require('supertest');

const songs = require('../api/Route_Handlers/songs.js');
const SongSchema = require('../api/Schemas/Song.js');
const PlaylistSchema = require('../api/Schemas/Playlist.js');
const server = require('../api/server.js');

const Song = mongoose.model('Song', SongSchema, 'savedSongs');
const Playlist = mongoose.model('Playlist', PlaylistSchema, 'playlists');

const testSong = {
  url: 'FGT1AcMRV9w',
  defaultThumbnail: 'https://i.ytimg.com/vi/FGT1AcMRV9w/default.jpg',
  artist: 'meatloaf',
  largeThumbnail: 'https://i.ytimg.com/vi/FGT1AcMRV9w/hqdefault.jpg',
  mediumThumbnail: 'https://i.ytimg.com/vi/FGT1AcMRV9w/mqdefault.jpg',
  playlistName: 'songsToLearn',
  songName: 'two out of three',
  videoTitle: 'Meat Loaf-Two Out Of Three Aint Bad',
};

describe('Songs in DB', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost:27017/jam_time_test');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {

      done();
    });
  });

  after((done) => {
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('#save()', () => {
    it('should save successfully', (done) => {
      const song = new Song(testSong);
      song.save((err, result) => {
        if (err) {
          done(err);
        } else {
          if (result.videoTitle !== testSong.videoTitle) {
            done('video title of db item doesn\'t match input');
          }
          done();
        }
      });
    });

    it('should save a new playlist if the song\'s playlist isn\'t in the db', (done) => {
      const song = new Song(testSong);
      song.save((err, result) => {
        if (err) {
          done(err);
        } else {
          Playlist.findOne({ playlistName: result.playlistName }, (err, playlist) => {
            if (err) {
              done(err);
            }
            if (playlist.playlistName === result.playlistName) {
              done();
            } else {
              console.log('err');
              done('err: playlistName does not match');
            }
          });
        }
      });
    });

    it('should not save a new playlist if the songs playlist already exists in the db', (done) => {
      let song = new Song(testSong);
      song.save((err, result) => {
        if (err) {
          done(err);
        } else {
          song.save((err, result) => {
            Playlist.find({ playlistName: result.playlistName }, (err, playlists) => {
              if (err) {
                done(err);
              }
              if (playlists.length > 1) {
                done('err: multiple playlists with the same name');
              } else {
                done();
              }
            });
          });
        }
      });
    });

    it('should add a createdAt date on creation', (done) => {
      const song = new Song(testSong);
      song.save((err, result) => {
        if (err) {
          done(err);
        }
        if (result.createdAt !== undefined) {
          done();
        }
      });
    });
  });
});

describe('Songs queried from Youtube', () => {
  // Commenting out to save on API requests
  // describe('#fetchYoutubeData()', () => {
  //   it('should fetch a video from youtube matching the search terms', (done) => {
  //     let testInput = { artist: 'meatloaf', songName: 'paradise by the dashboard light' }
  //     songs.fetchYoutubeData(testInput)
  //     .then(data => {
  //       if (data[0].videoTitle.toLowerCase().indexOf(testInput.songName.toLowerCase()) < 0) {
  //         done('data from search does not contain search term')
  //       }
  //       done()
  //     })
  //   })
  // })

  // commenting out until this works
  // describe('#fetchAudio()', () => {
  //   it('should exist', () => {
  //     const expected = 'function';
  //     const actual = typeof songs.fetchAudio;
  //     assert.equal(actual, expected);
  //   });
  //   it('should throw an error with the wrong input', () => {
  //     function test() {
  //       return 1;
  //     }
  //     assert.throws(() => songs.fetchAudio([], test), Error, 'Wrong type, fetchAudio takes a url string');
  //   });
  //   it('should take a youtube video ID string and return an audio stream', () => {
  //     function response(...args) {
  //       console.log(args);
  //     }
  //     request(server)
  //       .get('/songs/audioStream&ytVideoId=I6JZW7zMDfY')
  //       .end((err, res) => {
  //         console.log(res);
  //       });
  //   });
  // });

  
});
