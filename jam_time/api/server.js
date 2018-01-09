const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const flash = require('express-flash');
const path = require('path');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');

const app = express();

const songs = require('./Route_Handlers/songs.js')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/jam_time');
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

/**
 * Express configuration.
 */
app.set('host', '0.0.0.0');
app.set('port', 3001);
app.use(expressStatusMonitor());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(flash());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require('dotenv').config()

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
  console.log(req);
  res.json({
    'hi': 'andy'
  })
});

app.get('/songs/fetch', (req, res) => {
  songs.fetchYoutubeData({artist: req.query.artist, songName: req.query.songName})
  .then((songData) => {
    res.json({
      songs: songData
    })
  })
})

app.get('/songs/list', (req, res) => {
  songs.list(req.params.playlistName)
  .then((playlistData) => {
    res.json({
      playlist: playlistData.playlist,
      playlistName: playlistData.playlistName
    })
  })
})

app.post('/songs/save', (req, res) => {
  songs.save(req.body.songData, db)
  .then((response) => {
    response === 'success' ? res.status(201) : res.status(500)
  })
});

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
