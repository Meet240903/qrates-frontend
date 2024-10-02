import React from 'react'
import AboutPageTopSection from './aboutUsSectionPages/AboutPageTopSection'
import AboutHeader from './AboutHeader'
import sectionBgImg from '../assets/images/aboutusPageImgs/topSectionBgImg2.jpg'
import PartnersPageTopSection from './partnersPageSections/PartnersPageTopSection'
import PartnersPageMiddleSection from './partnersPageSections/PartnersPageMiddleSection'

const PartnersPage = () => {
    return (
        <>
            <AboutPageTopSection sectionTitle="partners" sectionContent="Who we work with." sectionBgImg={sectionBgImg} />
            <AboutHeader />
            <PartnersPageTopSection />
            <PartnersPageMiddleSection />
        </>
    )
}

export default PartnersPage
