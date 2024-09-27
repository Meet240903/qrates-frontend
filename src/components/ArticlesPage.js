import React, { useState } from 'react'
import '../assets/css/articlesPage.css'
import ArticlesMostRecentSection from './articlesPages/ArticlesMostRecentSection'
import ArticlesVinylKnowledgeSection from './articlesPages/ArticlesVinylKnowledgeSection'
import ArticlesInspirationSection from './articlesPages/ArticlesInspirationSection'
import ArticlesMixingAndMarketing from './articlesPages/ArticlesMixingAndMarketing'
import ArticlesDistributionAndPromotionSection from './articlesPages/ArticlesDistributionAndPromotionSection'
import ArticlesQratesTips from './articlesPages/ArticlesQratesTips'

const ArticlesPage = () => {
    const articlesHeaderData = [
        {
            title: "Most Recent",
        },
        {
            title: "Vinyl Knowledge",
        },
        {
            title: "Inspiration",
        },
        {
            title: "Mixing & Mastering",
        },
        {
            title: "Distribution & Promotion",
        },
        {
            title: "Qrates Tips",
        },
    ]
    const [selectedPage, setSelectedPage] = useState(0);
    return (
        <>
            <div className='articles-page-section-container'>
                <div className='articles-page-section-title'>
                    <h1>ARTIST TOOLKIT</h1>
                    <p>The Qrates team is here to make your project a success. Here are some tips & tricks you might find useful based on the status of your project.</p>
                </div>
                <div className='articles-page-section-title-links'>
                    {
                        articlesHeaderData?.map((data, index) => (
                            <div key={index}>
                                <h4 onClick={() => setSelectedPage(index)}
                                    style={{
                                        textDecoration: selectedPage === index ? 'underline' : '',
                                    }}
                                >{data?.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                selectedPage === 0 && <ArticlesMostRecentSection />
            }
            {
                selectedPage === 1 && <ArticlesVinylKnowledgeSection />
            }
            {
                selectedPage === 2 && <ArticlesInspirationSection />
            }
            {
                selectedPage === 3 && <ArticlesMixingAndMarketing />
            }
            {
                selectedPage === 4 && <ArticlesDistributionAndPromotionSection />
            }
            {
                selectedPage === 5 && <ArticlesQratesTips />
            }
        </>
    )
}

export default ArticlesPage
