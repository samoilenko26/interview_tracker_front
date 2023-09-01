import React from "react";
import { BsBuildings } from "react-icons/bs";
import AppElement from "./AppElement"

class Application extends React.Component {
    maxLength = 12
    app = this.props.application

    constructor(props) {
        super(props);
        this.state = {
            company_name: this.app.company_name.length > this.maxLength ? this.app.company_name.slice(0, this.maxLength) + '..' : this.app.company_name,
            job_title: this.app.job_title.length > this.maxLength ? this.app.job_title.slice(0, this.maxLength) + '..' : this.app.job_title,
            status: this.app.status.length > this.maxLength ? this.app.status.slice(0, this.maxLength) + '..' : this.app.status,
        };
    }

    render() {
        return(
            <div className="application">
                <BsBuildings className="app-icon" />
                <div className="app-info">
                    <AppElement element_type="company_name" element_name="Company name" element_body={this.state.company_name} />
                    <AppElement element_type="job_title" element_name="Job Title" element_body={this.state.job_title} />
                    <AppElement element_type="status" element_name="Status" element_body={this.state.status} />
                </div>
            </div>
        )
    }
}

export default Application