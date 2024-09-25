import React, { useState } from 'react'
import '../../assets/css/homePageSectionCSS/homePageForFansSection.css'
import defaultBgImg from '../../assets/images/homePageImgs/forFansSectionImgs/defaultBgImg.avif'
import bgImg1 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg1.avif'
import bgImg2 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg2.avif'
import bgImg3 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg3.avif'
import bgImg4 from '../../assets/images/homePageImgs/forFansSectionImgs/bgImg4.avif'

const HomePageForFansSection = () => {
    const sectionData = [
        {
            title: "Records",
            bgImg: bgImg1,
        },
        {
            title: "Cassettes",
            bgImg: bgImg2,
        },
        {
            title: "Stories",
            bgImg: bgImg3,
        },
        {
            title: "Qrates Curated",
            bgImg: bgImg4,
        },
    ]

    const [sectionBgImg,setSectionBgImg] = useState(defaultBgImg);
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
                sectionData?.map((data,index)=>(
                    <div key={index}>
                        <h1 onMouseEnter={()=>setSectionBgImg(data?.bgImg)} onMouseLeave={()=>setSectionBgImg(defaultBgImg)}>{data?.title}</h1>
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
