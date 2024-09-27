import React from 'react'
import QratesCuratedTopSection from './qratesCuratedPages/QratesCuratedTopSection'
import QratesCuratedLatestStoriesSection from './qratesCuratedPages/QratesCuratedLatestStoriesSection'
import QratesCuratedReleasOfTheWeek from './qratesCuratedPages/QratesCuratedReleasOfTheWeek'
import QratesCuratedArtistToolkit from './qratesCuratedPages/QratesCuratedArtistToolkit'

const QratesCuratedPage = () => {
    return (
        <>
            <div style={{ backgroundColor: '#E4E5DE' }}>
                <QratesCuratedTopSection />
                <QratesCuratedLatestStoriesSection />
                <QratesCuratedReleasOfTheWeek />
                <QratesCuratedArtistToolkit />
            </div>
        </>
    )
}

export default QratesCuratedPage
