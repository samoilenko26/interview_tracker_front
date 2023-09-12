import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { Code } from 'react-content-loader'

function ApplicationDetails() {
  const { applicationId } = useParams();
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    // Define the bearer token
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhPZThpM0FieWFxVGh4ZlBvR0FHdCJ9.eyImcm9sZXMiOlsidXNlciJdLCImZW1haWwiOiJnYTRsYS1zYWx0czBmQGljbG91ZC5jb20iLCJpc3MiOiJodHRwczovL2Rldi15ZHlhcTZkNzA2aG5wdGhvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NGI3MWUxODNkZDRmYTU0NTc5OGFiZjQiLCJhdWQiOlsiaHR0cHM6Ly9oZWxsby13b3JsZC5leGFtcGxlLmNvbSIsImh0dHBzOi8vZGV2LXlkeWFxNmQ3MDZobnB0aG8udXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5NDU1NTQwMywiZXhwIjoxNjk0NjQxODAzLCJhenAiOiJiaFBTZmJKZ1NuQ1ZYcE9ob0lOMHJNNmxnbUNFRWQ2VSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSIsImd0eSI6InBhc3N3b3JkIn0.ERSG8-MbgKj6U909S7O_yiMzTezwzU-Ev1HzmnL0_G0m-rqyKSooJsOiJAZrXv6kg3MY65IThwytf6S9XbH3_WGNm6QUmSJSXPhUEx3OOtUVYQL6mBJjuvUT2e8aHBT8mtcXy_Q_TScv9NLcCJW3ctdzN6WUz2gfj7ffPxOQOulRQaBGstcXCuuC5W19wnM0jwS7viWj3-0E59nvjjpANLGREpsJ4oL3ShQvmBx3oBUM-LMrFRFXCzv1RvUKWAh-5R-Hf1-mrEpogbsjcxorZwioenf93V8fSsG148zXZVuL_FCpMRGht8mMoK12d_gT46Yc6y7wv6hzZa0KbKegUQ'
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
      {applicationData ? (
        <ApplicationDetailsContent applicationData={applicationData} />
      ) : (
        <div>
          <Code />
          <Code />
          <Code />
        </div>
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
