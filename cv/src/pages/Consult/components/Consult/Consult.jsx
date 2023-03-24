import styles from './Consult.module.scss';
import { Form, Button, ButtonToolbar, Schema, Panel } from 'rsuite';


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
  name: StringType()
    .isRequired('This field is required.')
    .minLength(6, 'Minimum 6 characters required'),

  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),

  password: StringType()
    .isRequired('This field is required.')
    .minLength(6, 'Minimum 6 characters required')
    .containsUppercaseLetter('Must contain uppercase English characters'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);
      return value === data.password;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const Consult = () => {
  const formRef = React.useRef();
  // const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    age: '',
    password: '',
    verifyPassword: ''
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };

  return (
    <div className={styles.container}>
      <Form
        model={model}
        ref={formRef}
        onChange={setFormValue}
        // onCheck={setFormError}gitg
        formValue={formValue}
      >
        <TextField name="name" label="Username"/>
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

export default Consult;
