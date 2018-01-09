import React, { Component } from 'react';
import '../../App.css';
import ajax from '../../Utils/ajax.js'
import coolCat from '../../Img/Cool_cat.jpg'
import Iframe from 'react-iframe'

const renderIf = predicate => element  => predicate && element

class SongList extends Component {
  constructor(props){
    super(props)
    this.state = {
      addSongParams: {
        songName: '',
        artist: ''
      },
      paginationRange: {
        start: 1,
        end: 10
      },
      songSearchResults: [{name: 'cool cat', img: coolCat, dateAdded: Date.now()}],
      paginationInterval: 2
    }
    this.buildList = this.buildList.bind(this)
    this.getSong = this.getSong.bind(this)
    this.loadVideoIframe = this.loadVideoIframe.bind(this)
    this.saveSong = this.saveSong.bind(this)
    this.renderPaginationButtons = this.renderPaginationButtons.bind(this)
  }

  buildList(songData, pagination) {
    return songData.map((song, index) => {
      if (index >= this.state.paginationRange.start && index <= this.state.paginationRange.end) {
        let url = `http://www.youtube.com/embed/${song.url}`
        return (
          <li key={index}>
            <h2><a href={url} target="_blank">{song.songName} - {song.artist}</a></h2>
            <h3></h3>
            <img src={song.largeThumbnail} onClick={this.loadVideoIframe(index)}></img>
            <p>Video title: {song.videoTitle}</p>
            <p>Date added: {song.dateAdded || null}</p>
            <button onClick={() => this.saveSong(song)}>Save this song</button>
          </li>
        )
      }
    })
  }

  getSong() {
    return ajax.getSong({songName: this.state.addSongParams.songName, artist: this.state.addSongParams.artist})
    .then(res => this.setState({
      songSearchResults: res.data.songs
    }))
  }

  saveSong(songData) {
    songData = Object.assign({}, songData, {playlistName: this.props.playlistId})
    return ajax.saveSong(songData)
  }

  updateSongAddParams(input, target){
    let stateUpdate = this.state.addSongParams
    stateUpdate[target] = input
    this.setState({
      addSongParams: stateUpdate
    })
  }

  setPaginationRange(e, range) {
    e.preventDefault()
    let stateUpdate = this.state.paginationRange
    stateUpdate = range
    this.setState({
      paginationRange: stateUpdate
    })
  }

  renderPaginationButtons(){
    if (this.state.songSearchResults.length > this.state.paginationInterval) {
      let numResults = this.state.songSearchResults.length
      let numPages = numResults / 10
      let paginationData = []
      for (let i = 0; i < numPages; i++) {
        if (i === 0) {
          paginationData.push({start: 1, end: i + 9})
        } else {
          paginationData.push({start: i * 10, end: (i * 10) + 9 })
        }
      }
      return paginationData.map(data => {
        return (<button onClick={(e) => {this.setPaginationRange(e, data)}}>{data.start}...{data.end}</button>)
      })
    }
  }

  loadVideoIframe(videoIndex){
    // Keeping commented until bug is fixed
    // this.setState({
    //   displayVideo: true,
    //   selectedVideo: videoIndex
    // })
  }

  render() {
    return (
      <section className={this.props.playlistId}>
        <div className="addSongControls">
          <h2>Add a song to the {this.props.playlistDisplayName}</h2>
          <label for="artist">Arist</label>
          <input name="artist" type="text" onChange={(e) => this.updateSongAddParams(e.target.value, 'artist')}></input>
          <label for="songName">Song name:</label>
          <input name="songName" type="text" onChange={(e) => this.updateSongAddParams(e.target.value, 'songName')}></input>
          <button onClick={this.getSong}>Get this song</button>
        </div>

        <div className="list">
          <ul>
            {this.buildList(this.state.songSearchResults, {start: 0, end: 10})}
          </ul>
        </div>
        <div className="pagination">
          {this.renderPaginationButtons()}
        </div>
      </section>
    );
  }
}

export default SongList;
