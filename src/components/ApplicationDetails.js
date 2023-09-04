import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function ApplicationDetails() {
  const { applicationId } = useParams();
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    // Define the bearer token
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhPZThpM0FieWFxVGh4ZlBvR0FHdCJ9.eyImcm9sZXMiOlsidXNlciJdLCImZW1haWwiOiJnYTRsYS1zYWx0czBmQGljbG91ZC5jb20iLCJpc3MiOiJodHRwczovL2Rldi15ZHlhcTZkNzA2aG5wdGhvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NGI3MWUxODNkZDRmYTU0NTc5OGFiZjQiLCJhdWQiOlsiaHR0cHM6Ly9oZWxsby13b3JsZC5leGFtcGxlLmNvbSIsImh0dHBzOi8vZGV2LXlkeWFxNmQ3MDZobnB0aG8udXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5Mzc4MjExOCwiZXhwIjoxNjkzODY4NTE4LCJhenAiOiJiaFBTZmJKZ1NuQ1ZYcE9ob0lOMHJNNmxnbUNFRWQ2VSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSIsImd0eSI6InBhc3N3b3JkIn0.KikjKgXVaEhXhUHZDrViTNp2tWyNfmhNmU8VW9B_1lNkxEn5lkqoDveJgNjpzAtD8eDhU_jLoMW0JTB0NKp5uzXOjL15-06f36LQy28sPQbuAPA073nBtWPhJe_c4sy2NqhHPwfBvR6_iXm4jzIOqckUzp1nvy-FyEhD6_Vjmlx28EeMkEX5Po7I6qTel5dJtx7OxUmqlbfDe-9I2myBFMp7k-z0SMYKqobolPHT_zYo13QxUEHUgFt2739YnQihsml-eeQaqvkWeD-EGD_uCV_O7AgNt597XHMBG27aM5dI0nEAPGDzKOLVR5tI_QnlXdxf7lUbpbwxyuBQAFLnpw'
    // Make a GET request to your API with the Authorization header
    fetch(`http://127.0.0.1:8000/api/applications/${applicationId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // You may need to set the content type
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApplicationData(data.application);
      })
      .catch((error) => {
        console.error('Error fetching application details:', error);
      });
  }, [applicationId]);

  return (
    <div>
      <h1>Application Details</h1>
      {applicationData ? (
        <ApplicationDetailsContent applicationData={applicationData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function ApplicationDetailsContent({ applicationData }) {
  return (
    <div>
      <p>Application ID: {applicationData.id}</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Company name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Name"
            value={applicationData.company_name}
            readOnly
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {/* Render other application details similarly */}
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ApplicationDetails;
