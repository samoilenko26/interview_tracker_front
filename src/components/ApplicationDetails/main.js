import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { Code } from 'react-content-loader'
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";

import axios from 'axios';
import debounce from 'lodash.debounce';


function ApplicationDetails() {
  const { applicationId } = useParams();
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhPZThpM0FieWFxVGh4ZlBvR0FHdCJ9.eyImcm9sZXMiOlsidXNlciJdLCImZW1haWwiOiJnYTRsYS1zYWx0czBmQGljbG91ZC5jb20iLCJpc3MiOiJodHRwczovL2Rldi15ZHlhcTZkNzA2aG5wdGhvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NGI3MWUxODNkZDRmYTU0NTc5OGFiZjQiLCJhdWQiOlsiaHR0cHM6Ly9oZWxsby13b3JsZC5leGFtcGxlLmNvbSIsImh0dHBzOi8vZGV2LXlkeWFxNmQ3MDZobnB0aG8udXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5NDY0NTc2NCwiZXhwIjoxNjk0NzMyMTY0LCJhenAiOiJiaFBTZmJKZ1NuQ1ZYcE9ob0lOMHJNNmxnbUNFRWQ2VSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSIsImd0eSI6InBhc3N3b3JkIn0.H4iw3AmMtTaTqo06GbWS-0OKXbzM-kFu9qX4xyGgnb0x0YRBTw8J8DlmJL6ZqoKVmnRsuN-K-QOZyq0A3oX34CrTZCztrNK75C7AIvrh-WDZmA49LH3IlnseaB7tdjoW6MUnyWwE4bZio6v3Mrmo56Pq9QWtW89NLuNfmB8rLFmLIQ9iM3zhKN27dmcFqpkj4dPTaP7BeyG7ae2CsLrypug5JZKT0Y81x3qG24SKthMZVYp9qiAddoYe4YlHTjNDZaNgVQow4gddCC4dRX0CPia2rogHGBdelKf2_UJZGxuu8g5Lgz2hDVwYUEinoDHJ-2qVqP03FXXTznH-K3g8HA'
    fetch(`http://127.0.0.1:8000/api/applications/${applicationId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
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
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState(applicationData.company_name || '');
  const [suggestionSelected, setSuggestionSelected] = useState(false);

  const fetchSuggestions = async (query) => {
    try {
      if (query.trim() !== '') {
        const response = await axios.get(
          `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
        );
        const data = response.data;
        setSuggestions(data);
      } else {
        // Clear suggestions if query is empty
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionClick = (selectedName, selectedDomain) => {
    // Update the applicationData state with the selected domain
    setFormData({
      ...formData,
      official_website: selectedDomain,
    });

    // Update the input value to the selected suggestion
    setInputValue(selectedName);

    // Hide suggestions
    setSuggestionSelected(true);
  };

  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setInputValue(value);
    debouncedFetchSuggestions(value);
    setSuggestionSelected(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Updated Data:', formData);
  };

  const handleTimelineValueChange = (date, index) => {
    const formattedDate = dayjs(date).format('MMMM D, YYYY');

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

  const handleDeleteTimeline = (index) => {
    const updatedTimelines = [...formData.timelines];
    updatedTimelines.splice(index, 1); // Remove the timeline at the specified index
    setFormData({
      ...formData,
      timelines: updatedTimelines,
    });
  };

  const handleAddTimeline = () => {
    // Create a new empty timeline and add it to the list
    const updatedTimelines = [...formData.timelines];
    updatedTimelines.push({ name: '', value: '' });
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
            value={inputValue}
            onChange={handleInputChange}
            onBlur={() => setTimeout(() => setSuggestionSelected(true), 100)}
            autoComplete="off"
          />
          {suggestions.length > 0 && !suggestionSelected && (
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.domain}
                  onClick={() => handleSuggestionClick(suggestion.name, suggestion.domain)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
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
            name="status_category"
            value={formData.status_category}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Attractiveness Scale</Form.Label>
          <Form.Control
            type="text"
            name="attractiveness_scale"
            value={formData.attractiveness_scale}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job description link</Form.Label>
          <Form.Control
            type="text"
            name="job_description_link"
            value={formData.job_description_link}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>On site/Remote</Form.Label>
          <Form.Control
            type="text"
            name="on_site_remote"
            value={formData.on_site_remote}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Timeline</Form.Label>
          {formData.timelines.map((timeline, index) => (
            <div key={index} className="mb-3">
              <div className="timeline-row">
                <div className="timeline-name">
                  <Form.Control
                    type="text"
                    placeholder="Event / Interview name"
                    value={timeline.name}
                    onChange={(event) => handleTimelineNameChange(event, index)}
                    className="timeline-name"
                  />
                </div>
                <DatePicker
                  defaultValue={timeline.value === '' ? null : dayjs(timeline.value, 'MMMM D, YYYY')}
                  format="DD MMMM YYYY, dddd"
                  className="custom-datepicker"
                  style={{ width: '100%', height: '40px' }}
                  onChange={(date) => handleTimelineValueChange(date, index)}
                />
                <div className="delete-timeline">
                  <BsFillTrashFill
                    onClick={() => handleDeleteTimeline(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </Form.Group>
        {/* Button to add a new timeline */}
        <Button className='add_new_timeline_button' variant="primary" onClick={handleAddTimeline}>
          Add new <AiOutlinePlusCircle className='add_new_timeline_icon' />
        </Button>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}


export default ApplicationDetails;
