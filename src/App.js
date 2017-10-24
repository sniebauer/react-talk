import React, { Component } from 'react';
import './App.css';
import data from './data.json';

const VideoThumbnail = (props) => {
  return <div className="thumbnail">
    <a href={props.url} target="_blank">
      <img src={props.pic} />
      <h3 style={ {color:"#00adef"} } className="title">{props.name}</h3>
    </a>
  </div>
}


class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  onCheckboxClick () {
    this.setState({watched: !this.state.watched})
  }

  render(){
    console.log('VID ID:: ', this.props.id)
    return (
      <div>
        <p>{this.state.watched.toString()}</p>
        <button onClick={this.onCheckboxClick}>CLICK ME</button>
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }
    this.someRenderMappingFunc = this.someRenderMappingFunc.bind(this);

  }

someRenderMappingFunc () {
    return (
      data.staffPicks.map((vid) => {
        return (
          <div key={vid.id}>
          <VideoThumbnail
                          url={vid.link}
                          pic={vid.thumbnail}
                          name={vid.name}/>
          <Status id={vid.id}/>
          </div>
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
