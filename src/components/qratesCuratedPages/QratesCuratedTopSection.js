import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import storiesData from '../../data/StoriesData'
import '../../assets/css/qratesCuratedPageSectionCSS/qratesCuratedTopSection.css'
import { Link } from 'react-router-dom'

const QratesCuratedTopSection = () => {
    const selectedStoriesData = storiesData[6];
    return (
        <>
            <div className='qrates-curated-page-top-section-container'>
                <div className='row mx-0 qrates-curated-page-top-section-content'>
                    <div className='col-md-6 qrates-curated-page-top-section-left-content'
                        style={{
                            backgroundImage: `url(${selectedStoriesData.bgImg})`
                        }}
                    >
                    </div>
                    <div className='col-md-6 qrates-curated-page-top-section-right-content'>
                        <div className='qrates-curated-page-top-section-right-content-body'>
                            <div className='qrates-curated-page-top-section-right-content-body-title'>
                                <span>{selectedStoriesData?.storyType}</span>
                            </div>
                            <h3>qrates recommends</h3>
                            <h1>qrates recommends: {selectedStoriesData?.title}</h1>
                            <p>{selectedStoriesData?.content}</p>
                        </div>
                        <Link to={`/${selectedStoriesData?.slugs}`}>READ FULL STORY <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QratesCuratedTopSection
