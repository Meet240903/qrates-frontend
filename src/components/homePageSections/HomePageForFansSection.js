import React, { useState } from 'react'
import '../../assets/css/homePageSectionCSS/homePageForFansSection.css'
import defaultBgImg from '../../assets/images/homePageImgs/forFansSectionImgs/defaultBgImg.avif'
import bgImg1 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg1.avif'
import bgImg2 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg2.avif'
import bgImg3 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg3.avif'
import bgImg4 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg4.avif'
import { Link } from 'react-router-dom'

const HomePageForFansSection = () => {
    const sectionData = [
        {
            title: "Records",
            bgImg: bgImg1,
            slugs: 'records'
        },
        {
            title: "Cassettes",
            bgImg: bgImg2,
            slugs: 'cassates'
        },
        {
            title: "Stories",
            bgImg: bgImg3,
            slugs: 'stories'
        },
        {
            title: "Qrates Curated",
            bgImg: bgImg4,
            slugs: 'qrates-curated'
        },
    ]

    const [sectionBgImg, setSectionBgImg] = useState(defaultBgImg);
    return (
        <>
            <div className='home-page-for-fans-section-container'
                style={{
                    backgroundImage: `url(${sectionBgImg})`,
                }}
            >
                <div className='home-page-for-fans-section-title'>
                    <p>for fans</p>
                </div>
                <div className='home-page-for-fans-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div key={index}>
                                <Link to={`/${data?.slugs}`} style={{color:'#fff'}} target='_top'>
                                    <h1 onMouseEnter={() => setSectionBgImg(data?.bgImg)} onMouseLeave={() => setSectionBgImg(defaultBgImg)}>{data?.title}</h1>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <p className='home-page-for-fans-section-footer-link'>The latest from the Qrates community →</p>
            </div>
        </>
    )
}

export default HomePageForFansSection
