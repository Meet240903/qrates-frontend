import React from 'react'
import '../../assets/css/forArtistsPageSectionCSS/forArtistsTopSection.css'
import sectionImg1 from '../../assets/images/forArtistsPageImgs/topSectionImgs/sectionImg1.avif'
import sectionImg2 from '../../assets/images/forArtistsPageImgs/topSectionImgs/sectionImg2.avif'
import sectionImg3 from '../../assets/images/forArtistsPageImgs/topSectionImgs/sectionImg3.svg'

const ForArtistsTopSection = () => {
    return (
        <>
            <div className='for-artists-page-top-section-container'>
                <div className='for-artists-page-top-section-content'>
                    <div className='for-artists-page-top-section-content-title'>
                        <p>for artists</p>
                    </div>
                    <h1>Music in your hands. Without the barriers.</h1>
                    <p className='for-artists-page-top-section-inner-content'>
                        Full-service production, a global retail network, customer support - and you keep up to 85% of profits. ↓
                    </p>
                </div>
                <img src={sectionImg1} className='for-artist-page-top-section-img1' alt='section-img' />
                <img src={sectionImg2} className='for-artist-page-top-section-img2' alt='section-img' />
                <img src={sectionImg3} className='for-artist-page-top-section-img3' alt='section-img' />
            </div>
        </>
    )
}

export default ForArtistsTopSection
