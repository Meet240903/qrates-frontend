import React from 'react'
import '../../assets/css/recordsProjectDetailsPagesCSS/projectDetailsMiddleSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCode, faQrcode, faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import MiddleSectionAboutSection from './projectDetailsMiddleSectionPages/MiddleSectionAboutSection'
import MiddleSectionTracklistSection from './projectDetailsMiddleSectionPages/MiddleSectionTracklistSection'
import MiddleSectionProductImgsSection from './projectDetailsMiddleSectionPages/MiddleSectionProductImgsSection'
import MiddleSectionProfileSection from './projectDetailsMiddleSectionPages/MiddleSectionProfileSection'
import { HashLink as Link } from 'react-router-hash-link'

const ProjectDetailsMiddleSection = () => {
    const headerData = [
        {
            title: "about",
            link: "about-section"
        },
        {
            title: "tracks",
            link: "tracks-section"
        },
        {
            title: "product images",
            link: "product-imgs-section"
        },
        {
            title: "comments",
            link: "comments-section"
        },
        {
            title: "profile",
            link: "profile-section"
        },
    ]
    return (
        <>
            <div className='records-project-details-page-middle-section-container'>
                <div className='records-project-details-page-middle-section-title-header'>
                    <div className='records-project-details-page-middle-section-header-links'>
                        {
                            headerData?.map((data, index) => (
                                <div key={index}>
                                    <Link to={`#${data?.link}`} style={{ color:'#000',textDecoration: 'none' }}>
                                        <h4>{data?.title}</h4>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className='records-project-details-page-middle-section-header-social-media-content'>
                        <p>share</p>
                        <FontAwesomeIcon icon={faFacebook} className='records-project-details-page-middle-section-header-social-media-icon' />
                        <FontAwesomeIcon icon={faTwitter} className='records-project-details-page-middle-section-header-social-media-icon' />
                        <FontAwesomeIcon icon={faCode} className='records-project-details-page-middle-section-header-social-media-icon' />
                        <FontAwesomeIcon icon={faQrcode} className='records-project-details-page-middle-section-header-social-media-icon' />
                    </div>
                </div>
                <div className='row mx-0 records-project-details-page-middle-section-content'>
                    <div className='col-md-8 records-project-details-page-middle-section-left-content'>
                        <div className='records-project-details-page-middle-section-left-content-about-section' id='about-section'>
                            <MiddleSectionAboutSection />
                        </div>
                        <div className='records-project-details-page-middle-section-left-content-tracks-section' id='tracks-section'>
                            <MiddleSectionTracklistSection />
                        </div>
                        <div className='records-project-details-page-middle-section-left-content-product-imgs-section' id='product-imgs-section'>
                            <MiddleSectionProductImgsSection />
                        </div>
                        <div className='records-project-details-page-middle-section-left-content-comments-section' id='comments-section'>
                            <h1>Comments</h1>
                            <div className='records-project-details-page-middle-section-left-content-comments-section-content'>
                                <p>Loading...</p>
                            </div>
                        </div>
                        <div className='records-project-details-page-middle-section-left-content-profile-section' id='profile-section'>
                            <MiddleSectionProfileSection />
                        </div>
                    </div>
                    <div className='col-md-4 records-project-details-page-middle-section-right-content'>
                        <h1>Rescue (5.30 A.M. on the Deck of the MPS Noorderzon)</h1>
                        <h3>Chemical Modulation</h3>
                        <div className='records-project-details-page-middle-section-right-content-genre-titles'>
                            <div className='records-project-details-page-middle-section-right-content-genre-boxs'>
                                <span>electronics</span>
                            </div>
                            <div className='records-project-details-page-middle-section-right-content-genre-boxs'>
                                <span>techno</span>
                            </div>
                        </div>
                        <div className='records-project-details-page-middle-section-right-content-crowdfunding-section'>
                            <div className='records-project-details-page-middle-section-right-content-crowdfunding-section-content'>
                                <p>Remaining time</p>
                                <h4>61 days left</h4>
                            </div>
                            <div className='records-project-details-page-middle-section-right-content-crowdfunding-section-content'>
                                <p>Achievement</p>
                                <h4>10/200</h4>
                            </div>
                            <div className='records-project-details-page-middle-section-right-content-crowdfunding-section-content'>
                                <p>Price</p>
                                <h4>€15.25</h4>
                            </div>
                        </div>
                        <div className='records-project-details-page-middle-section-right-content-back-now-button'>
                            <button>back now</button>
                        </div>
                        <div className='records-project-details-page-middle-section-right-content-add-to-wishlist-button'>
                            <button><FontAwesomeIcon icon={faStar} /> add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsMiddleSection
