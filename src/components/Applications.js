import React from "react";
import Application from "./Application";

class Applications extends React.Component {
    apps = [
        {
          "id": 5,
          "company_name": "Klarna",
          "job_title": "Engineering Manager",
          "status": "Recruter interview",
          "attractiveness_scale": 1,
          "status_category": "red"
        },
        {
          "id": 4,
          "company_name": "Zalando ZalandoZalando",
          "job_title": "Senior Python Developer",
          "status": "Home assignment",
          "attractiveness_scale": 4,
          "status_category": "red"
        },
        {
          "id": 11,
          "company_name": "Apple",
          "job_title": "Team Lead",
          "status": "Offer",
          "attractiveness_scale": 1,
          "status_category": "red"
        }
    ]

    render() {
        if (this.apps.length > 0)
            return(
                <div>
                    {
                        this.apps.map((el) => (
                            <Application key={el.id} application={el} />
                        ))
                    }
                </div>
            )
        else
            return(<div className="application">
                <h3>Here will be displayed your applications. Click on the Create button for a new application</h3>
            </div>)
                    
    }
}

export default Applications