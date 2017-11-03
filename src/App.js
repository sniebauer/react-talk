import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import Status from './Toggle.jsx';
import VideoThumbnail from './VideoThumbnail.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.someRenderMappingFunc = this.someRenderMappingFunc.bind(this);
  }

someRenderMappingFunc () {
    return (
      data.staffPicks.map((vid) => {
        return (
          <div className="card">
            <VideoThumbnail
              id={vid.id}
              url={vid.link}
              pic={vid.thumbnail}
              name={vid.name}/>
            <Status id={vid.id} />
          </div>
        )
      })
    )
  }

  render() {
    return (
    <div className="card-container">
      {this.someRenderMappingFunc()}
    </div>
    );
  }
}

export default App;
