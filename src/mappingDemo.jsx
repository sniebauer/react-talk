import React, { Component } from 'react';
import './App.css';
import data from './data.json';

const VideoThumbnail = (props) => (
    <div className="thumbnail">
      <a href={props.url}>
      <img src={props.pic} />
      <h3 style={ {color:"#00adef"} } className="title">{props.name}</h3>
      </a>
    </div>
)

class App extends Component {
  constructor(props) {
    super(props);

    this.someRenderMappingFunc = this.someRenderMappingFunc.bind(this);
  }

  someRenderMappingFunc () {
    return (
      data.staffPicks.map((vid) => {
        return (
          <VideoThumbnail url={vid.link} pic={vid.thumbnail} name={vid.name}/>
        )
      })
    )
  }

  render() {
    return (
    <div>
      {this.someRenderMappingFunc()}
    </div>
    );
  }
}

export default App;
