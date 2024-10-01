import React from 'react'
import '../../assets/css/aboutusPageSectionsCSS/aboutusPageTopSection.css'

const AboutPageTopSection = ({ sectionTitle, sectionContent, sectionBgImg }) => {
    return (
        <>
            <div className='about-us-page-top-section-container'
                style={{
                    backgroundImage: `url(${sectionBgImg})`
                }}
            >
                <div className='about-us-page-top-section-content'>
                    <div className='about-us-page-top-section-content-title'>
                        <span>{sectionTitle}</span>
                    </div>
                    <h1>{sectionContent}</h1>
                </div>
            </div>
        </>
    )
}

export default AboutPageTopSection
