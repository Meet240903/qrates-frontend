import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailsTopSection from './RecordsProjectDetailPages/ProjectDetailsTopSection'
import ProjectDetailsMiddleSection from './RecordsProjectDetailPages/ProjectDetailsMiddleSection'
import recordsPageProjectsData from '../data/RecordsPageProjectsData'

const RecordsProjectDetails = () => {
    const { slugs } = useParams()

    const data = recordsPageProjectsData?.find(index => index?.slugs === slugs);

    return (
        <>
            <ProjectDetailsTopSection sectionData={data?.projectDetailsData?.topSectionData} />
            <ProjectDetailsMiddleSection sectionData={data} />
        </>
    )
}

export default RecordsProjectDetails
