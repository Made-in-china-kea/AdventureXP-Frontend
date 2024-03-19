import React, { useState, useEffect } from 'react';
import { Button } from './components/Button.tsx';
import { NavLink } from 'react-router-dom'; // Use this if you prefer NavLink
import './assets/styles/Navbar.css';
import AuthStatus from "./security/AuthStatus";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
    const handleResize = () => showButton();

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AdventureXP
            <i className='fab fa-typo3' />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* Home link on the left */}
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
                     {/* Activities dropdown in the middle */}
                     <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <NavLink to='#' className='nav-links' onClick={(e) => e.preventDefault()}>
                Activities <i className='fas fa-caret-down' />
              </NavLink>
              {dropdown && (
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>
                    <NavLink to='/paintball' className='nav-links' onClick={closeMobileMenu}>
                      Paintball
                    </NavLink>
                  </li>
                  <li className='dropdown-item'>
                    <NavLink to='/biking' className='nav-links' onClick={closeMobileMenu}>
                      Biking
                    </NavLink>
                  </li>
                  <li className='dropdown-item'>
                    <NavLink to='/gokart' className='nav-links' onClick={closeMobileMenu}>
                      Go-kart
                    </NavLink>
                  </li>
                  <li className='dropdown-item'>
                    <NavLink to='/sumo' className='nav-links' onClick={closeMobileMenu}>
                      Sumo
                    </NavLink>
                  </li>
                  <li className='dropdown-item'>
                    <NavLink to='/minigolf' className='nav-links' onClick={closeMobileMenu}>
                      Mini golf
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            {/* Spacing element to push login to the right */}
            <li className='nav-item grow'></li>
            {/* Login link on the right */}
            <li className='nav-item'>
            
          
          <AuthStatus />
        
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Book here!</Button>}
        </div>
      </nav>
      <nav>
      </nav>
    </>
  );
}

export default Navbar;