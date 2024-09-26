import React, { useState } from 'react'
import '../assets/css/storiesPage.css'
import StoriesAllStories from './storiesPages/StoriesAllStories';
import StoriesQratesRecommends from './storiesPages/StoriesQratesRecommends';
import StoriesInterviews from './storiesPages/StoriesInterviews';
import StoriesSceneCheck from './storiesPages/StoriesSceneCheck';
import StoriesWaxHeart from './storiesPages/StoriesWaxHeart';
import StoriesQratesBiz from './storiesPages/StoriesQratesBiz';

const StoriesPage = () => {
    const storiesHeaderData = [
        {
            title: "all stories",
        },
        {
            title: "Qrates Recommends",
        },
        {
            title: "Interview",
        },
        {
            title: "Scene Check",
        },
        {
            title: "Wax Heart",
        },
        {
            title: "Qrates Biz",
        },
    ]
    const [selectedPage, setSelectedPage] = useState(0);
    return (
        <>
            <div className='stories-page-header-section-container'>
                {
                    storiesHeaderData?.map((data, index) => (
                        <div key={index}>
                            <h3 onClick={() => setSelectedPage(index)}
                                style={{
                                    textDecoration: selectedPage === index ? 'underline' : '',
                                }}
                            >{data?.title}</h3>
                        </div>
                    ))
                }
            </div>
            {
                selectedPage === 0 && <StoriesAllStories />
            }
            {
                selectedPage === 1 && <StoriesQratesRecommends />
            }
            {
                selectedPage === 2 && <StoriesInterviews />
            }
            {
                selectedPage === 3 && <StoriesSceneCheck />
            }
            {
                selectedPage === 4 && <StoriesWaxHeart />
            }
            {
                selectedPage === 5 && <StoriesQratesBiz />
            }
        </>
    )
}

export default StoriesPage
