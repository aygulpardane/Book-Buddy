import React from 'react';
import bookLogo from '../assets/books.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigations = () => {
    const token = useSelector((state) => state.token);

    return (
        <div className="navigations">
            <div className="app-bar">
                <div className="left-section">
                    <img id="logo-image" src={bookLogo} alt="Book Logo" />
                    <div className="typography">Book Buddy Library</div>
                </div>
                <div className="right-section">
                    <Link to={`/`} className="nav-link">
                        <button className="button">Home</button>
                    </Link>
                    <Link to={`/books`} className="nav-link">
                        <button className="button">Available Books</button>
                    </Link>
                    {token && (
                        <Link to={`/profile`} className="nav-link">
                            <button className="button">My Profile</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigations;