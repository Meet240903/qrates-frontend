import React from 'react'
import '../../assets/css/forArtistsPageSectionCSS/forArtistsCommunitySection.css'
import { Link } from 'react-router-dom'

const ForArtistsCommunitySection = () => {
    return (
        <>
            <div className='for-artists-page-community-section-container'>
                <div className='for-artists-page-community-section-content'>
                    <div className='for-artists-page-community-section-content-title'>
                        <p>community</p>
                    </div>
                    <h2>Join a growing community.</h2>
                    <p className='for-artists-page-community-section-inner-content'>
                        We're building a home for the next generation vinyl lovers and cassette junkies. Get in front of fans, connect with artists, labels and stores.
                    </p>
                    <Link to='/stories' target='_top'>
                        <button>read more stories</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ForArtistsCommunitySection
