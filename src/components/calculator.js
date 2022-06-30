import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,

    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    this.setState((state) => (calculate(state, e.target.id)));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="Calc">
        <div className="caculator">
          <div className="display">
            <span>{ next || total || '0' }</span>

          </div>
          <div className="operators">
            <button className="btn ac" type="button" id="AC" onClick={this.updateInput}>A/C</button>
            <button className="btn addminus" type="button" id="+/-" onClick={this.updateInput}>+/-</button>
            <button className="btn percentage" type="button" id="%" onClick={this.updateInput}>%</button>
            <button className="btn division operand" type="button" id="÷" onClick={this.updateInput}>÷</button>
            <button className="btn multiply operand" type="button" id="x" onClick={this.updateInput}>x</button>
            <button className="btn add operand" type="button" id="+" onClick={this.updateInput}>+</button>
            <button className="btn minus operand" type="button" id="-" onClick={this.updateInput}>-</button>
            <button className="btn one" type="button" id="1" onClick={this.updateInput}>1</button>
            <button className="btn two" type="button" id="2" onClick={this.updateInput}>2</button>
            <button className="btn three" type="button" id="3" onClick={this.updateInput}>3</button>
            <button className="btn four" type="button" id="4" onClick={this.updateInput}>4</button>
            <button className="btn five" type="button" id="5" onClick={this.updateInput}>5</button>
            <button className="btn six" type="button" id="6" onClick={this.updateInput}>6</button>
            <button className="btn seven" type="button" id="7" onClick={this.updateInput}>7</button>
            <button className="btn eight" type="button" id="8" onClick={this.updateInput}>8</button>
            <button className="btn nine" type="button" id="9" onClick={this.updateInput}>9</button>
            <button className="btn zerot" type="button" id="0" onClick={this.updateInput}>0</button>
            <button className="btn dot" type="button" id="." onClick={this.updateInput}>.</button>
            <button className="btn equal operand" type="button" id="=" onClick={this.updateInput}>=</button>
          </div>

        </div>
      </div>
    );
  }
}
export default Calculator;
