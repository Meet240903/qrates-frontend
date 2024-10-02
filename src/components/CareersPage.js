import React from 'react'
import AboutPageTopSection from './aboutUsSectionPages/AboutPageTopSection'
import AboutHeader from './AboutHeader'
import sectionBgImg from '../assets/images/aboutusPageImgs/topSectionBgImg1.jpg'
import '../assets/css/careerPage.css'

const CareersPage = () => {
    return (
        <>
            <AboutPageTopSection sectionTitle="careers" sectionContent="Join the team." sectionBgImg={sectionBgImg} />
            <AboutHeader />
            <div className='career-page-bottom-section-container'>
                <p>Here’s the latest job opportunities at Qrates. For more information please feel free to get in touch.</p>
            </div>
        </>
    )
}

export default CareersPage
