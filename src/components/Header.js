import React from "react";
import { FiLogOut } from "react-icons/fi";


class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="logo">Interview Tracker</div>
                <div className="options">
                    <div className="option">Log out
                        <span className="logout_wrapper">
                            <FiLogOut className="logout_icon"/>
                        </span>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Header