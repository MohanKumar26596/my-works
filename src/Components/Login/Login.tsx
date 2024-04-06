import React from 'react';
import './Login.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form as AntForm, message } from 'antd';

const { Item } = AntForm;
// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
    localStorage.setItem('formValues', JSON.stringify(values));
    message.success('Login Successful');
  };

  return (
    <div className='loginPage'>
      <h1>Login</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Item
              label="First Name"
              help={touched.firstName && errors.firstName}
              validateStatus={touched.firstName && errors.firstName ? 'error' : ''}
            >
              <Field as={Input} name="firstName" />
            </Item>
            <Item
              label="Last Name"
              help={touched.lastName && errors.lastName}
              validateStatus={touched.lastName && errors.lastName ? 'error' : ''}
            >
              <Field as={Input} name="lastName" />
            </Item>
            <Item
              label="Email"
              help={touched.email && errors.email}
              validateStatus={touched.email && errors.email ? 'error' : ''}
            >
              <Field as={Input} name="email" />
            </Item>
            <Item
              label="Password"
              help={touched.password && errors.password}
              validateStatus={touched.password && errors.password ? 'error' : ''}
            >
              <Field as={Input.Password} name="password" />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Item>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
