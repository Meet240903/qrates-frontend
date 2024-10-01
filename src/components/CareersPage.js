import React from 'react'
import AboutPageTopSection from './aboutUsSectionPages/AboutPageTopSection'
import AboutHeader from './AboutHeader'
import sectionBgImg from '../assets/images/aboutusPageImgs/topSectionBgImg1.jpg'

const CareersPage = () => {
    return (
        <>
            <AboutPageTopSection sectionTitle="careers" sectionContent="Join the team." sectionBgImg={sectionBgImg} />
            <AboutHeader />
        </>
    )
}

export default CareersPage
