import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom'; // Import the Link component

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo" >
                    <p >Interview Tracker</p>
                </Link>
                <div className="options">
                    <div className="option">
                        Log out
                        <span className="logout_wrapper">
                            <FiLogOut className="logout_icon" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
