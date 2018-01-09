import React, { Component } from 'react';
import '../../App.css';
import SongList from './SongList'
import Header from './Header'
import Footer from './Footer'
import coolCat from '../../Img/Cool_cat.jpg'
import ajax from '../../Utils/ajax.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: {}
    }
  }
  componentDidMount(){
    Promise.all([
      ajax.getPlaylist('knownSongs'),
      ajax.getPlaylist('songsToLearn')
    ]).then(playlists => {
      let playListStateUpdate = this.state.playlists
      playlists.forEach(playlist => {
        playListStateUpdate[playlist.playlistId] = playlist.songs
      })
      this.setState({
        playlists: playListStateUpdate
      })
    })
  }
  render() {
    return (
      <div>
        <Header />
        <SongList playlistDisplayName="Songs we want to learn"
                  playlistId="songsToLearn"
                  songData={this.state.playlists['songsToLearn']} />
        <SongList playlistDisplayName="Songs we know"
                  playlistId="knownSongs"
                  songData={this.state.playlists['songsToLearn']} />
        <Footer />
      </div>
    );
  }
}

export default Index;
