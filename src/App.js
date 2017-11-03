import React, { Component } from 'react';
import './App.css';
import data from './data.json';

const VideoThumbnail = (props) => {
  return <div className="thumbnail">
    <a className="thumbnail-link" href={props.url} target="_blank">
      <img src={props.pic} alt={props.url} />
      <h3 style={ {fontWeight: 400} }>{props.name}</h3>
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
      <div className="status-container">
        <p className="status-watched">Have Viewed: <span>{this.state.watched.toString()}</span></p>
        <button className="status-btn" onClick={this.onCheckboxClick}>CLICK ME</button>
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
          <div className="card" key={vid.id}>
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
    <div className="card-container">
      {this.someRenderMappingFunc()}
    </div>
    );
  }
}

export default App;
