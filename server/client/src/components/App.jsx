// Packages
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Action creators
import * as actions from '../actions';

// Components
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>surveys dashboard</h2>;
const component3 = () => <h2>component3</h2>;
const component4 = () => <h2>component4</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <div>
            <Route path={'/'} exact component={Landing} />
            <Route path={'/surveys'} component={Dashboard} />
            <Route path={'/component3'} component={component3} />
            <Route path={'/component4'} component={component4} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
