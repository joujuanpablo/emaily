import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {formFields.map(field => {
        const { name, label } = field;
        return (
          <div key={name}>
            <label htmlFor=''>{label}</label>
            <div>{formValues[name]}</div>
          </div>
        );
      })}
      <button
        className='yellow white-text darken-3 btn-flat'
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className='green white-text btn-flat right'
        onClick={() => submitSurvey(formValues, history)} //wrap in arrow function so it's not a function call, but more like a function definition. Otherwise it will run on render.
      >
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));

// withRouter gives this component access to history and navigation.
// Recall that it is the parent, surveyNew, that is connected to ReactRouter,
// but it's children are not. But here we need to *programmatically* reroute
// when we submit the form so we need access to this functionality. Specifically we get access to
// the  history object in the props. We need to pass the functionality to the action creator
// submitSurvey which knows when the post request is actually finished.
