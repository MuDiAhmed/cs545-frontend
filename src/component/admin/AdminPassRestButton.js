import Button from 'react-bootstrap/Button';
import './../../Style.css';

function AdminPassResButton() {
  return (
    <>
      <Button  style={{backgroundColor: "#1872F0",textAlign:"right"}} variant="primary" size="m" active>
        Primary button
      </Button>{' '}
      {/* <Button variant="secondary" size="lg" active>
        Button
      </Button> */}
    </>
  );
}

export default AdminPassResButton;