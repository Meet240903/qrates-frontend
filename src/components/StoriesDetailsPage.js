import React from 'react'
import { useParams } from 'react-router-dom'
import StoriesDetailsTopSection from './storiesDetailsPageSections/StoriesDetailsTopSection'
import StoriesDetailsMiddleSection from './storiesDetailsPageSections/StoriesDetailsMiddleSection'
import StoriesDetailsBottomSection from './storiesDetailsPageSections/StoriesDetailsBottomSection'
import storiesData from '../data/StoriesData'

const StoriesDetailsPage = () => {
    const { slugs } = useParams()
    const data = storiesData?.find(index => index?.slugs === slugs)
    return (
        <>
            <StoriesDetailsTopSection sectionData={data} />
            <StoriesDetailsMiddleSection sectionData={data?.storiesDetailsData?.middleSectionData} />
            <StoriesDetailsBottomSection sectionData={data?.storiesDetailsData?.bottomSectionData} />
        </>
    )
}

export default StoriesDetailsPage
