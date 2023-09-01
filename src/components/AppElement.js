import React from "react";

class AppElement extends React.Component {
    render() {
        const elementStyle = {
            backgroundColor: "#e400c9", // Example CSS property-value pair
        };

        if (this.props.element_type === 'status')
            return(
                <div className={this.props.element_type}>
                    <p>{this.props.element_name}</p>
                    <p className="ee" style={elementStyle}>{this.props.element_body}</p>
                </div> 
            )
        else
            return(
                <div className={this.props.element_type}>
                    <p>{this.props.element_name}</p>
                    <h3>{this.props.element_body}</h3>
                </div> 
            )

    }
}

export default AppElement