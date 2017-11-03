import React from 'react';
import './App.css';

const VideoThumbnail = (props) => {
  return <div id={props.id} className="thumbnail">
    <a className="thumbnail-link" href={props.url} target="_blank">
      <img src={props.pic} />
      <h3 style={ {color:"#00adef"} } className="title">{props.name}</h3>
    </a>
  </div>
}

export default VideoThumbnail;
