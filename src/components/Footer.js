import React from 'react'
import '../assets/css/footer.css'
import footerLogo from '../assets/images/footerLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerData = [
        {
            title: "for artists",
            contentData: [
                {
                    content: "For Artists",
                },
                {
                    content: "How it Works",
                },
                {
                    content: "Artist Toolkit",
                },
                {
                    content: "Referral Program",
                },
            ]
        },
        {
            title: "for fans",
            contentData: [
                {
                    content: "For Fans",
                },
                {
                    content: "Records",
                },
                {
                    content: "Cassettes",
                },
                {
                    content: "Stories",
                },
                {
                    content: "Qrates Curated",
                },
            ]
        },
        {
            title: "OUR COMPANY",
            contentData: [
                {
                    content: "About Qrates",
                },
                {
                    content: "Careers",
                },
                {
                    content: "Partners",
                },
            ]
        },
        {
            title: "HELP",
            contentData: [
                {
                    content: "Support Center",
                },
                {
                    content: "Contact Us",
                },
                {
                    content: "Returns",
                },
                {
                    content: "Shipping",
                },
            ]
        },
    ]
    return (
        <>
            <div className='footer-section-container'>
                <div className='footer-section-content'>
                    {
                        footerData?.map((data, index) => (
                            <div className='footer-section-inner-content' key={index}>
                                <h4>{data?.title}</h4>
                                {
                                    data?.contentData?.map((data, index) => (
                                        <div key={index}>
                                            <a href='#'>{data?.content}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='footer-bottom-section-container'>
                    <div className='footer-bottom-section-img'>
                        <Link to='/'>
                            <img src={footerLogo} className='img-fluid' alt='footer-logo' />
                        </Link>
                    </div>
                    <div className='footer-bottom-section-right-content'>
                        <button>English</button>
                        <div className='footer-bottom-section-social-media-section'>
                            <FontAwesomeIcon icon={faFacebook} className='footer-bottom-social-icon' />
                            <FontAwesomeIcon icon={faInstagram} className='footer-bottom-social-icon' />
                            <FontAwesomeIcon icon={faTwitter} className='footer-bottom-social-icon' />
                        </div>
                        <div className='footer-bottom-section-terms-section'>
                            <a href='#'>Terms of Service</a>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Legal Information</a>
                            <a href='#'>&copy;TDMS Inc.</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
