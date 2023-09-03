import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to="/" className="logo" >
                    Interview Tracker
                </Link>
                <div className="options">
                    <div className="option">
                        <Link to="/" className="btn btn-outline-primary btn-sm">
                            Log out
                            <FiLogOut className="logout_icon" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
