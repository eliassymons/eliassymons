import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Icons from "./Icons";

function Contact() {
  return (
    <div className="footer" id="/contact">
      <div className="contact">
        <Form className="contact-form">
          <h2 className="contact-title">Contact</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTextArea">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" placeholder="say hello..." />
          </Form.Group>
          <div className="submit-btn">
            <Button variant="light" type="buton" className="btn">
              Send
            </Button>
          </div>
        </Form>
      </div>{" "}
      <Icons />
    </div>
  );
}

export default Contact;
