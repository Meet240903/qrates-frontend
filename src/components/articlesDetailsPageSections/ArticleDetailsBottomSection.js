import React from 'react'
import '../../assets/css/articlesDetailsPageSectionsCSS/articlesDetailsBottomSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ArticleDetailsBottomSection = ({ sectionData }) => {
    return (
        <>
            {
                sectionData?.map((data, index) => (
                    <div className='articles-details-page-bottom-section-container' key={index}>
                        <div className='articles-details-page-bottom-section-img-body'
                            style={{
                                backgroundImage: `url(${data?.sectionImg})`
                            }}
                        >
                        </div>
                        <div className='row mx-0 articles-details-page-bottom-section-content'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6 articles-details-page-bottom-section-right-content'>
                                {
                                    data?.contentData?.map((data, index) => (
                                        <div className='articles-details-page-bottom-section-right-content-body' key={index}>
                                            <h4>{data?.title}</h4>
                                            <p>{data?.content}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='articles-details-page-bottom-section-footer'>
                <p>For more advice and insights, check out our other articles from the toolkit.</p>
                <Link to='/articles' target='_top'>
                    <button>view more toolkit <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </>
    )
}

export default ArticleDetailsBottomSection
