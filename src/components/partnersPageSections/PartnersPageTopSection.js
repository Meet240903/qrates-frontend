import React from 'react'
import '../../assets/css/partnersPageSectionCSS/partnersPageTopSection.css'
import sectionImg1 from '../../assets/images/partnersPageImgs/topSectionImgs/sectionImg1.jpg'
import sectionImg2 from '../../assets/images/partnersPageImgs/topSectionImgs/sectionImg2.webp'
import sectionImg3 from '../../assets/images/partnersPageImgs/topSectionImgs/sectionImg3.png'
import sectionImg4 from '../../assets/images/partnersPageImgs/topSectionImgs/sectionImg4.webp'

const PartnersPageTopSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            type: "VINYL PRESSING",
            title: "GZ Media",
            content: "Our main production partner, GZ Media has been one of the EU's leading vinyl pressing plants since 1951, consistently pressing some of Europe's most iconic 12s. They've used this time to constantly improve; incorporating bleeding-edge technology into packaging capabilities that allow Qrates artists to make objects that look, feel, and sound incredible.",
            borderRight: true,
            borderBottom: true,
        },
        {
            sectionImg: sectionImg2,
            type: "CASSETTE DUPLICATION",
            title: "NAC",
            content: "Our partners at the National Audio Company have been providing services to the recording industry for 42 years. Proudly manufactured in the USA, National Audio Company combines innovative, in-house technology and years of production expertise to manufacture the best audio cassettes available in the world today. With every cassette project, Qrates artists can partake in this unique musical tradition and give their fans something truly special.",
            borderBottom: true,
        },
        {
            sectionImg: sectionImg3,
            type: "FULFILLMENT & STORAGE",
            title: "Whiplash",
            content: "Whiplash Merchandising has multiple centers in the US and UK that Qrates users can choose to direct their product and minimize shipping costs. They work with all industry-standard carriers and offer optional storage to our artists, even after a crowdfunding or pre-order campaign has ended.",
            borderRight: true,
        },
        {
            sectionImg: sectionImg4,
            type: "FULFILLMENT & STORAGE",
            title: "OPENLOGI",
            content: "OPENLOGI is Japan's largest logistics platform providing logistics services to over 10,000 businesses across 50+ warehouses in Japan. Similarly to our UK and US logistic partners, artists that choose our Japanese facility for storage can have their vinyl and cassettes stored for free and shipping stocks can be done anytime from your artist dashboard.",
        },
    ]
    return (
        <>
            <div className='partners-page-top-section-container'>
                <div className='partners-page-top-section-title'>
                    <p>These are the valued partners we work with to get things done.</p>
                </div>
                <div className='row mx-0 partners-page-top-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='col-md-6 partners-page-top-section-content-boxs' key={index}
                                style={{
                                    borderRight: data?.borderRight ? '2px solid #000' : '',
                                    borderBottom: data?.borderBottom ? '2px solid #000' : '',
                                }}
                            >
                                <div className='partners-page-top-section-content-boxs-img'
                                    style={{
                                        backgroundImage: `url(${data?.sectionImg})`,
                                    }}
                                >
                                </div>
                                <div className='partners-page-top-section-content-boxs-body'>
                                    <span>VINYL PRESSING</span>
                                    <h1>GZ Media</h1>
                                    <p>Our main production partner, GZ Media has been one of the EU's leading vinyl pressing plants since 1951, consistently pressing some of Europe's most iconic 12"s. They've used this time to constantly improve; incorporating bleeding-edge technology into packaging capabilities that allow Qrates artists to make objects that look, feel, and sound incredible.</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PartnersPageTopSection
