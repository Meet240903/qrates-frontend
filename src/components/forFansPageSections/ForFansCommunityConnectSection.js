import React from 'react'
import '../../assets/css/forFansPageSectionsCSS/forFansCommunityConnectSection.css'
import sectionImg1 from '../../assets/images/forFansPageImgs/communityConnetSectionImg.avif'
import sectionImg2 from '../../assets/images/forFansPageImgs/featuresSectionImg.avif'
import sectionImg3 from '../../assets/images/forFansPageImgs/supportSectionImg.avif'

const ForFansCommunityConnectSection = () => {
    const sectionData = [
        {
            spanTitle: "community",
            mainTitle: "Up to 85% of revenue is returned to the artist.",
            content: "At Qrates, our priority is to create a vibrant music community where artists and fans can come together. We're committed to offering a high revenue return rate to artists and bridging the gap between them and their fans. Many talented artists have already shared their exclusive works with their fans all around the world through Qrates. We hope that Qrates will help even more artists and fans build relationships through the power of music.",
            sectionImg: sectionImg1,
            backgroundColor: 'rgb(220, 253, 213)',
            Direction: true,
        },
        {
            spanTitle: "features",
            mainTitle: "Stay up to date on all of your past and future favorite releases",
            content: 'Use our "Watch" feature to keep track of new releases by your favorite artists and participate in  "Crowdfunding" to support artists and bring their music to life, and send a "Repress Request" to request artists to repress a project you have missed out on. If a project came with a digital download or bonus track, you can download the music at any time and enjoy it on your mobile device or other devices.',
            sectionImg: sectionImg2,
            backgroundColor: 'rgb(228, 229, 222)',
            topBorder: true,
        },
        {
            spanTitle: "support",
            mainTitle: "Global shipping and customer support in specialized packing from 3 continents.",
            content: "All records and cassettes purchased from Qrates are carefully packed one by one in our affiliated warehouses in the U.S., U.K., and Japan in special packaging and shipped to our customers worldwide. Our customer support team is ready to handle inquiries regarding delivery status after purchase, as well as any problems that may arise.",
            sectionImg: sectionImg3,
            backgroundColor: 'rgb(248, 216, 216)',
            topBorder: true,
            Direction: true,
        },
    ]
    return (
        <>
            <div className='for-fans-page-community-connection-section-container'>
                <div className='for-fans-page-community-connection-section-title'>
                    <h1>We connect artists and fans directly</h1>
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 for-fans-page-community-connection-section-content' key={index}
                            style={{
                                backgroundColor: data.backgroundColor,
                                borderTop: data?.topBorder ? '2px solid #000' : 'none',
                                flexDirection: data?.Direction ?? 'row-reverse'
                            }}
                        >
                            <div className='col-md-6 for-fans-page-community-connection-section-left-content'>
                                <div className='for-fans-page-community-connection-section-left-content-title'>
                                    <span>{data?.spanTitle}</span>
                                </div>
                                <div className='for-fans-page-community-connection-section-left-content-body'>
                                    <h1>{data?.mainTitle}</h1>
                                    <p>{data?.content}</p>
                                </div>
                            </div>
                            <div className='col-md-6 for-fans-page-community-connection-section-right-content'>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ForFansCommunityConnectSection
