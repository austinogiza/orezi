import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner radius={30} color={"#111211"} stroke={5} visible={true} />
      </div>
    );
  }
}