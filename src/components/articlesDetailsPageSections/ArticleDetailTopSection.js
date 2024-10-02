import React from 'react'
import '../../assets/css/articlesDetailsPageSectionsCSS/articlesDetailsTopSection.css'

const ArticleDetailTopSection = ({ sectionData }) => {
  return (
    <>
      <div className='articles-details-page-top-section-container'>
        <div className='articles-details-page-top-section-content'
          style={{
            backgroundImage: `url(${sectionData?.sectionImg})`
          }}
        >
          <div className='articles-details-page-top-section-inner-content'>
            <div className='articles-details-page-top-section-content-genre-section'>
              {
                sectionData?.articlesDetailsData?.topSectionData?.genreData?.map((data, index) => (
                  <div className='articles-details-page-top-section-content-genre-section-title' key={index}>
                    <span>{data?.genreTitle}</span>
                  </div>
                ))
              }
            </div>
            <h1>{sectionData?.articleTitle}</h1>
          </div>
        </div>
        <div className='articles-details-page-top-section-title'>
          <h2>{sectionData?.articleContent}</h2>
        </div>
        <div className='row mx-0 articles-details-page-top-section-content1'>
          <div className='col-md-6 articles-details-page-top-section-left-content1'>
          </div>
          <div className='col-md-6 articles-details-page-top-section-right-content1'>
            {
              sectionData?.articlesDetailsData?.topSectionData?.contentData?.map((data, index) => (
                <div key={index} className='articles-details-page-top-section-right-inner-content1'>
                  <h4>{data?.title}</h4>
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

export default ArticleDetailTopSection
