import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends React.Component {
  renderFields() {
    return (
      <div>
        {formFields.map((field, index) => (
          <Field {...field} key={index} type='text' component={SurveyField} /> // Survey field will receive all the props given to  Field (its parent)
        ))}
      </div>
    );
  }

  render() {
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {/* if we put parens, it would run onSurveySubmit on every render. Also remember, handleSubmit comes from redux form */}
          {this.renderFields()}
          <Link className='red btn-flat white-text' to='/surveys'>
            Cancel
          </Link>
          <button className='teal btn-flat right white-text' type='submit'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || ''); //first time it will be empty

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
}

export default reduxForm({
  form: 'surveyForm', // when redux-form puts our form into redux state, this is the key for this particular form.
  validate,
  destroyOnUnmount: false, // keep the values when the form component isn't showing
})(SurveyForm);

// redux form acts very similarly to connect.
