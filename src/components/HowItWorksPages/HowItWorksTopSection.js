import React from 'react'
import '../../assets/css/howItWorksPagesCSS/howItWorksTopSection.css'
import sectionImg from '../../assets/images/howItWorksPageImgs/topSectionImg.avif'

const HowItWorksTopSection = () => {
    return (
        <>
            <div className='how-it-works-page-top-section-container'>
                <div className='row mx-0 how-it-works-page-top-section-content'>
                    <div className='col-md-6 how-it-works-page-top-section-left-content'>
                        <div className='how-it-works-page-top-section-left-content-title'>
                            <span>for artists</span>
                        </div>
                        <h1>How it works</h1>
                        <p>At Qrates, we offer solutions for every aspect of your record business, from package design and manufacturing, to direct-to-consumer sales, wholesale to stores, inventory storage, and even packaging and shipping. We take care of all the tedious tasks, costs, and risks, so that artists can focus on what they do best and earn more income. We're here to help make the record business easier and more profitable for everyone involved.</p>
                    </div>
                    <div className='col-md-6 how-it-works-page-top-section-right-content'>
                        <img src={sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorksTopSection
