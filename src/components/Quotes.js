import React from 'react';
import Header from './Header';

class Quotes extends React.Component {
  render() {
    return (
      <main className="container">
        <Header />
        <div className='page-layout'>
        <div className='quote'>
          <p>
            Mathematics is not about numbers, equation, computations and
            algorithm. its about understanding.-- Willaim paul thursdton
          </p>
        </div>

        </div>
        

      </main>
    );
  }
}
export default Quotes;
