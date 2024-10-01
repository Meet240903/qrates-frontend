import React, { useState } from 'react';
import sectionImg1 from '../../assets/images/aboutusPageImgs/sliderSectionImgs/sectionImg1.jpg';
import sectionImg2 from '../../assets/images/aboutusPageImgs/sliderSectionImgs/sectionImg2.jpg';
import sectionImg3 from '../../assets/images/aboutusPageImgs/sliderSectionImgs/sectionImg3.jpg';
import sectionImg4 from '../../assets/images/aboutusPageImgs/sliderSectionImgs/sectionImg4.jpg';
import sectionImg5 from '../../assets/images/aboutusPageImgs/sliderSectionImgs/sectionImg5.jpg';
import '../../assets/css/aboutusPageSectionsCSS/aboutPageSliderSection.css';

const AboutPageSliderSection = () => {
    const sectionData = [
        { sectionImg: sectionImg1 },
        { sectionImg: sectionImg2 },
        { sectionImg: sectionImg3 },
        { sectionImg: sectionImg4 },
        { sectionImg: sectionImg5 },
    ];

    const [showImg, setShowImg] = useState({ image: sectionData[0], index: 0 });
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleImageChange = (data, index) => {
        // Start fading out
        setIsTransitioning(true);

        // Wait for transition to end before switching the image
        setTimeout(() => {
            setShowImg({ image: data, index });
            setIsTransitioning(false); // Fade in the new image
        }, 200); // Match the timeout with CSS transition duration
    };

    return (
        <>
            <div className='about-us-page-slider-section-container'>
                <img
                    src={showImg.image?.sectionImg}
                    className={`img-fluid ${isTransitioning ? 'hide' : ''}`}
                    alt='section-img'
                />
                <div className='about-us-page-slider-section-slider-links'>
                    {sectionData?.map((data, index) => (
                        <div key={index}>
                            <button
                                onClick={() => handleImageChange(data, index)}
                                style={{
                                    backgroundColor: showImg.index === index ? '#000' : '#fff',
                                    color: showImg.index === index ? '#fff' : '#000',
                                }}
                            >
                                {index + 1}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutPageSliderSection;
