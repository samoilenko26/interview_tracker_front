import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { Code } from 'react-content-loader'
import { DatePicker } from "antd";
import dayjs from 'dayjs';


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
  const [formData, setFormData] = useState(applicationData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send the updated data to the server
    console.log('Updated Data:', formData);
  };

  const handleTimelineValueChange = (date, index) => {
    const formattedDate = dayjs(date).format('MMMM D, YYYY, HH:mm:ss [UTC]');
  
    const updatedTimelines = [...formData.timelines];
    updatedTimelines[index].value = formattedDate;
  
    setFormData({
      ...formData,
      timelines: updatedTimelines,
    });
  };

  const handleTimelineNameChange = (event, index) => {
    const updatedTimelines = [...formData.timelines];
    updatedTimelines[index].name = event.target.value;
    setFormData({
      ...formData,
      timelines: updatedTimelines,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status Category</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.status_category}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Attractiveness Scale</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.attractiveness_scale}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job description link</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.job_description_link}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.location}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>On site/Remote</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.on_site_remote}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Timelines</Form.Label>
          {formData.timelines.map((timeline, index) => (

            <div key={index} className="mb-3">
              <div className="timeline-row">
                <div className="timeline-name">
                  <Form.Control
                    type="text"
                    placeholder="Timeline Name"
                    value={timeline.name}
                    onChange={(event) => handleTimelineNameChange(event, index)}
                    className="timeline-name"
                  />
                </div>
                <DatePicker
                  defaultValue={dayjs(timeline.value, 'MMMM D, YYYY, HH:mm:ss [UTC]')}
                  format="DD MMMM YYYY, dddd"
                  className="custom-datepicker"
                  style={{ width: '100%', height: '40px' }}
                  onChange={(date) => handleTimelineValueChange(date, index)}

                />
              </div>
            </div>
          ))}
        </Form.Group>


        {/* Add similar Form.Group elements for other application details */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}


export default ApplicationDetails;
