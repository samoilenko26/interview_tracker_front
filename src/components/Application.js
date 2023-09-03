import React from "react";
import { BsBuildings } from "react-icons/bs";
import AppElement from "./AppElement"

class Application extends React.Component {
    maxLength = 14
    app = this.props.application

    constructor(props) {
        super(props);

        var statusBackgroundColor = "";
        switch( this.app.status_category ) {
        case 'red':
            statusBackgroundColor = "#F2005D";
            break;
        case 'blue':
            statusBackgroundColor = "#0085F2";
            break;
        case 'green':
            statusBackgroundColor = "#00A642";
            break;
        case 'yellow':
            statusBackgroundColor = "#FFEF00";
            break;
        case 'orange':
            statusBackgroundColor = "#FF5800";
            break;
        case 'purple':
            statusBackgroundColor = "#F100E5";
            break;
          default:
            statusBackgroundColor = "#e400c9";
        }
        
        this.state = {
            company_name: this.app.company_name.length > this.maxLength ? this.app.company_name.slice(0, this.maxLength) + '..' : this.app.company_name,
            job_title: this.app.job_title.length > this.maxLength ? this.app.job_title.slice(0, this.maxLength) + '..' : this.app.job_title,
            status: this.app.status.length > this.maxLength ? this.app.status.slice(0, this.maxLength) + '..' : this.app.status,
            status_color: statusBackgroundColor,
            attractiveness_scale: this.app.attractiveness_scale,
            logoData: null,
        };
    }

    componentDidMount(props) {
        const domain = this.app.official_website;

        fetch(`https://logo.clearbit.com/${domain}`)
            .then((response) => {
            if (response.ok) {
                // If the response is successful, set the logo data in state
                return response.blob();
            } else {
                // Handle the case when the request fails, e.g., use a default icon
                console.error('Failed to fetch logo.');
            }
            })
            .then((logoData) => {
            this.setState({ logoData });
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }

    render() {
        
        return(
            <div className="application">
                {this.state.logoData ? (
                <img src={URL.createObjectURL(this.state.logoData)} alt="Company Logo" className="app-icon" />
                ) : (
                <BsBuildings className="app-icon" />
                )}
                <div className="app-info">
                    <AppElement element_type="company_name" element_name="Company name" element_body={this.state.company_name} />
                    <AppElement element_type="job_title" element_name="Job Title" element_body={this.state.job_title} />
                    <AppElement element_type="status" element_name="Status" element_body={this.state.status} status_color={this.state.status_color} />
                    <AppElement element_type="attractiveness_scale" element_name="Attractiveness Scale" scale={this.state.attractiveness_scale} />
                </div>
            </div>
        )
    }
}

export default Application