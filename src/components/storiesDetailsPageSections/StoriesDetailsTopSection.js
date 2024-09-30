import React from 'react'
import '../../assets/css/storiesDetailsPageSectionCSS/storiesDetailsTopSection.css'

const StoriesDetailsTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='stories-details-page-top-section-container'>
                <img src={sectionData?.bgImg} className='img-fluid' alt='section-top-img' />
                <div className='stories-details-page-top-section-title'>
                    <div className='stories-details-page-top-section-title-box'>
                        <span>{sectionData?.storyType}</span>
                    </div>
                    <h2>{sectionData?.pageTitle}</h2>
                    <h1>{sectionData?.title}</h1>
                    <p>{sectionData?.content}</p>
                </div>
                <div className='row mx-0 stories-details-page-top-section-content'>
                    <div className='col-md-6'>
                    </div>
                    <div className='col-md-6 stories-details-page-top-section-right-content'>
                        {
                            sectionData?.storiesDetailsData?.topSectionData?.contentData?.map((data, index) => (
                                <div key={index}>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoriesDetailsTopSection
