import React, { Component } from 'react';

class About extends Component {
  render() {
    const {tab} = this.props;
    return (
      <div>
        About {tab} <br/>
        <a href="/">Home</a>
      </div>
    );
  }
}

export default About;