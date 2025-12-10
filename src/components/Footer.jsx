import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="container-fluid bg-dark text-center py-3 mt-5">
      <p className="mb-1">
        <Link to="/survey" className="btn btn-sm btn-primary" style={{ textDecoration: 'none' }}>
          Participate in Our Survey
        </Link>
      </p>
      
      <p className="mb-0">
        &copy; {currentYear} Entertainment Dashboard | All Rights Reserved. | Created for Viva Presentation.
      </p>
    </footer>
  );
}

export default Footer;