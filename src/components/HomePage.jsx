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
          <p>Welcome to our online Book Buddy Library</p>
          <p>MORE INFO</p>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
