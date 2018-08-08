import React, { Component } from 'react';
import ChessBoard from 'react-chess';

const container = {
  display: 'flex',
  justifyContent: 'center',
};

const content = {
  width: '40%',
}

export default class Board extends Component {
  render() {
    return (
      <div style={container}>
        <div style={content}>
          <ChessBoard />
        </div>
      </div>
    );
  }
}
