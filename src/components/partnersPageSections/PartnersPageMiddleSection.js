import React from 'react'
import '../../assets/css/partnersPageSectionCSS/partnersPageMiddleSection.css'
import sectionImg from '../../assets/images/partnersPageImgs/middleSectionImg.png'

const PartnersPageMiddleSection = () => {
  return (
    <>
      <div className='partners-page-middle-section-container'>
        <img src={sectionImg} className='img-fluid' alt='middle-section-img'/>
      </div>
      <div className='partners-page-bottom-section-title'>
        <span>RETAIL STORE NETWORK</span>
        <h1>150+ stores worldwide</h1>
        <p>Qrates takes great care to cultivate relationships with our network of 150—and growing—retail partners. We work with all of them closely because walking into a record store, chance discovery and recommendations by real people are all a big part of what makes vinyl such a special experience.</p>
      </div>
    </>
  )
}

export default PartnersPageMiddleSection
