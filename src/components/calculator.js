import React, { useState } from 'react';
import Header from './Header';
import calculate from './logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null });
  function updateInput(e) {
    setState((state) => (calculate(state, e.target.id)));
  }

  return (
    <>
      <div className="container">
        <Header />

        <div className="Calc">
          <div className="leftSide"><h1>Lets Do Some Maths</h1></div>
          <div className="calculator">
            <div className="display">
              <span>{ state.next || state.total || '0' }</span>

            </div>
            <div className="operators">
              <button className="btn ac" type="button" id="AC" onClick={updateInput}>A/C</button>
              <button className="btn addminus" type="button" id="+/-" onClick={updateInput}>+/-</button>
              <button className="btn percentage" type="button" id="%" onClick={updateInput}>%</button>
              <button className="btn division operand" type="button" id="÷" onClick={updateInput}>÷</button>
              <button className="btn multiply operand" type="button" id="x" onClick={updateInput}>x</button>
              <button className="btn add operand" type="button" id="+" onClick={updateInput}>+</button>
              <button className="btn minus operand" type="button" id="-" onClick={updateInput}>-</button>
              <button className="btn one" type="button" id="1" onClick={updateInput}>1</button>
              <button className="btn two" type="button" id="2" onClick={updateInput}>2</button>
              <button className="btn three" type="button" id="3" onClick={updateInput}>3</button>
              <button className="btn four" type="button" id="4" onClick={updateInput}>4</button>
              <button className="btn five" type="button" id="5" onClick={updateInput}>5</button>
              <button className="btn six" type="button" id="6" onClick={updateInput}>6</button>
              <button className="btn seven" type="button" id="7" onClick={updateInput}>7</button>
              <button className="btn eight" type="button" id="8" onClick={updateInput}>8</button>
              <button className="btn nine" type="button" id="9" onClick={updateInput}>9</button>
              <button className="btn zerot" type="button" id="0" onClick={updateInput}>0</button>
              <button className="btn dot" type="button" id="." onClick={updateInput}>.</button>
              <button className="btn equal operand" type="button" id="=" onClick={updateInput}>=</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;
 