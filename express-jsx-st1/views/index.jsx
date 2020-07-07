import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultLayout from './layouts/default';



class Test extends Component {
  render() {
    return (
      <a href="/users">Users</a>
    )
  }
}

class Home extends Component {

  render() {
    const { props } = this;
    const { data } = props;
    const { clientList } = data;
    return (
      <DefaultLayout
        stylesheet="pages/home.css"
      >
          <h1
            onClick={this.handleClick}
          >Hello, {props.name}</h1>
          <Test />
          <div>
            {clientList && clientList.map(
              info => <div>{info.userIdCode}</div>
            )}
          </div>
      </DefaultLayout>
    )
  }
}


module.exports = Home;

