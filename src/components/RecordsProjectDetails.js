import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailsTopSection from './RecordsProjectDetailPages/ProjectDetailsTopSection'
import ProjectDetailsMiddleSection from './RecordsProjectDetailPages/ProjectDetailsMiddleSection'
import recordsPageProjectsData from '../data/RecordsPageProjectsData'
import cassatesPageProjectsData from '../data/CassatesPageProjectsData'

const RecordsProjectDetails = () => {
    const { slugs } = useParams()

    const RecordsData = recordsPageProjectsData?.find(index => index?.slugs === slugs);
    const CassetesData = cassatesPageProjectsData?.find(index => index?.slugs === slugs);

    return (
        <>
            <ProjectDetailsTopSection sectionData={RecordsData ? RecordsData?.projectDetailsData?.topSectionData : CassetesData?.projectDetailsData?.topSectionData} />
            <ProjectDetailsMiddleSection sectionData={RecordsData ? RecordsData : CassetesData} />
        </>
    )
}

export default RecordsProjectDetails
