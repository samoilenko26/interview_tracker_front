import React from "react";
import Application from "./Application";
import { Link } from 'react-router-dom';

class Applications extends React.Component {
    apps = [
        {
            "id": 5,
            "company_name": "Klarna",
            "job_title": "Engineering Manager",
            "status": "Recruter interview",
            "attractiveness_scale": 1,
            "status_category": "red",
            "official_website": "klarna.com"
        },
        {
            "id": 11,
            "company_name": "Apple",
            "job_title": "Team Lead",
            "status": "Offer",
            "attractiveness_scale": 1,
            "status_category": "green",
            "official_website": "apple.com"
        },
        {
            "id": 14,
            "company_name": "Google",
            "job_title": "CTO",
            "status": "Tech Test",
            "attractiveness_scale": 2,
            "status_category": "yellow",
            "official_website": "google.com"
        },
        {
            "id": 16,
            "company_name": "Amazon",
            "job_title": "Middle Project Manager",
            "status": "Behavioral interview",
            "attractiveness_scale": 3,
            "status_category": "orange",
            "official_website": "amazon.com"
        },
        {
            "id": 19,
            "company_name": "Intel",
            "job_title": "Senior Project Manager",
            "status": "PreOffer",
            "attractiveness_scale": 5,
            "status_category": "purple",
            "official_website": "intel.com"
        },
        {
            "id": 4,
            "company_name": "Zalando ZalandoZalando",
            "job_title": "Senior Python Developer",
            "status": "Home assignment",
            "attractiveness_scale": 4,
            "status_category": "blue",
            "official_website": "zalando.de"
        }
    ]

    render() {

        if (this.apps.length > 0)
            return (
                <div>
                    {this.apps.map((el) => (
                        <Link to={`/applications/${el.id}`} key={el.id}>
                            <Application key={el.id} application={el} />
                        </Link>
                    ))}
                </div>
            )
        else
            return (<div className="application">
                <h3>Here will be displayed your applications. Click on the Create button for a new application</h3>
            </div>)

    }
}

export default Applications