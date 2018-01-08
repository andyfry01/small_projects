import React, { Component } from 'react';
import '../../App.css';
import SongList from './SongList'
import coolCat from '../../Img/Cool_cat.jpg'

const testData = [
  {name: 'cool cat', img: coolCat, dateAdded: Date.now()},
  {name: 'cool kat', img: coolCat, dateAdded: Date.now()},
  {name: 'kool cat', img: coolCat, dateAdded: Date.now()}
]

class Index extends Component {
  render() {
    return (
      <div>
        <SongList songListName="test list"
                  songData={testData} />
      </div>
    );
  }
}

export default Index;
