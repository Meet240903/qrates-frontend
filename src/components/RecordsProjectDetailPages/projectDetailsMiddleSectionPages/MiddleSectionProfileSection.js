import React from 'react'
import sectionImg from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg5.jpg'
import '../../../assets/css/recordsProjectDetailsPagesCSS/middleSectionPagescss/middleSectionProfileSection.css'

const MiddleSectionProfileSection = () => {
    return (
        <>
            <div className='row mx-0 records-project-details-page-middle-section-left-content-profile-section-content'>
                <div className='col-md-4 records-project-details-page-middle-section-left-content-profile-section-left-content'>
                    <img src={sectionImg} className='img-fluid' alt='section-img' />
                </div>
                <div className='col-md-8 records-project-details-page-middle-section-left-content-profile-section-right-content'>
                    <h1>Chemical Modulation</h1>
                    <a href='#'>1 projects</a>
                    <p>Chemical Modulation is a electronic music project from Aachen in Germany. Born in the late seventies, i fell in love with electronic music in the early nineties. Since 2010 I have been working as DJ and producer. Chemical Modulation does not just want to serve one particular genre. Rather, it’s about using the versatility of electronic music. It’s not just about creating music for the dancefloor. It’s about the fun of creating music and expressing different states of mind. The songs are from calm and relaxed to aggressive and driving.</p>
                </div>
            </div>
        </>
    )
}

export default MiddleSectionProfileSection
