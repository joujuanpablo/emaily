import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends React.Component {
  state = {
    showFormReview: false,
  };

  renderContent() {
    return this.state.showFormReview ? (
      <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    ) : (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        Survey New
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
// we need reduxForm here for clearing the form if we hit cancel or navigate out of the happy path.
// The default is to clear the  values on unmount.
// Since the happy path is all technically inside this component,
// any child unmounting doesn't apply.  But we do
// tell surveyForm (the child) to persist the form values on unmount
