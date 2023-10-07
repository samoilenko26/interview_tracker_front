import React, { useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Form from 'react-bootstrap/Form';

function CompanyNameInput({ applicationData, suggestionSelected, setSuggestionSelected, setFormData, formData }) {
    const [inputValue, setInputValue] = useState(applicationData.company_name || '');
    const [suggestions, setSuggestions] = useState([]);

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

    const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

    const handleCompanyNameInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        debouncedFetchSuggestions(value);
        setSuggestionSelected(false);
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

    return (
        <div className="mb-3">
            <Form.Label>Company name</Form.Label>
            <Form.Control
                type="text"
                value={inputValue}
                onChange={handleCompanyNameInputChange}
                onBlur={() => setTimeout(() => setSuggestionSelected(true), 300)}
                autoComplete="off"
            />
            {suggestions.length > 0 && !suggestionSelected && (
                <div className="suggestion-dropdown">
                    {suggestions.map((suggestion) => (
                        <div
                            key={suggestion.domain}
                            className="suggestion-item"
                            onClick={() => handleSuggestionClick(suggestion.name, suggestion.domain)}
                        >
                            <div className="flex">
                                <img src={suggestion.logo} alt={suggestion.name} />
                                {suggestion.name}
                            </div>
                            <div className="text-gray-600 text-opacity-75">{suggestion.domain}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CompanyNameInput;
