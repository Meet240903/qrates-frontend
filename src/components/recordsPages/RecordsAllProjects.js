import React from 'react'
import '../../assets/css/recordsPageCSS/recordsAllProjects.css'
import recordPageFilterData from '../../data/RecordsPageFilterData'
import recordsPageProjectsData from '../../data/RecordsPageProjectsData'
import { Link } from 'react-router-dom'

const RecordsAllProjects = ({ filterFill }) => {
    const truncateTitle = (title, maxLength) => {
        if (!title) return ""; // Return empty string if no title is provided

        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    }

    return (
        <>
            <div className='records-page-all-project-filter-section-container'>
                {
                    recordPageFilterData?.map((data, index) => (
                        <div className='records-page-all-project-filter-section-content' key={index}>
                            {
                                data?.filterData?.map((data, index) => (
                                    <div className='records-page-all-project-filter-section-content-links' key={index}
                                        style={{
                                            backgroundColor: data?.filterTitle === filterFill ? '#000' : '',
                                            color: data?.filterTitle === filterFill ? '#fff' : ''
                                        }}
                                    >
                                        <span>{data?.filterTitle}</span>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className='records-page-project-section-container'>
                <div className='row mx-0 records-page-project-section-content'>
                    {
                        recordsPageProjectsData?.map((data, index) => (
                            <div className='col-md-4 records-page-project-section-content-box' key={index}>
                                <Link to={`/records-project-details/${data?.slugs}`} target='_top'>
                                    <div className='records-page-project-section-content-box-img'>
                                        <img src={data?.sectionImg} className='img-fluid' alt='product-img' />
                                    </div>
                                </Link>
                                <div className='records-page-project-section-content-box-body'>
                                    <h1>{truncateTitle(data?.projectTitle, 32)}</h1>
                                    <h2>{data?.artistTitle}</h2>
                                    <div className='records-page-project-section-content-box-body-genre-list-content'>
                                        {
                                            data?.genreData?.map((data, index) => (
                                                <div className='records-page-project-section-content-box-body-genre-list-content-box' key={index}>
                                                    <small>{data?.genreList}</small>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='records-page-project-section-content-box-footer'>
                                    <small>{data?.moneyType} {data?.projectPrice}</small>
                                    <small>{data?.footerContent}</small>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RecordsAllProjects
