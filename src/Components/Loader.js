import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import styled from 'styled-components';

export default class Example extends Component {
  render() {
  return (
      <Spin>
        <Spinner radius={30} color={"#111211"} stroke={3} visible={true} />
      </Spin>
    );
  }
}

const Spin = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`