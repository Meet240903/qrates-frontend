import React from 'react'
import ForFansTopSection from './forFansPageSections/ForFansTopSection'
import ForFansCommunityConnectSection from './forFansPageSections/ForFansCommunityConnectSection'
import ForArtistsCommunitySection from './forArtistsPageSections/ForArtistsCommunitySection'
import ForArtistsBottomSection from './forArtistsPageSections/ForArtistsBottomSection'
import HomePageBottomSection from './homePageSections/HomePageBottomSection'

const ForFans = () => {
    return (
        <>
            <ForFansTopSection />
            <ForFansCommunityConnectSection />
            <ForArtistsCommunitySection />
            <ForArtistsBottomSection />
            <HomePageBottomSection />
        </>
    )
}

export default ForFans
