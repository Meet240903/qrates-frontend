import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailsTopSection from './RecordsProjectDetailPages/ProjectDetailsTopSection'
import ProjectDetailsMiddleSection from './RecordsProjectDetailPages/ProjectDetailsMiddleSection'

const RecordsProjectDetails = () => {
    // const { slugs } = useParams()
    return (
        <>
            <ProjectDetailsTopSection />
            <ProjectDetailsMiddleSection />
        </>
    )
}

export default RecordsProjectDetails
