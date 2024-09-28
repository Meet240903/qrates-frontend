import React, { useRef, useState } from 'react';
import sectionimg from '../../assets/images/projectDetailsImgs/recordsProject1Imgs/sectionImg1.png';
import sectionAudio from '../../assets/images/projectDetailsImgs/recordsProject1Imgs/sample.mp3';
import '../../assets/css/recordsProjectDetailsPagesCSS/projectDetailsTopSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardFast, faForwardFast, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const ProjectDetailsTopSection = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

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

    const handleProgress = () => {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration;
        const progressPercentage = (current / total) * 100;
        setProgress(progressPercentage);
        setCurrentTime(current); // Update current time
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration); // Set the total duration
    };

    // Helper function to format time (e.g., 1:30)
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <>
            <div className='records-project-details-page-top-section-container'>
                <img src={sectionimg} className='img-fluid' alt='section-top-img' />
            </div>
            <div className='records-project-details-page-top-section-audio-container'>
                <p>Rescue - Chemical Modulation</p>
                <div className='records-project-details-page-top-section-audio-content'>
                    <audio
                        ref={audioRef}
                        onTimeUpdate={handleProgress}
                        onLoadedMetadata={handleLoadedMetadata}
                    >
                        <source src={sectionAudio} type="audio/mpeg" />
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

                    {/* Progress Bar */}
                    <div className="records-project-details-page-top-section-progress-bar">
                        <div
                            className="records-project-details-page-top-section-progress"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsTopSection;
