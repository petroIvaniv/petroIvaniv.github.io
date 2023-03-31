import React from 'react';
import styles from './SignUP.module.scss';
import { Form, Button, ButtonToolbar, Schema } from 'rsuite';


const TextField = (props) => {
  const {name, label, accepter, ...rest} = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
};
const {StringType} = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),

  password: StringType()
    .isRequired('This field is required.')
    .minLength(6, 'Minimum 6 characters required')
    .containsUppercaseLetter('Must contain uppercase English characters'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      return value === data.password;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const SignUP = ({handleSignUp}) => {
  const formRef = React.useRef();
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
    verifyPassword: ''
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    handleSignUp(formValue);
  };

  return (
    <div className={styles.container}>
      <Form
        model={model}
        ref={formRef}
        onChange={setFormValue}
        formValue={formValue}
      >
        <TextField name="email" label="Email"/>
        <TextField name="password" label="Password" type="password" autoComplete="off" />
        <TextField
          name="verifyPassword"
          label="Verify password"
          type="password"
          autoComplete="off"
        />
        <ButtonToolbar>
          <Button appearance="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </ButtonToolbar>
      </Form>
    </div>

  );
};

export default SignUP;
