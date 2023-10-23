import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/button">Go to Button Page</Link>
    </div>
  );
};

export default HomePage;