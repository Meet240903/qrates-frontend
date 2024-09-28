import React, { useState, useRef } from 'react';
import sectionAudio from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sample.mp3';
import sectionAudio1 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionAudio1.mp3';
import sectionAudio2 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionAudio2.mp3';
import sectionAudio3 from '../../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionAudio3.mp3';
import '../../../assets/css/recordsProjectDetailsPagesCSS/middleSectionPagescss/middleSectionTracklistSection.css'; // Make sure to add the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const MiddleSectionTracklistSection = () => {
    const [activeTrackIndex, setActiveTrackIndex] = useState(null);
    const [progress, setProgress] = useState(0);
    const audioRefs = useRef([]);

    const tracklistData = [
        {
            trackTitle: "Eddie Cousin",
            trackArtist: "King Gizzard & the Lizard Wizard",
            time: "02:38",
            trackAudio: sectionAudio1,
        },
        {
            trackTitle: "Good to Me",
            trackArtist: "King Gizzard & the Lizard Wizard",
            time: "02:23",
            trackAudio: sectionAudio2,
        },
        {
            trackTitle: "Fried",
            trackArtist: "King Gizzard & the Lizard Wizard",
            time: "03:09",
            trackAudio: sectionAudio3,
        },
        {
            trackTitle: "Tomb/Beach",
            trackArtist: "King Gizzard & the Lizard Wizard",
            time: "03:47",
            trackAudio: sectionAudio,
        },
    ];

    const handlePlayPause = (index) => {
        const currentAudio = audioRefs.current[index];

        if (index === activeTrackIndex && !currentAudio.paused) {
            currentAudio.pause();
            setActiveTrackIndex(null);
        } else {
            // Pause the currently playing track if there is one
            if (activeTrackIndex !== null) {
                audioRefs.current[activeTrackIndex].pause();
            }
            currentAudio.play();
            setActiveTrackIndex(index);
        }
    };

    const handleTimeUpdate = (index) => {
        const currentAudio = audioRefs.current[index];
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        setProgress(progress);
    };

    return (
        <>
            <h1>Tracklist</h1>
            <div className="records-project-details-page-middle-section-left-content-tracks-section-content">
                {/* <div className="records-project-details-page-middle-section-left-content-tracks-section-left-content"> */}
                {
                    tracklistData?.map((data, index) => (
                        <div key={index} className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-item">
                            <div
                                className={`records-project-details-page-middle-section-left-content-tracks-section-left-content-circle-button ${activeTrackIndex === index ? 'playing' : ''}`}
                                onClick={() => handlePlayPause(index)}
                            >
                                <audio
                                    ref={(el) => (audioRefs.current[index] = el)}
                                    src={data.trackAudio}
                                    onTimeUpdate={() => handleTimeUpdate(index)}
                                />
                                <div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-progress-circle" style={{ background: `conic-gradient(#00b289 ${progress}%, #ccc 0)` }}></div>
                                <div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-play-pause-icon"><FontAwesomeIcon icon={activeTrackIndex === index ? faPauseCircle : faPlayCircle} /></div>
                            </div>
                            <div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-info">
                                <p className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-title">{data.trackTitle}</p>
                                <p className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-artist">{data.trackArtist}</p>
                            </div>
                            <div className="records-project-details-page-middle-section-left-content-tracks-section-left-content-track-time">{data.time}</div>
                        </div>
                    ))
                }
                {/* </div> */}
            </div>
        </>
    );
};

export default MiddleSectionTracklistSection;
