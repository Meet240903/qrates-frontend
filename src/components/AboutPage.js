import React from 'react'
import AboutPageTopSection from './aboutUsSectionPages/AboutPageTopSection'
import AboutHeader from './AboutHeader'
import sectionBgImg from '../assets/images/aboutusPageImgs/topSectionBgImg.jpg'
import AboutPageTopTwoSection from './aboutUsSectionPages/AboutPageTopTwoSection'
import AboutPageMiddleSection from './aboutUsSectionPages/AboutPageMiddleSection'
import AboutPageSliderSection from './aboutUsSectionPages/AboutPageSliderSection'

const AboutPage = () => {
    return (
        <>
            <AboutPageTopSection sectionTitle="about us" sectionContent="Music in your hands, from Tokyo to the world." sectionBgImg={sectionBgImg} />
            <AboutHeader />
            <AboutPageTopTwoSection />
            <AboutPageMiddleSection />
            <AboutPageSliderSection />
        </>
    )
}

export default AboutPage
