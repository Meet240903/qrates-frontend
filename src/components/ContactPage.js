import React from 'react'
import AboutPageTopSection from './aboutUsSectionPages/AboutPageTopSection'
import AboutHeader from './AboutHeader'
import sectionBgImg from '../assets/images/aboutusPageImgs/topSectionBgImg3.jpg'
import ContactPageBottomSection from './contactPageSections/ContactPageBottomSection'

const ContactPage = () => {
    return (
        <>
            <AboutPageTopSection sectionTitle="contact" sectionContent="We’re here to help." sectionBgImg={sectionBgImg} />
            <AboutHeader />
            <ContactPageBottomSection />
        </>
    )
}

export default ContactPage
