import React from "react";

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="logo">Interview Tracker</div>
                <div className="options">
                    <div className="option">About</div>
                    <div className="option">Contacts</div>
                </div>
            </div> 
        )
    }
}

export default Header