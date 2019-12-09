import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  // All caps means that we don't want this to change programmatically
  {
    label: 'Survey Title',
    name: 'title',
  },
  {
    label: 'Subject Line',
    name: 'subject',
  },
  {
    label: 'Email Body',
    name: 'body',
  },
  {
    label: 'Recipient List',
    name: 'emails',
  },
];

class SurveyForm extends React.Component {
  renderFields() {
    return (
      <div>
        {FIELDS.map((field, index) => (
          <Field {...field} key={index} type='text' component={SurveyField} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values =>
            console.log('values', values),
          )}
        >
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
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });
  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
})(SurveyForm);
