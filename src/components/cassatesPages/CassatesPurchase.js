import React from 'react'
import recordPageFilterData from '../../data/RecordsPageFilterData'
import recordsPageProjectsData from '../../data/RecordsPageProjectsData';
import cassatesPageProjectsData from '../../data/CassatesPageProjectsData';

const CassatesPurchase = ({ filterFill }) => {
    const truncateTitle = (title, maxLength) => {
        if (!title) return ""; // Return empty string if no title is provided

        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    }
    const selectedCassatesPageProjectsData = cassatesPageProjectsData.slice(2, 11);
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
                        selectedCassatesPageProjectsData?.map((data, index) => (
                            <div className='col-md-4 records-page-project-section-content-box' key={index}>
                                <div className='records-page-project-section-content-box-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='product-img' />
                                </div>
                                <div className='records-page-project-section-content-box-body'>
                                    <h1>{truncateTitle(data?.projectTitle, 25)}</h1>
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

export default CassatesPurchase
