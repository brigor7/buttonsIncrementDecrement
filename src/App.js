import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';
import CounterShared from './components/Counter/CounterShared';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h3>Indepedent State</h3>
        <Counter />
        <Counter />
        <Counter />

        <h3>
          Shared State
          <CounterShared />
          <CounterShared />
          <CounterShared />
        </h3>
      </Fragment>
    );
  }
}
