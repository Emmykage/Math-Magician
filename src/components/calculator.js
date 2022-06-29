import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="Calc">
        <div className="caculator">
          <div className="display">
            <span>(0)</span>
          </div>
          <div className="operators">
            <button className="btn ac" type="button">A/C</button>
            <button className="btn addminus" type="button">+/-</button>
            <button className="btn percentage" type="button">%</button>
            <button className="btn division operand" type="button">÷</button>
            <button className="btn multiply operand" type="button">*</button>
            <button className="btn add operand" type="button">+</button>
            <button className="btn minus operand" type="button">-</button>
            <button className="btn one" type="button">1</button>
            <button className="btn two" type="button">2</button>
            <button className="btn three" type="button">3</button>
            <button className="btn four" type="button">4</button>
            <button className="btn five" type="button">5</button>
            <button className="btn six" type="button">6</button>
            <button className="btn seven" type="button">7</button>
            <button className="btn eight" type="button">8</button>
            <button className="btn nine" type="button">9</button>
            <button className="btn zerot" type="button">0</button>
            <button className="btn dot" type="button">.</button>
            <button className="btn equal operand" type="button">=</button>
          </div>

        </div>
      </div>
    );
  }
}
export default Calculator;
