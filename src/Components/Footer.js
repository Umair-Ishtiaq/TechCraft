import React from 'react';

export default function Footer() {
  return (
    <nav className="footer navbar justify-content-center align-items-center">
      <a className="logo" href="/">
        <img src={require('../assets/logo.png')} alt="logo" />
      </a>
      <p className="copyright">&copy; 2023 Umair Ishtiaq</p>
    </nav>
  );
}
