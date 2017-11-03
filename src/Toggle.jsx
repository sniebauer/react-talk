import React, { Component } from 'react';
import './App.css';

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
        <button
          className="status-btn"
          onClick={this.onCheckboxClick}>
          { this.state.watched ? "Watched" : "Haven't Watched" }
        </button>
      </div>
    )
  }
}

export default Status;
