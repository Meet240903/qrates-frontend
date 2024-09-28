import React, { useState } from 'react';
import sectionImg1 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg1.png';
import sectionImg2 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg2.png';
import sectionImg3 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg3.png';
import sectionImg4 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg4.png';
import '../../../assets/css/recordsProjectDetailsPagesCSS/middleSectionPagescss/middleSectionProductImgSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MiddleSectionProductImgsSection = () => {
    const sliderData = [
        { sliderImg: sectionImg1 },
        { sliderImg: sectionImg2 },
        { sliderImg: sectionImg3 },
        { sliderImg: sectionImg4 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="records-project-details-page-middle-section-left-content-product-imgs-slider-container">
            <img src={sliderData[currentIndex].sliderImg} alt={`Slide ${currentIndex}`} className="records-project-details-page-middle-section-left-content-product-imgs-main-image" />

            <div className="records-project-details-page-middle-section-left-content-product-imgs-thumbnail-container">

                <div>
                    {sliderData.map((item, index) => (
                        <img
                            key={index}
                            src={item.sliderImg}
                            alt={`Thumbnail ${index}`}
                            className={`records-project-details-page-middle-section-left-content-product-imgs-thumbnail ${currentIndex === index ? 'records-project-details-page-middle-section-left-content-product-imgs-active' : ''}`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
                <div className='records-project-details-page-middle-section-left-content-product-imgs-slider-buttons'>
                    <button onClick={handlePrev} className="records-project-details-page-middle-section-left-content-product-imgs-arrow"><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button onClick={handleNext} className="records-project-details-page-middle-section-left-content-product-imgs-arrow"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default MiddleSectionProductImgsSection;
