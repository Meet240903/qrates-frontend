import React from 'react'
import QratesCuratedTopSection from './qratesCuratedPages/QratesCuratedTopSection'
import QratesCuratedLatestStoriesSection from './qratesCuratedPages/QratesCuratedLatestStoriesSection'

const QratesCuratedPage = () => {
    return (
        <>
            <div style={{ backgroundColor: '#E4E5DE' }}>
                <QratesCuratedTopSection />
                <QratesCuratedLatestStoriesSection />
            </div>
        </>
    )
}

export default QratesCuratedPage
