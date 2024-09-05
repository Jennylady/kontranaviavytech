import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Landingpage.css';
import image from '../assets/Group 36.png';
import logo from '../assets/logo.jpg';
import AccueilSection from './accueilSection';

function Landingpage() {
  const [activeMenu, setActiveMenu] = useState('acceuil');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    const element = document.getElementById(menu);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='contenaireLanding'>
      <div className="landing1">
        <nav className="header">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>

          <div className="right">
            <div className="menu">
              <ul>
                <li
                  className={`acceuil ${activeMenu === 'acceuil' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('accueil')}
                >
                  ACCEUIL
                </li>
                <li
                  className={`partage ${activeMenu === 'partage' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('partage')}
                >
                  PARTAGE
                </li>
                <li
                  className={`formation ${activeMenu === 'formation' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('formation')}
                >
                  FORMATION
                </li>
                <li
                  className={`contact ${activeMenu === 'contact' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('contact')}
                >
                  CONTACT
                </li>
              </ul>
            </div>

            <div className="button">
              <button>
                Se connecter
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div id="accueil" className="section">
        <AccueilSection />
      </div>

      <div id="partage" className="section">
        <h2>Partage</h2>
        <p>Partagez vos idées ici.</p>
      </div>

      <div id="formation" className="section">
        <h2>Formation</h2>
        <p>Découvrez nos formations.</p>
      </div>

      <div id="contact" className="section">
        <h2>Contactez-nous</h2>
        <p>Contactez-nous pour plus d'informations.</p>
      </div>
    </div>
  );
}

export default Landingpage;
