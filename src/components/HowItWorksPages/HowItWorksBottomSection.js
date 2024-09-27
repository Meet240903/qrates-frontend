import React from 'react'
import '../../assets/css/howItWorksPagesCSS/howItWorksBottomSection.css'
import sectionImg1 from '../../assets/images/howItWorksPageImgs/menufacturingSectionImg.avif'
import sectionImg2 from '../../assets/images/howItWorksPageImgs/sellingSectionImg.avif'
import sectionImg3 from '../../assets/images/howItWorksPageImgs/crowdfundingSectionImg.avif'
import sectionImg4 from '../../assets/images/howItWorksPageImgs/distributionSectionImg.avif'
import sectionImg5 from '../../assets/images/howItWorksPageImgs/shippingStorageSectionImg.avif'
import sectionImg6 from '../../assets/images/howItWorksPageImgs/supportSectionImg.avif'
import { HashLink as Link } from 'react-router-hash-link'

const HowItWorksBottomSection = () => {
    const headerData = [
        {
            title: "manufacturing",
            link: "manufacturing"
        },
        {
            title: "selling",
            link: "selling"
        },
        {
            title: "crowdfunding",
            link: "crowdfunding"
        },
        {
            title: "distribution",
            link: "distribution"
        },
        {
            title: "shipping & storage",
            link: "shippingStorage"
        },
        {
            title: "support",
            link: "support"
        },
    ]
    const sectionData = [
        {
            spanTitle: "manufacturing",
            link: "manufacturing",
            mainTitle: "Our trusted manufacturing partners use their expertise to create your product with care.",
            content: "At Qrates, our passion for vinyl record manufacturing is shared with our trusted manufacturers, including GZ MEDIA as well as other reliable partners who are trusted by major labels around the world. With experience spanning 70 years, GZ is the world's largest and oldest record manufacturing company. For cassette tape manufacturing, we have entrusted the services of National Audio Company in the US, who have been providing top-quality products for over 40 years.",
            sectionImg: sectionImg1,
            backgroundColor: 'rgb(248, 216, 216)',
        },
        {
            spanTitle: "selling",
            link: "selling",
            mainTitle: "Sell your products directly to fans on Qrates, while keeping 85% of revenue",
            content: 'By setting up a Qrates page storefront, which can be set up in as little as 10 minutes, you can directly sell your products to music fans and record stores around the world. You can easily start selling by setting the selling price, wholesale price (selectable from four currencies: USD, EUR, GBP, and JPY), and production quantity. Qrates also supports pre-order sales functions that accept orders until the completion of the product and crowdfunding where you can collect orders in advance before entering the manufacturing process. The Qrates commission fee for sales is 15%, and the remaining 85% is returned to the artist.',
            sectionImg: sectionImg2,
            backgroundColor: 'rgb(73, 119, 117)',
            topBorder: true,
        },
        {
            spanTitle: "crowdfunding",
            link: "crowdfunding",
            mainTitle: "Crowdfunding to start production powered by fan pledges",
            content: "Before starting the manufacturing process, you can use your Qrates page to collect orders from your fans in advance. The number of orders and the amount of money collected will determine the final number of copies to be manufactured before production begins. No need to pay for production in advance, no need to worry about running out of stock or having excess inventory. Alternatively, you can also choose to create inventory by ordering more copies on top of your fan pledges and continue to sell them on your Qrates page. Crowdfunding on Qrates is a flexible option that caters to various use cases.",
            sectionImg: sectionImg3,
            backgroundColor: 'rgb(228, 229, 222)',
            topBorder: true,
            Direction: true,
        },
        {
            spanTitle: "distribution",
            link: "distribution",
            mainTitle: "Wholesale to all of our partnered record stores around the world.",
            content: "When you start selling on your Qrates page, you can also collect orders from over 150 partnered record stores and distributors all around the world. You get to set your own wholesale price and sales volume, so you're always in control. This means that you can sell your records directly to your fans, while also reaching out to new fans through our partnered stores, and expand your record business in a fully integrated way.",
            sectionImg: sectionImg4,
            backgroundColor: 'rgb(255, 103, 17)',
            topBorder: true,
        },
        {
            spanTitle: "shipping & storage",
            link: "shippingStorage",
            mainTitle: "Once your products are made, we'll store them for free and ship them to your fans for you.",
            content: "Qrates has warehouses in three locations around the world: the US, the UK, and Japan. Once your product is finished, we ship it to your designated warehouse for storage and shipping. The storage of your inventory is free, and every time a product is purchased on your Qrates page, we will take care of the packaging and shipping one by one. You no longer have to worry about securing storage space for your inventory or the hassle of shipping your products - we've got you covered!",
            sectionImg: sectionImg5,
            backgroundColor: 'rgb(228, 229, 222)',
            topBorder: true,
            Direction: true,
        },
        {
            spanTitle: "support",
            link: "support",
            mainTitle: "Artist Toolkit and Support You Can Rely On",
            content: "At Qrates, we're here to help you out with anything you need - whether it's technical knowledge for making records and cassettes, advice on running your music business, or just how to use our service and system. If you have any questions that aren't answered in our FAQ, just hit us up and we'll be happy to assist you. We're available to answer your questions in both English and Japanese. We've also got an Artist Toolkit that's packed with useful tips and tricks on music production, analog media, and how to get the most out of Qrates. Make sure to check it out and see if it can help you take your music to the next level!",
            sectionImg: sectionImg6,
            backgroundColor: 'rgb(248, 216, 216)',
            topBorder: true,
        },
    ]
    return (
        <>
            <div className='how-it-works-page-bottom-section-container'>
                <div className='how-it-works-page-bottom-section-title-header'>
                    {
                        headerData?.map((data, index) => (
                            <div key={index}>
                                <Link to={`#${data?.link}`} style={{ textDecoration: 'none' }}>
                                    <h3>{data?.title}</h3>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 how-it-works-page-community-connection-section-content' key={index}
                            style={{
                                backgroundColor: data.backgroundColor,
                                borderTop: data?.topBorder ? '2px solid #000' : 'none',
                                flexDirection: data?.Direction ?? 'row-reverse'
                            }}
                            id={data?.link} // Ensure the id matches the link
                        >
                            <div className='col-md-6 how-it-works-page-community-connection-section-left-content'>
                                <div className='how-it-works-page-community-connection-section-left-content-title'>
                                    <span>{data?.spanTitle}</span>
                                </div>
                                <div className='how-it-works-page-community-connection-section-left-content-body'>
                                    <h1>{data?.mainTitle}</h1>
                                    <p>{data?.content}</p>
                                </div>
                            </div>
                            <div className='col-md-6 how-it-works-page-community-connection-section-right-content'>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HowItWorksBottomSection
