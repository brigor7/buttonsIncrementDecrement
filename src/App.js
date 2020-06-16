import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter';
import CounterShared from './components/Counter/CounterShared';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clickType === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <Fragment>
        <h3>Indepedent State</h3>
        <Counter />
        <Counter />
        <Counter />

        <h3>
          Shared State
          <CounterShared
            onCount={this.handleCount}
            countValue={currentCounter}
            countSteps={steps}
          />
          <CounterShared
            onCount={this.handleCount}
            countValue={currentCounter}
            countSteps={steps}
          />
          <CounterShared
            onCount={this.handleCount}
            countValue={currentCounter}
            countSteps={steps}
          />
        </h3>
      </Fragment>
    );
  }
}
