import React from 'react'
import '../../assets/css/aboutusPageSectionsCSS/aboutPageTeamSection.css'
import sectionImg1 from '../../assets/images/aboutusPageImgs/teamSectionImgs/sectionImg1.avif'
import sectionImg2 from '../../assets/images/aboutusPageImgs/teamSectionImgs/sectionImg2.avif'
import sectionImg3 from '../../assets/images/aboutusPageImgs/teamSectionImgs/sectionImg3.avif'
import sectionImg4 from '../../assets/images/aboutusPageImgs/teamSectionImgs/sectionImg4.avif'
import sectionImg5 from '../../assets/images/aboutusPageImgs/teamSectionImgs/sectionImg5.avif'
import sectionImg6 from '../../assets/images/aboutusPageImgs/teamSectionImgs/sectionImg6.avif'

const AboutPageTeamSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            name: "Yong Bo",
            position: "CEO",
        },
        {
            sectionImg: sectionImg2,
            name: "Taishi",
            position: "CMO",
        },
        {
            sectionImg: sectionImg3,
            name: "Jun",
            position: "CTO",
        },
        {
            sectionImg: sectionImg4,
            name: "Takashi",
            position: "Customer Support",
        },
        {
            sectionImg: sectionImg5,
            name: "Nathan",
            position: "Customer Support",
        },
        {
            sectionImg: sectionImg6,
            name: "Ami",
            position: "Backoffice / Accounting",
        },
    ]
    return (
        <>
            <div className='about-us-page-team-section-container'>
                <div className='about-us-page-team-section-title'>
                    <h2>Team</h2>
                    <p>We love vinyl so much we’ve made it our job. Please check our openings if you feel the same.</p>
                    <button>browse openings</button>
                </div>
                <div className='about-us-page-team-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='about-us-page-team-section-content-box' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                <p>{data?.name}</p>
                                <span>{data?.position}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AboutPageTeamSection
