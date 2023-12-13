import { useState } from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { addContact } from '../../redux/operations';
import { selectIsLoading, selectVisibleContacts } from '../../redux/selectors';
import { Loader } from 'components/Loader';

import {
  FormContainer,
  Label,
  Input,
  ErrorMessageContainer,
  SubmitButton,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name should be at least 2 characters long')
    .max(30, 'Name should not exceed 30 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Phone number should contain only digits')
    .min(7, 'Phone number should have at least 7 digits')
    .max(15, 'Phone number should not exceed 15 digits')
    .required('Phone number is required'),
});
const defaultValues = {
  name: '',
  number: '',
};
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const [determineAddBtn, setDetermineAddBtn] = useState(false);

  const handleSubmitForm = (values, action) => {
    setDetermineAddBtn(true);
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (isInContacts) {
      return Notiflix.Notify.failure(`${values.name} is already in contacts!`);
    }
    dispatch(addContact(values)).then(() => {
      setDetermineAddBtn(false);
    });
    action.resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={defaultValues}
        onSubmit={handleSubmitForm}
        validationSchema={schema}
      >
        <Form>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMessageContainer} />
          </div>
          <div>
            <Label htmlFor="number">Phone Number</Label>
            <Input
              type="text"
              name="number"
              id="number"
              placeholder="Phone Number"
            />
            <ErrorMessage name="number" component={ErrorMessageContainer} />
          </div>
          <SubmitButton type="submit" disabled={isLoading && determineAddBtn}>
            {isLoading && determineAddBtn && <Loader />}
            Add Contact
          </SubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
