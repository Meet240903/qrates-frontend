import React from 'react'
import setionImg from '../../assets/images/forFansPageImgs/topSectionImg.avif'
import '../../assets/css/forFansPageSectionsCSS/forFansTopSection.css'

const ForFansTopSection = () => {
    return (
        <>
            <div className='for-fans-page-top-section-container'>
                <div className='row mx-0 for-fans-page-top-section-content'>
                    <div className='col-md-6 for-fans-page-top-section-left-content'>
                        <div className='for-fans-page-top-section-left-content-title'>
                            <span>for fans</span>
                        </div>
                        <h1>Music community and platform for people who love analog media</h1>
                        <p>Qrates has grown by meeting the diverse needs of artists and fans of analog media, and in the process has returned greater profits to the community. Our goal is to bring artists and fans together through Qrates, and help the music community thrive and evolve.</p>
                    </div>
                    <div className='col-md-6 for-fans-page-top-section-right-content'>
                        <img src={setionImg} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForFansTopSection
