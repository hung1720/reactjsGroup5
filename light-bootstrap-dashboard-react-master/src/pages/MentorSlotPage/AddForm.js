import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" required></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          required
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          rows={3}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Phone"></Form.Control>
      </Form.Group>
      <Button variant="success">Add New Slot</Button>
    </Form>
  );
};

export default AddForm;
