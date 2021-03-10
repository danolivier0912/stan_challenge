import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <div className="container">
          <h1><span>Demo</span> Streaming</h1>
          <nav className="header__navigation">
            <ul>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#" className="button--link">Start your free trial</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__secondary">
        <div className="container">
          <h2>Popular Movies and Series</h2>
        </div>
      </div>
    </header>
  )
}

export default Header;