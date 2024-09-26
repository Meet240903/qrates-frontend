import React from 'react'
import storiesData from '../../data/StoriesData';

const StoriesWaxHeart = () => {
    const truncateTitle = (title, maxLength) => {
        if (!title) return ""; // Return empty string if no title is provided

        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    }

    const selectedStoriesData = storiesData.filter(item => item.storyType === 'wax heart');
    return (
        <>
            <div className='stories-page-story-section-container'>
                <div className='row mx-0 stories-page-story-section-content'>
                    {
                        selectedStoriesData?.map((data, index) => (
                            <div className='col-md-4 stories-page-story-section-content-box' key={index}>
                                <div className='stories-page-story-section-inner-content-box'>
                                    <div className='stories-page-story-section-inner-content-box-img'
                                        style={{
                                            backgroundImage: data?.bgImg ?
                                                `url(${data.bgImg})` : 'none'
                                        }}
                                    >
                                        <div className='stories-page-story-section-inner-content-box-img-span-box'>
                                            <span>{data?.storyType}</span>
                                        </div>
                                    </div>
                                    <div className='stories-page-story-section-inner-content-box-body'>
                                        <p>{data?.title}</p>
                                        <h3>{truncateTitle(data?.content, 50)}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default StoriesWaxHeart
