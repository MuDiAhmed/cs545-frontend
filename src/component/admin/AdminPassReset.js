import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminPassReset() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email address Below:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll send you a password reset link to your email shortly.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AdminPassReset;