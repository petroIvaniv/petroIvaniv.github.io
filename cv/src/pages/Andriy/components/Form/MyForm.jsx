import { Form, Button, Schema, Panel } from 'rsuite';

const MyForm = () => {

    const nameRule = Schema.Types.StringType().isRequired('This field is required.');
    const emailRule = Schema.Types.StringType().isEmail().isRequired('Please enter a valid email address.');
    const passwordRule = Schema.Types.StringType().isRequired('Please enter a valid password.');
    const verifyPasswordRule = Schema.Types.StringType().addRule((value,data)=>{
        return value!==data.password?false:true
    },'The two passwords do not match').isRequired('This field is required.');
    const ageRule = Schema.Types.NumberType().range(18,30,'Please enter a number from 18 to 30').isRequired('Please enter a valid age.');

    function UsernameField() {
        return (
            <Form.Group controlId="name">
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control name="name" rule={nameRule} />
            </Form.Group>
        );
    }

    function EmailField() {
        return (
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" rule={emailRule} />
            </Form.Group>
        );
    }
    function PasswordField() {
        return (
            <Form.Group controlId="password">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control name="password" rule={passwordRule} />
            </Form.Group>
        );
    }
    function VerifyPasswordField() {
        return (
            <Form.Group controlId="verifyPassword">
                <Form.ControlLabel>VerifyPassword</Form.ControlLabel>
                <Form.Control name="verifyPassword" rule={verifyPasswordRule} />
            </Form.Group>
        );
    }
    function AgeField() {
        return (
            <Form.Group controlId="age">
                <Form.ControlLabel>Age</Form.ControlLabel>
                <Form.Control name="age" rule={ageRule} />
            </Form.Group>
        );
    }

        return (
            <Form>
                <UsernameField />
                <EmailField />
                <AgeField/>
                <PasswordField/>
                <VerifyPasswordField/>
                <Button appearance="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );

};
export default MyForm
