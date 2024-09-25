import React from 'react'
import ForArtistsTopSection from './forArtistsPageSections/ForArtistsTopSection'
import ForArtistsFormatSection from './forArtistsPageSections/ForArtistsFormatSection'
import ForArtistsMiddleSection from './forArtistsPageSections/ForArtistsMiddleSection'
import ForArtistsStartNewProjectSection from './forArtistsPageSections/ForArtistsStartNewProjectSection'
import ForArtistsCommunitySection from './forArtistsPageSections/ForArtistsCommunitySection'
import ForArtistsBottomSection from './forArtistsPageSections/ForArtistsBottomSection'
import HomePageTryItNowSection from './homePageSections/HomePageTryItNowSection'

const ForArtists = () => {
    return (
        <>
            <ForArtistsTopSection />
            <ForArtistsFormatSection />
            <ForArtistsMiddleSection />
            <ForArtistsStartNewProjectSection />
            <ForArtistsCommunitySection />
            <ForArtistsBottomSection />
            <HomePageTryItNowSection />
        </>
    )
}

export default ForArtists
