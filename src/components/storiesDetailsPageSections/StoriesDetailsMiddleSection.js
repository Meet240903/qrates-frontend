import React from 'react'
import '../../assets/css/storiesDetailsPageSectionCSS/storiesDetailsMiddleSection.css'

const StoriesDetailsMiddleSection = ({ sectionData }) => {
    return (
        <>
            <div className='stories-details-page-middle-section-container'>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 stories-details-page-middle-section-content' key={index}>
                            <div className='col-md-6 stories-details-page-middle-section-left-content'>
                                <h1>#{index + 1}</h1>
                                <h2>{data?.title}</h2>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-middle-imgs' />
                            </div>
                            <div className='col-md-6 stories-details-page-middle-section-right-content'>
                                {
                                    data?.contentData?.map((data, index) => (
                                        <div key={index}>
                                            <p>{data?.content}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default StoriesDetailsMiddleSection
