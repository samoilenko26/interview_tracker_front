import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class ApplicationDetails extends Component {
  constructor(props) {
    super(props);
    console.log("ApplicationDetails") // do somthing
  }

  componentDidMount() {}

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
    </div>
  );
}

export default ApplicationDetails;
