import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return [
          <li key='2'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key='1'>
            <a href='/api/logout'>Logout</a>
          </li>,
        ];
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <Link to={auth ? '/surveys' : '/'} className='brand-logo'>
              Emaily
            </Link>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.auth,
//   };
// };

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, null)(Header);
