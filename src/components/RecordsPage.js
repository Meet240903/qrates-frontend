import React, { useState } from 'react'
import '../assets/css/recordsPage.css'
import RecordsAllProjects from './recordsPages/RecordsAllProjects'
import RecordsCrowdfunding from './recordsPages/RecordsCrowdfunding'
import RecordsPurchase from './recordsPages/RecordsPurchase'

const RecordsPage = () => {
    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <>
            <div className='records-page-section-container'>
                <h1 onClick={() => setSelectedPage(1)}
                    style={{
                        color: selectedPage === 1 ? '#fff' : ''
                    }}
                >All projects</h1>
                <h1 onClick={() => setSelectedPage(2)}
                    style={{
                        color: selectedPage === 2 ? '#fff' : ''
                    }}
                >Crowdfunding</h1>
                <h1 onClick={() => setSelectedPage(3)}
                    style={{
                        color: selectedPage === 3 ? '#fff' : ''
                    }}
                >Purchase</h1>
            </div>
            {
                selectedPage === 1 && <RecordsAllProjects filterFill="all projects" />
            }
            {
                selectedPage === 2 && <RecordsCrowdfunding filterFill="crowdfunding" />
            }
            {
                selectedPage === 3 && <RecordsPurchase filterFill="purchase" />
            }
        </>
    )
}

export default RecordsPage
