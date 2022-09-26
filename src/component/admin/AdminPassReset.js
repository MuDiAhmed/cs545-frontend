import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminPassReset() {
  return (
    <><h3>Reset Password Page</h3>
    <Form style={{textAlign:"left", marginTop:"100px"}}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email address Below:</Form.Label>
        <br />
        <Form.Text className="text-muted">
          We'll send you a password reset link to your email shortly.
        </Form.Text>
        <br />
        <br />
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default AdminPassReset;