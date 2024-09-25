import React, { useState } from 'react'
import '../../assets/css/forArtistsPageSectionCSS/forArtistsBottomSection.css'
import sectionImg1 from '../../assets/images/forArtistsPageImgs/bottomSectionImgs/sectionImg1.avif'
import sectionImg2 from '../../assets/images/forArtistsPageImgs/bottomSectionImgs/sectionImg2.avif'

const ForArtistsBottomSection = () => {

    const page1Data = {
        title: "ARTISTS ON QRATES",
        content: "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time.",
        user: "—SOL",
        sectionImg: sectionImg1,
        bgColor: '#fff804',
    };

    const page2Data = {
        title: "ARTISTS ON QRATES",
        content: "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.",
        user: "—Mason Lieberman (The Real Folk Blues, 2020)",
        sectionImg: sectionImg2,
        bgColor: 'rgb(255, 103, 17)',
    };
    const [selectedPageData, setSelectedPageData] = useState(page1Data);
    const [activeButton, setActiveButton] = useState(1);

    return (
        <>
            <div className='for-artists-page-bottom-section-container'
                style={{
                    backgroundColor: selectedPageData.bgColor
                }}
            >
                <div className='row mx-0 for-artists-page-bottom-section-content'>
                    <div className='col-md-6 for-artists-page-bottom-section-left-content'>
                        <div className='for-artists-page-bottom-section-left-content-title'>
                            <span>{selectedPageData?.title}</span>
                        </div>
                        <div className='for-artists-page-bottom-section-left-inner-content'>
                            <p>"{selectedPageData?.content}" <br /> {selectedPageData?.user}</p>
                        </div>
                        <div className='for-artists-page-bottom-section-left-content-pagination'>
                            <button onClick={() => { setSelectedPageData(page1Data); setActiveButton(1) }}
                                style={{
                                    backgroundColor: activeButton === 1 ? '#000' : 'transparent',
                                    color: activeButton === 1 ? '#fff' : '#000',
                                }}
                            >1</button>
                            <button onClick={() => { setSelectedPageData(page2Data); setActiveButton(2) }}
                                style={{
                                    backgroundColor: activeButton === 2 ? '#000' : 'transparent',
                                    color: activeButton === 2 ? '#fff' : '#000',
                                }}
                            >2</button>
                        </div>
                    </div>
                    <div className='col-md-6 for-artists-page-bottom-section-right-content'>
                        <img src={selectedPageData?.sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForArtistsBottomSection
