import React from "react";
import Application from "./Application";

class Applications extends React.Component {
    apps = [
        {
          "id": 5,
          "company_name": "string",
          "job_title": "string",
          "status": "string",
          "attractiveness_scale": 1,
          "status_category": "red"
        },
        {
          "id": 4,
          "company_name": "123string",
          "job_title": "string",
          "status": "string",
          "attractiveness_scale": 4,
          "status_category": "red"
        },
        {
          "id": 11,
          "company_name": "string",
          "job_title": "string",
          "status": "string",
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