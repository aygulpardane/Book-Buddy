import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {
  return (
    <div>
        <div className="home-buttons">
                <Link to="/books">
                <button className="custom-button">Search Books</button>
                </Link>
                <Link to="/login">
                <button className="custom-button">Login</button>
                </Link>
                <Link to="/register">
                <button className="custom-button">Register</button>
                </Link>
        </div>
      <div className="home">
        <div className="paper">
          <h3>Welcome to our online Book Buddy Library</h3>
          <p>You can use our online library platform to search books, view their details, and create an account to check out books in your name.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
