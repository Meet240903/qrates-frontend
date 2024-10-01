import React from 'react'
import AboutPageTopSection from './aboutUsSectionPages/AboutPageTopSection'
import AboutHeader from './AboutHeader'
import sectionBgImg from '../assets/images/aboutusPageImgs/topSectionBgImg3.jpg'

const ContactPage = () => {
    return (
        <>
            <AboutPageTopSection sectionTitle="contact" sectionContent="We’re here to help." sectionBgImg={sectionBgImg} />
            <AboutHeader />
        </>
    )
}

export default ContactPage
