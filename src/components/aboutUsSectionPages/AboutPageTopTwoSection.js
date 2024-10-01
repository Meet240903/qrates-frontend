import React from 'react'
import sectionImg from '../../assets/images/aboutusPageImgs/sectionImg1.png'
import '../../assets/css/aboutusPageSectionsCSS/aboutPageTopTwoSection.css'

const AboutPageTopTwoSection = () => {
    return (
        <>
            <div className='about-us-page-top-two-section-container'>
                <div className='about-us-page-top-two-section-content'>
                    <img src={sectionImg} className='img-fluid' alt='section-img' />
                    <p>We're record and cassette lovers, music fans. We believe they serve an important connection between musicians and fans. So we built Qrates to help artists bring the magic of music on physical things to more people.</p>
                </div>
            </div>
        </>
    )
}

export default AboutPageTopTwoSection
