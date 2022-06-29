// eslint-disable
// import './App.css';
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    const createDigits = () => {
      const digits = [];
      for (let i = 1; i < 10; i += 1) {
        digits.push(
          <button type="button" key={i}>{i}</button>,
        );
      }
      return digits;
    };

    return (
      <div className="Calc">
        <div className="caculator">
          <div className="display">
            <span>(0)</span>
            {' '}
            0
          </div>
          <div className="operators">
            <button type="button">/</button>
            <button type="button">*</button>
            <button type="button">+</button>
            <button type="button">-</button>
            <button type="button">DEl</button>

          </div>
          <div className="digits">
            { createDigits()}
            <button type="button">0</button>
            <button type="button">.</button>
            <button type="button">=</button>
          </div>

        </div>
      </div>
    );
  }
}
export default Calculator;
