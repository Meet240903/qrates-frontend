import React from 'react'
import '../../assets/css/storiesDetailsPageSectionCSS/storiesDetailsBottomSection.css'

const StoriesDetailsBottomSection = ({ sectionData }) => {
    return (
        <>
            <div className='stories-details-page-bottom-section-container'>
                <div className='stories-details-page-bottom-section-title'>
                    <span>now on qrates</span>
                </div>
                {
                    sectionData?.sectionImg && <img src={sectionData?.sectionImg} className='img-fluid' alt='bottom-section-img' />
                }
                <h2>{sectionData?.title}</h2>
                <button>view projects</button>
                <div className='stories-details-page-bottom-section-footer'>
                    <p>By Qrates</p>
                    <p>September 19, 2023</p>
                </div>
            </div>
        </>
    )
}

export default StoriesDetailsBottomSection
