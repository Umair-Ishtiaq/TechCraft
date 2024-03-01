import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Navbar() {
  const scrollToHome = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" onClick={scrollToHome}>
            <img src={require('../assets/logo.png')} alt='logo' height={70}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={scrollToHome} style={{ fontSize: '20px' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" style={{ fontSize: '20px' }}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team" onClick={scrollToHome} style={{ fontSize: '20px' }}>
                  Our Team
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2" href="#about" style={{ fontSize: '20px' }}>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
