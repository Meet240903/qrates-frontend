import React, { useRef, useState } from 'react'
import '../../assets/css/storiesDetailsPageSectionCSS/storiesDetailsTopSection.css'
import { faBackwardFast, faCircleDot, faForwardFast, faPause, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StoriesDetailsTopSection = ({ sectionData }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleNext = () => {
        audioRef.current.currentTime += 10; // Skip 10 seconds forward
    };

    const handlePrev = () => {
        audioRef.current.currentTime -= 10; // Skip 10 seconds backward
    };
    return (
        <>
            <div className='stories-details-page-top-section-container'>
                <img src={sectionData?.bgImg} className='img-fluid' alt='section-top-img' />
                <div className='stories-details-page-top-section-title'>
                    <div className='stories-details-page-top-section-title-box'>
                        <span>{sectionData?.storyType}</span>
                    </div>
                    <h2>{sectionData?.pageTitle}</h2>
                    <h1>{sectionData?.title}</h1>
                    <p>{sectionData?.content}</p>
                </div>
                <div className='row mx-0 stories-details-page-top-section-content'>
                    <div className='col-md-6 stories-details-page-top-section-left-content'>
                        {
                            sectionData.storiesDetailsData.topSectionData.sectionAudio && <div className='stories-details-page-top-section-left-content-box'>
                                <div className='stories-details-page-top-section-left-content-box-img'>
                                    <div className='stories-details-page-top-section-left-content-box-title'>
                                        <span>listen now</span>
                                    </div>
                                    <img src={sectionData?.storiesDetailsData?.topSectionData?.sectionImg} className='img-fluid' alt='section-img' />
                                </div>
                                <div className='stories-details-page-top-section-left-content-box-audio-section'>
                                    <audio
                                        ref={audioRef}
                                    >
                                        <source src={sectionData.storiesDetailsData.topSectionData.sectionAudio} type="audio/mpeg" />
                                    </audio>
                                    <div className="records-project-details-page-top-section-audio-controls">
                                        <FontAwesomeIcon icon={faBackwardFast}
                                            onClick={handlePrev}
                                            className='records-project-details-page-top-section-audio-controls-icons' />
                                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}
                                            className='records-project-details-page-top-section-audio-controls-icons'
                                            onClick={handlePlayPause} />
                                        <FontAwesomeIcon icon={faForwardFast}
                                            className='records-project-details-page-top-section-audio-controls-icons'
                                            onClick={handleNext} />
                                    </div>
                                    <p>{sectionData?.storiesDetailsData?.topSectionData?.audioTitle}</p>
                                </div>
                                <div className='stories-details-page-top-section-left-content-box-body'>
                                    <h4>{sectionData?.storiesDetailsData?.topSectionData?.artistTitle}</h4>
                                </div>
                                <div className='stories-details-page-top-section-left-content-box-footer'>
                                    <button className='border-right'><FontAwesomeIcon icon={faStar} /> watch</button>
                                    <button className='border-right-btn-2'><FontAwesomeIcon icon={faCircleDot} /> view project</button>
                                </div>
                            </div>
                        }
                        {
                            sectionData.storiesDetailsData.topSectionData.sectionImg3 && <img src={sectionData.storiesDetailsData.topSectionData.sectionImg3} className='stories-details-page-top-section-left-content-sectionImg' alt='section-img' />
                        }
                    </div>
                    <div className='col-md-6 stories-details-page-top-section-right-content'>
                        {
                            sectionData?.storiesDetailsData?.topSectionData?.contentData?.map((data, index) => (
                                <div key={index}>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    sectionData?.storiesDetailsData?.topSectionData?.sectionImg1 &&
                    sectionData?.storiesDetailsData?.topSectionData?.sectionImg2 && <div className='row mx-0 stories-details-page-top-section-content1'>
                        <div className='col-md-6 stories-details-page-top-section-left-content1'>
                            <img src={sectionData?.storiesDetailsData?.topSectionData?.sectionImg1} className='img-fluid' alt='section-img' />
                        </div>
                        <div className='col-md-6 stories-details-page-top-section-right-content1'>
                            <img src={sectionData?.storiesDetailsData?.topSectionData?.sectionImg2} className='img-fluid' alt='section-img' />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default StoriesDetailsTopSection
