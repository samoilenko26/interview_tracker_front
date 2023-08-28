import React from "react";
import { BsBuildings } from "react-icons/bs";

class Application extends React.Component {
    app = this.props.application
    render() {
        return(
            <div className="application">
                <BsBuildings className="app-icon" />
                <div className="app-info">
                    <h3>{this.app.company_name}</h3>
                    <h3>{this.app.job_title}</h3>
                    <p>{this.app.status}</p>
                    <p>{this.app.status_category}</p>
                    <p>{this.app.attractiveness_scale}</p>
                </div>
                
            </div>
        )
    }
}

export default Application