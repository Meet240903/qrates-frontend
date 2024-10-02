import React from 'react'
import ArticleDetailTopSection from './articlesDetailsPageSections/ArticleDetailTopSection'
import { useParams } from 'react-router-dom'
import articlesPageData from '../data/ArticlesPageData';
import ArticleDetailsBottomSection from './articlesDetailsPageSections/ArticleDetailsBottomSection';

const ArticlesDetailsPage = () => {
    const { slugs } = useParams();
    const data = articlesPageData?.find(index => index.slugs === slugs)
    return (
        <>
            <ArticleDetailTopSection sectionData={data} />
            <ArticleDetailsBottomSection sectionData={data?.articlesDetailsData?.bottomSectionData} />
        </>
    )
}

export default ArticlesDetailsPage
