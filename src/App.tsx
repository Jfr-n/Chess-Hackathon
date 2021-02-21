
import './App.css';
import React, { Component } from 'react';
import Chess from './chess_components/Chess';
import Black_Bish from './Chess_bdt60.png';
import White_Bish from './Chess_blt60.png';
export default class App extends React.Component<{},any> {
  constructor(props:any) {
      super(props);

      this.state = {
          diffX: 0,
          diffY: 0,
          dragging: false,
          styles: {}
      }

      this._dragStart = this._dragStart.bind(this);
      this._dragging = this._dragging.bind(this);
      this._dragEnd = this._dragEnd.bind(this);
  }

  _dragStart(e: any) {
      this.setState({
          diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
          diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
          dragging: true
      });
  }

  _dragging(e: any) {

      if(this.state.dragging) {
          var left = e.screenX - this.state.diffX;
          var top = e.screenY - this.state.diffY;
  
          this.setState({
              styles: {
                  left: left,
                  top: top
              }
          });
      }
  }    

  _dragEnd() {
      this.setState({
          dragging: false
      });
  }

  render() {
      
      return (
          <div>
              <img src= {Black_Bish} id = 'pieces' style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}></img>
              <img src= {White_Bish} id = 'pieces' style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}></img>
              <Chess/>

          </div>
      );
  }
}

