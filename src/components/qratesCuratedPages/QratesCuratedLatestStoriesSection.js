import React, { useRef } from 'react';
import '../../assets/css/qratesCuratedPageSectionCSS/qratesCuratedLatestStoriesSection.css';
import storiesData from '../../data/StoriesData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const QratesCuratedLatestStoriesSection = () => {
    const truncateText = (text, maxLength) => {
        if (!text) return ""; // Handle undefined or null
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    // Select the top 12 stories
    const selectedStoriesData = storiesData.slice(0, 12);

    // Reference for the stories container
    const storiesContainerRef = useRef(null);

    // Function to scroll the container to the left
    const scrollLeft = () => {
        storiesContainerRef.current.scrollBy({
            left: -300, // Scrolls 300px to the left
            behavior: 'smooth' // Smooth scrolling effect
        });
    };

    // Function to scroll the container to the right
    const scrollRight = () => {
        storiesContainerRef.current.scrollBy({
            left: 300, // Scrolls 300px to the right
            behavior: 'smooth' // Smooth scrolling effect
        });
    };

    return (
        <div className='qrates-curated-page-latest-stories-section-container'>
            <div className='qrates-curated-page-latest-stories-section-title'>
                <h2>Latest Stories</h2>
                <div className='qrates-curated-page-latest-stories-section-title-button'>
                    {/* Left and Right Arrow Icons */}
                    <FontAwesomeIcon icon={faArrowLeft} className='fw-bold' onClick={scrollLeft} style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faArrowRight} className='fw-bold' onClick={scrollRight} style={{ cursor: 'pointer' }} />
                    <Link to='/stories' target='_top'>
                        <button>browse all</button>
                    </Link>
                </div>
            </div>

            <div className='qrates-curated-page-latest-stories-section-content' ref={storiesContainerRef}>
                {selectedStoriesData.map((data, index) => (
                    <div
                        className='qrates-curated-page-latest-stories-section-content-boxs'
                        key={index}
                        style={{
                            backgroundImage: data?.bgImg ? `url(${data.bgImg})` : 'none'
                        }}
                    >
                        <div className='qrates-curated-page-latest-stories-section-content-boxs-title'>
                            <span>{data?.storyType}</span>
                        </div>
                        <div className='qrates-curated-page-latest-stories-section-content-boxs-body'>
                            <p>{truncateText(data?.title, 30)}</p> {/* Truncate title to 30 characters */}
                            <h3>{truncateText(data?.content, 50)}</h3> {/* Truncate content to 50 characters */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QratesCuratedLatestStoriesSection;
