import React from 'react'
import '../../assets/css/aboutusPageSectionsCSS/aboutPageMiddleSection.css'
import sectionImg1 from '../../assets/images/aboutusPageImgs/middleSectionImg1.jpg'
import sectionImg2 from '../../assets/images/aboutusPageImgs/middleSectionImg2.jpg'

const AboutPageMiddleSection = () => {
    return (
        <>
            <div className='about-us-page-middle-section-container'>
                <div className='row mx-0 about-us-page-middle-section-content'>
                    <div className='col-md-6 about-us-page-middle-section-left-content'>
                        <h1>ARTISTS IN CONTROL</h1>
                        <img src={sectionImg1} className='img-fluid' alt='section-img' />
                        <p>We want our resources to enable more artists to create on their own without compromise, because no one knows your vision as well as you do. We execute, but you control how.</p>
                    </div>
                    <div className='col-md-6 about-us-page-middle-section-right-content'>
                        <h1>VINYL FOR ALL</h1>
                        <img src={sectionImg2} className='img-fluid' alt='section-img' />
                        <p>The Qrates team comes together with the common goal of helping more artists put music into more fans' hands. Qrates is a space for all music fans to discover and support the music they love.</p>
                    </div>
                    <div className='about-us-page-middle-section-absolute-title'>
                        <h2>why we're here</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageMiddleSection
