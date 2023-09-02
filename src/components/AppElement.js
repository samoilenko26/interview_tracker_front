import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class AppElement extends React.Component {
    render() {
        if (this.props.element_type === 'status') {
            const statusBackgroundStyle = {
                backgroundColor: this.props.status_color,
            }
            return(
                <div className={this.props.element_type}>
                    <p>{this.props.element_name}</p>
                    <p className="status_body" style={statusBackgroundStyle}>{this.props.element_body}</p>
                </div> 
            )
        } else if (this.props.element_type === 'attractiveness_scale'){
            const stars = [];
            for (let i = 1; i <= 5; i++) {
              if (i <= this.props.scale) {
                stars.push(<AiFillStar className="star" key={i} />);
              } else {
                stars.push(<AiOutlineStar className="star" key={i} />);
              }
            }
            return(
                <div className={this.props.element_type}>
                    <p>{this.props.element_name}</p>
                    <div>
                        {stars.map((star, index) => (
                            <span key={index}>{star}</span>
                        ))}
                    </div>
                </div> 
            )
        } else {
            return(
                <div className={this.props.element_type}>
                    <p>{this.props.element_name}</p>
                    <h3>{this.props.element_body}</h3>
                </div> 
            )
        }
    }
}

export default AppElement