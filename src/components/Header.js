import React, { useState } from 'react';
import '../assets/css/header.css';
import headerLogo from '../assets/images/headerLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className='header-section-container'>
                <div className='header-section-container-left-content'>
                    <Link to='/' onClick={()=>setIsMobileMenuOpen(false)}>
                        <img src={headerLogo} className='img-fluid' alt='header-logo' />
                    </Link>
                    <nav className={`header-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <a href='#' onClick={()=>setIsMobileMenuOpen(false)}>discover music</a>
                        <a href='#' onClick={()=>setIsMobileMenuOpen(false)}>for artists</a>
                        <a href='#' onClick={()=>setIsMobileMenuOpen(false)}>for fans</a>
                        <div className={`${isMobileMenuOpen ? 'header-mobile-social-icons' : 'd-none'}`}>
                            <FontAwesomeIcon icon={faFacebook} className='header-social-icon' />
                            <FontAwesomeIcon icon={faInstagram} className='header-social-icon' />
                            <FontAwesomeIcon icon={faTwitter} className='header-social-icon' />
                        </div>
                        <div className={`${isMobileMenuOpen ? 'header-section-container-mobile-right-content' : 'd-none'}`}>
                            <button>make your own</button>
                            <a href='#'>login</a>
                        </div>
                    </nav>
                    <FontAwesomeIcon icon={faSearch} className='header-search-icon' />
                    <FontAwesomeIcon icon={faCartShopping} className='header-cart-icon' />
                    <button className='mobile-menu-toggle' onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
                <div className='header-section-container-right-content'>
                    <a href='#'>login</a>
                    <button>make your own</button>
                </div>
            </div>
        </>
    );
};

export default Header;
