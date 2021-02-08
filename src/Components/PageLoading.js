import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner radius={50} color={"#fff"} stroke={5} visible={true} />
      </div>
    );
  }
}