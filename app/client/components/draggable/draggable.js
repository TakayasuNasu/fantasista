import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';

export default class DraggableComponent extends Component {
  handleStart(event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  handleDrag(event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  handleStop(event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  render() {
    return (
      <Draggable
          axis="x"
          handle=".handle"
          start={{x: 0, y: 0}}
          grid={[25, 25]}
          zIndex={100}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
              <div className="handle">Drag from here</div>
              <div>This readme is really dragging on...</div>
          </div>
      </Draggable>
    );
  }

}
