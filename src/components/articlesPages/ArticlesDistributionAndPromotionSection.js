import React from 'react'
import articlesPageData from '../../data/ArticlesPageData';
import { Link } from 'react-router-dom';

const ArticlesDistributionAndPromotionSection = () => {
    const truncateTitle = (title, maxLength) => {
        if (!title) return ""; // Return empty string if no title is provided

        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    }
    const selectedArticlesData = articlesPageData?.filter(index => index?.articleType === 'distribution & promotion')
    return (
        <>
            <div className='articles-page-most-recent-section-container'>
                <div className='row mx-0 articles-page-most-recent-section-content'>
                    {
                        selectedArticlesData?.map((data, index) => (
                            <div className='col-md-4 articles-page-most-recent-section-content-box' key={index}>
                                <div className='articles-page-most-recent-section-inner-content-box'>
                                    <Link to={`/articles-details-page/${data?.slugs}`} target='_top' style={{ textDecoration: 'none' }}>
                                        <div className='articles-page-most-recent-section-inner-content-box-img'
                                            style={{
                                                backgroundImage: data?.sectionImg ?
                                                    `url(${data.sectionImg})` : 'none'
                                            }}
                                        >
                                            <div className='articles-page-most-recent-section-inner-content-box-img-span-box'>
                                                <span>{data?.articleType}</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='articles-page-most-recent-section-inner-content-box-body'>
                                        <h3>{data?.articleTitle}</h3>
                                        <p>{truncateTitle(data?.articleContent, 80)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ArticlesDistributionAndPromotionSection
