import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Official', href: '#officials' },
  { name: 'Downloads', href: '#moviedownload' },
  { name: 'Streaming', href: '#moviestream' },
  { name: 'Anime', href: '#anime' },
  { name: 'Games', href: '#Games' },
];

const handleDismiss = () => {
    const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
    if (closeButton) {
        closeButton.click();
    }
}

function Sidebar() {
  return (
    <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ width: '250px' }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel" style={{ color: '#4dd0ff' }}>
          Menu
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ filter: 'invert(1)' }}></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {navItems.map((item) => (
            <li className="nav-item" key={item.name}>
              <a 
                className="nav-link" 
                href={item.href} 
                style={{ color: '#cfe8ff' }} 
                onClick={handleDismiss} 
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="nav-item mt-3">
            <Link to="/survey" className="btn btn-primary w-100" onClick={handleDismiss}>
                Help Us (Survey)
            </Link>
          </li>
          <li className="nav-item mt-3">
            <Link to="/" className="btn btn-outline-secondary w-100" onClick={handleDismiss}>
                Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;