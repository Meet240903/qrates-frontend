import React, { useState } from 'react'
import '../../assets/css/homePageSectionCSS/homeArtistToolkitSection.css'
import defaultBgImg from '../../assets/images/homePageImgs/artistToolkitSectionImgs/defaultBgImg.avif'
import bgImg1 from '../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg1.avif'
import bgImg2 from '../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg2.avif'
import bgImg3 from '../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg3.avif'
import bgImg4 from '../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg4.avif'
import bgImg5 from '../../assets/images/homePageImgs/artistToolkitSectionImgs/sectionBgImg5.avif'

const HomePageArtistToolkitSection = () => {
    const sectionData = [
        {
            title: "Vinyl Knowledge",
            bgImg: bgImg1,
        },
        {
            title: "Distribution & Promotion",
            bgImg: bgImg2,
        },
        {
            title: "Mixing & Mastering",
            bgImg: bgImg3,
        },
        {
            title: "Inspiration",
            bgImg: bgImg4,
        },
        {
            title: "Qrates Tips",
            bgImg: bgImg5,
        },
    ]

    const [sectionBgImg, setSectionBgImg] = useState(defaultBgImg);
    return (
        <>
            <div className='home-page-artist-toolkit-section-container'
                style={{
                    backgroundImage: `url(${sectionBgImg})`,
                }}
            >
                <div className='home-page-artist-toolkit-section-title'>
                    <p>artist toolkit</p>
                </div>
                <div className='home-page-artist-toolkit-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div key={index}>
                                <h1 onMouseEnter={() => setSectionBgImg(data?.bgImg)} onMouseLeave={() => setSectionBgImg(defaultBgImg)}>{data?.title}</h1>
                            </div>
                        ))
                    }
                </div>
                <p className='home-page-artist-toolkit-section-footer-link'>The latest from the Artist toolkit →</p>
            </div>
        </>
    )
}

export default HomePageArtistToolkitSection
