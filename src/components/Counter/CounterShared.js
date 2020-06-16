import React, { Component } from 'react';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';
import css from './counter.module.css';

export default class CounterShared extends Component {
  /**State of component are in APP.js */

  handleButtonClick = (clickType) => {
    this.props.onCount(clickType);
  };
  render() {
    const { countValue, countSteps } = this.props;
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        <Value value={countValue} />
        <IncrementButton onIncrement={this.handleButtonClick} />
        <Steps currentSteps={countSteps} />
      </div>
    );
  }
}
