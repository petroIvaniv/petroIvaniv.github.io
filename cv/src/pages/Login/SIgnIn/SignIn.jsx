import React from 'react';
import styles from './SignIn.module.scss';
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
});

const SignIn = ({handleSignIn}) => {
  const formRef = React.useRef();
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
      console.log('Submit')
    if (!formRef.current.check()) {
      return;
    }

    handleSignIn(formValue);
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
          <ButtonToolbar>
            <Button appearance="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </ButtonToolbar>
        </Form>
      </div>

  );
};

export default SignIn;
