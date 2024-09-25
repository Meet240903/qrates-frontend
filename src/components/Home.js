import React from 'react'
import HomePageTopSection from './homePageSections/HomePageTopSection'
import HomePageForFansSection from './homePageSections/HomePageForFansSection'
import HomePageForArtistsSection from './homePageSections/HomePageForArtistsSection'
import HomePageArtistToolkitSection from './homePageSections/HomePageArtistToolkitSection'
import HomePageTryItNowSection from './homePageSections/HomePageTryItNowSection'
import HomePageBottomSection from './homePageSections/HomePageBottomSection'

const Home = () => {
    return (
        <>
            <HomePageTopSection />
            <HomePageForFansSection />
            <HomePageForArtistsSection />
            <HomePageArtistToolkitSection />
            <HomePageTryItNowSection />
            <HomePageBottomSection />
        </>
    )
}

export default Home
