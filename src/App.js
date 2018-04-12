import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { mat4 } from 'gl-matrix';

class App extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      mouseDown: false,
      startX: 0,
      rotation: mat4.fromRotation([], Math.PI, [0,1,0]),
    };
  }

  mouseDown = (event) => {
    this.setState({
      mouseDown: true,
      oldX: event.pageX
    });
  }

  mouseUp = (event) => {
    this.setState({
      mouseDown: false
    });
  }

  mouseMove = (event) => {
    if(this.state.mouseDown){
      const direction = event.pageX > this.state.oldX ? 1 : -1;

      this.setState({
        oldX: event.pageX,
        rotation: mat4.rotateY(
          this.state.rotation,
          this.state.rotation,
          (Math.PI/2) * direction * 0.1,
        )
      })
    }
  }

  render() {
    console.log('rerender');
    return (
      <div className="App">
      <h1>Event Listener Test</h1>
      <p>open up chrome developer tools and profile, or performance monitor the 'JS event listeners'</p>
      <div style={{
        width: '200px',
        height: '200px',
        background: 'blue',
        color: 'white',
        cursor: 'pointer',
        display: 'block',
      }}
               onMouseDown={this.mouseDown}
               onMouseUp={this.mouseUp}
               onMouseMove={this.mouseMove}>mouse over this thing, grab and drag it...</div>
      </div>
    );
  }
}

export default App;
