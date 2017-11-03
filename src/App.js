import React, { Component } from 'react';
import './App.css';
import data from './data.json';

const VideoThumbnail = (props) => (
//names are arbitrary for props. just know what they are when you reference them in your code
    <div className="thumbnail">
      <a href={props.url}>
      <img src={props.pic} />
      </a>
    </div>
)

const Title = (props) => (
  <h3 style={ {color:"#00adef"} } className="title">{props.name}</h3>
)


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="container-title">NYU WinC Tech Talk</h1>
        <div className="card-container">
          <div className="card">
            <VideoThumbnail url={data.staffPicks[0].link}
                            pic={data.staffPicks[0].thumbnail}/>
            <Title name="Working With Jigsaw"/>
          </div>

          <div className="card">
            <VideoThumbnail url={data.staffPicks[1].link}
                            pic={data.staffPicks[1].thumbnail}/>
            <Title name="High Tide"/>
          </div>

          <div className="card">
            <VideoThumbnail url={data.staffPicks[2].link}
                            pic={data.staffPicks[2].thumbnail}/>
            <Title name="RICHARD TWICE"/>
          </div>

          <div className="card">
            <VideoThumbnail url={data.staffPicks[3].link}
                            pic={data.staffPicks[3].thumbnail}/>
            <Title name="FATA MORGANA"/>
          </div>

          <div className="card">
            <VideoThumbnail url={data.staffPicks[4].link}
                            pic={data.staffPicks[4].thumbnail}/>
            <Title name="Every Nite Is Emo Nite"/>
          </div>

          <div className="card">
            <VideoThumbnail url={data.staffPicks[5].link}
                            pic={data.staffPicks[5].thumbnail}/>
            <Title name="Dahlia (2017)"/>
          </div>

          <div className="card">
            <VideoThumbnail url={data.staffPicks[6].link}
                            pic={data.staffPicks[6].thumbnail}/>
            <Title name="In a Heartbeat - Animated Short Film"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
