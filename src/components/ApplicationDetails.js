import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ApplicationDetails extends Component {
  constructor(props) {
    super(props);
    console.log("ApplicationDetails") // do somthing
  }

  componentDidMount() { }

  render() {
    return (
      <div>
        <h1>Application Details</h1>
        <ApplicationDetailsContent />
      </div>
    );
  }
}

function ApplicationDetailsContent() {
  const { applicationId } = useParams(); // Access route parameters using useParams

  return (
    <div>
      <p>Application ID: {applicationId}</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ApplicationDetails;
