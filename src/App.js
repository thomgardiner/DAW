import React, { Fragment, Component } from 'react';
import Piano from './component/piano';
import Chords from './component/chords';
import Knob from './component/knob';
import Sequencer from './component/sequencer';
import Tone from 'tone';

import { createStore } from "redux";

const reducer = (state, action) => {
  console.log("something");
  return state;
}

const initialState = {
  patternBank : [],
  songname : "Test Song",
  pattern1 : {name: "pattern1", events: [[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], [0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],]}
}

const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>This is {store.getState().songname} </h1>
        <Sequencer pattern={store.getState().pattern1} />
      </Fragment>
    );
  }
}


export default App;
