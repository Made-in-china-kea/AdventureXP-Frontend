import React, { useState, useEffect } from 'react';
import { Button } from './components/Button.tsx';
import { Link } from 'react-router-dom';
import './assets/styles/Navbar.css';

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
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AdventureXP
            <i className='fab fa-typo3' />
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* Home link on the left */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* Activities dropdown in the middle */}
            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='#' className='nav-links' onClick={(e) => e.preventDefault()}>
                Activities <i className='fas fa-caret-down' />
              </Link>
              {dropdown && (
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>
                    <Link to='/paintball' className='nav-links' onClick={closeMobileMenu}>
                      Paintball
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to='/biking' className='nav-links' onClick={closeMobileMenu}>
                      Biking
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to='/gokart' className='nav-links' onClick={closeMobileMenu}>
                      Go-kart
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to='/sumo' className='nav-links' onClick={closeMobileMenu}>
                      Sumo
                    </Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to='/minigolf' className='nav-links' onClick={closeMobileMenu}>
                      Mini golf
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Spacing element */}
            <li className='nav-item grow'>
              {/* This li element is used to push the login to the right */}
            </li>

            {/* Login link on the right */}
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Book here!</Button>}
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
