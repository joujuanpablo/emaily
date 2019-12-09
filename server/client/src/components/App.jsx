// Packages
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Action creators
import * as actions from '../actions';

// Components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
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
          <div className='container'>
            <Route path={'/'} exact component={Landing} />
            <Route path={'/surveys'} exact component={Dashboard} />
            <Route path={'/surveys/new'} exact component={SurveyNew} />
            <Route path={'/component4'} component={component4} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
