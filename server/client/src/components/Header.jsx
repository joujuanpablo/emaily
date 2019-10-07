import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <a href='/' className='brand-logo'>
              Emaily
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='sass.html'>Sass</a>
              </li>
              <li>
                <a href='badges.html'>Components</a>
              </li>
              <li>
                <a href='collapsible.html'>Login with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
