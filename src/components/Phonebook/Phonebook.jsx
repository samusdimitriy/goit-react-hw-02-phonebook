import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledLabel,
  StyledInput,
  ErrorText,
  StyledButton,
  Title,
} from './Phonebook.styled';

class Phonebook extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required'),
          number: Yup.string().required('Phone number is required'),
        })}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Title>Phonebook</Title>
            <div>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <Field as={StyledInput} type="text" name="name" />
              <ErrorMessage
                name="name"
                component={ErrorText}
                className="error"
              />
            </div>
            <div>
              <StyledLabel htmlFor="number">Phone</StyledLabel>
              <Field as={StyledInput} type="text" name="number" />
              <ErrorMessage
                name="number"
                component={ErrorText}
                className="error"
              />
            </div>
            <StyledButton type="submit">Add contact</StyledButton>
          </form>
        )}
      </Formik>
    );
  }
}

export default Phonebook;
