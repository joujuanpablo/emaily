// Packages
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Action creators
import * as actions from '../actions';

// Components
import Header from './Header';

const component1 = () => <h2>component1</h2>;
const component2 = () => <h2>component2</h2>;
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
            <Route path={'/'} exact component={component1} />
            <Route path={'/component2'} component={component2} />
            <Route path={'/component3'} component={component3} />
            <Route path={'/component4'} component={component4} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(App);
