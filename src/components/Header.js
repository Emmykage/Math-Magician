import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link className="logo" to="/">
          <h1>Maths Magiciacian</h1>

        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
        </ul>
      </nav>

    </header>

  );
}
export default Header;

