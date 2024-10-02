import React from 'react'
import '../assets/css/aboutHeader.css'
import { Link } from 'react-router-dom'

const AboutHeader = () => {
    return (
        <>
            <div className='about-header-page-section-container'>
                <Link to='/about-us' target='_top' style={{ textDecoration: 'none' }}>
                    <h4>about us</h4>
                </Link>
                <Link to='/careers' target='_top' style={{ textDecoration: 'none' }}>
                    <h4>careers</h4>
                </Link>
                <Link to='/partners' target='_top' style={{ textDecoration: 'none' }}>
                    <h4>partners</h4>
                </Link>
                <Link to='/contact' target='_top' style={{ textDecoration: 'none' }}>
                    <h4>contact</h4>
                </Link>
            </div>
        </>
    )
}

export default AboutHeader
